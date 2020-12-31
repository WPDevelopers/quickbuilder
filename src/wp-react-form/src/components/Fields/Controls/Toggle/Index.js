import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useInstanceId } from "@wordpress/compose";

import { Row, Column } from "../../../../core";
import withConditionedFields from "../../../../Hooks/withConditionedFields";

import Toggle from "./Toggle";

import "./toggle.scss";

function Index(props) {
	if (props?.multiple && !props?.options) {
		throw Error(
			"You should give some options for toggle type if multiple is true."
		);
	}

	const [isChecked, setChecked] = useState(false);
	useEffect(() => {
		if (!props?.multiple) {
			props?.onChange(isChecked);
		}
	}, [isChecked]);

	let styles = {
		label: {
			position: "right",
		},
		option: {
			column: 4,
		},
		...props?.style,
	};

	if (props?.multiple) {
		const instanceId = useInstanceId(Index);
		const { name, label, options, onChange, value } = props;
		const [saved, setSaved] = useState(value ?? {});

		useEffect(() => {
			if (Object.keys(saved).length > 0) {
				onChange(saved);
			}
		}, [saved]);

		return (
			<div className={classNames("wprf-toggle-wrapper")}>
				<h4>{label}</h4>
				<div className="wprf-toggle-options">
					<Row>
						{options.map((item, index) => {
							let id = `${name}-${instanceId}-${index}`;
							return (
								<Column column={styles?.option?.column}>
									<Toggle
										key={index}
										name={id}
										id={id}
										{...item}
										styles={styles}
										value={saved?.[item.value]}
										setChecked={(res) =>
											setSaved((prev) => ({
												...prev,
												[item.value]: res,
											}))
										}
									/>
								</Column>
							);
						})}
					</Row>
				</div>
			</div>
		);
	}

	return (
		<Toggle
			styles={styles}
			setChecked={(response) => setChecked(response)}
			{...props}
		/>
	);
}

export default withConditionedFields(Index);
