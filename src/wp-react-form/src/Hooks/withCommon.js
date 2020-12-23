import React, { Component } from "react";
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
			dispatch("wprf-store").setFieldValue({
				[this.props.name]: value,
			});
		};

		onBlur = (event) => {
			console.log("on blur field validation: event", event);
		};

		render() {
			return (
				<div
					className={`wprf-control ${
						this.props.classes != undefined
							? this.props.classes
							: ""
					}`}
				>
					<WrappedComponent
						{...this.props}
						onChange={this.onChange}
						onBlur={this.onBlur}
					/>
				</div>
			);
		}
	}

	return WithCommon;
};

export default withCommon;
