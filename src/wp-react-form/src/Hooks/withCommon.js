import React, { Component } from "react";
import { useInstanceId } from "@wordpress/compose";
import classNames from "classnames";
import * as Yup from "yup";
import { dispatch } from "@wordpress/data";
import { SweetAlert } from "../core/functions";

const withCommon = (WrappedComponent, withParent = true) => {
	class WithCommon extends Component {
		componentDidMount() {
			if (this.props.value) {
				dispatch("wprf-store").setFieldValue({
					[this.props.name]: this.props.value,
				});
			}
		}
		onChange = (value, args) => {
			console.log(value);
			if (args?.is_pro) {
				return SweetAlert({
					title: "Hello World",
					text: "Hello World Content",
					icon: "error",
				});
			}
			if (this.props?.errorMessage) {
				dispatch("wprf-store").removeError(this.props.name);
			}
			dispatch("wprf-store").setFieldValue({
				[this.props.name]: value,
			});
		};

		onReset = (name) => {
			dispatch("wprf-store").resetFieldValue(name);
		};

		makeValidationRules = (rules) => {
			let tempYup = Yup.string();
			Object.keys(rules).map((rule) => {
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
						[this.props.name]: this.props.value,
					})
					.catch((err) => {
						dispatch("wprf-store").setError({
							[this.props.name]: err.message,
						});
					});
			}

			dispatch("wprf-store").setFieldTouched({
				[this.props.name]: true,
			});
		};
		/**
		 * Unveiled Properties to Input Types.
		 */
		unveiledProps = ["validation_rules", "errorMessage", "condition"];
		/**
		 * Filter for Object || {}
		 *
		 * @param {function} func
		 * @param {Object} thisObj
		 */
		filter = (func, thisObj) => {
			let newObj = {};
			Object.keys(thisObj)
				.filter((item) => func(item))
				.map((item) => {
					newObj[item] = thisObj[item];
				});
			return newObj;
		};

		render() {
			let props = { ...this.props, id: this.props.id ?? this.props.name };

			let verifiedProps = this.filter(
				(prop) => !this.unveiledProps.includes(prop),
				props
			);

			const componentClasses = classNames(
				"wprf-control",
				`wprf-control-${this.props.type}`,
				this.props.classes
			);

			return (
				<>
					{withParent && (
						<div className={componentClasses}>
							<WrappedComponent
								{...verifiedProps}
								onChange={this.onChange}
								onBlur={this.onBlur}
								onReset={this.onReset}
							/>
							{this.props.isTouched &&
								this.props.errorMessage && (
									<div className="wprf-error-message">
										{this.props.errorMessage}
									</div>
								)}
						</div>
					)}
					{!withParent && (
						<>
							<WrappedComponent
								{...verifiedProps}
								onChange={this.onChange}
								onBlur={this.onBlur}
							/>
							{this.props.isTouched &&
								this.props.errorMessage && (
									<div className="wprf-error-message">
										{this.props.errorMessage}
									</div>
								)}
						</>
					)}
				</>
			);
		}
	}

	return WithCommon;
};

export default withCommon;
