import React, { Component } from "react";
import * as Yup from "yup";
import { dispatch, select } from "@wordpress/data";

const withCommon = (WrappedComponent) => {
	class WithCommon extends Component {
		componentDidMount() {
			if (this.props.value && this.props[this.props.name] == null) {
				dispatch("wprf-store").setFieldValue({
					[this.props.name]: this.props.value,
				});
			}
		}
		onChange = (value) => {
			if (this.props.errorMessage) {
				dispatch("wprf-store").removeError(this.props.name);
			}
			dispatch("wprf-store").setFieldValue({
				[this.props.name]: value,
			});
		};

		makeValidationRules = (rules) => {
			let tempYup = Yup.string();
			Object.keys(rules).map((rule) => {
				console.log("rule", rule);
				const ruleSet = rule.split(":");
				let functionName = ruleSet[0];
				let firstArg =
					ruleSet[1] != undefined ? ruleSet[1] : rules[rule];
				let secondArg = ruleSet[1] !== undefined ? rules[rule] : null;
				if (firstArg && secondArg) {
					tempYup = tempYup[functionName](firstArg, secondArg);
				} else if (firstArg) {
					tempYup = tempYup[functionName](firstArg);
				} else {
					tempYup = tempYup[functionName]();
				}
			});

			return tempYup;
		};

		onBlur = (event) => {
			console.log("on blur field validation: event", event);
			if (this.props.validation_rules) {
				const validationSchema = Yup.object().shape({
					[this.props.name]: this.makeValidationRules(
						this.props.validation_rules
					),
				});
				validationSchema
					.validate({
						[this.props.name]: this.props[this.props.name],
					})
					.catch((err) => {
						console.log("err", err.message);
						dispatch("wprf-store").setError({
							[this.props.name]: err.message,
						});
					});
			}

			dispatch("wprf-store").setFieldTouched({
				[this.props.name]: true,
			});
		};

		render() {
			let props = { ...this.props };
			delete props.validation_rules;

			return (
				<div
					className={`wprf-control ${
						this.props.classes != undefined
							? this.props.classes
							: ""
					}`}
				>
					<WrappedComponent
						{...props}
						onChange={this.onChange}
						onBlur={this.onBlur}
					/>
					{this.props.isTouched && this.props.errorMessage && (
						<div className="wprf-error-message">
							{this.props.errorMessage}
						</div>
					)}
				</div>
			);
		}
	}

	return WithCommon;
};

export default withCommon;
