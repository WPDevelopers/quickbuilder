import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useInstanceId } from "@wordpress/compose";

import { Row, Column } from "../../../../core";
import withConditionedFields from "../../../../Hooks/withConditionedFields";

import Toggle from "./Toggle";

const Multiple = (props) => {
	if (props?.multiple && !props?.options && !props.options?.length) {
		throw Error(
			"You should give some options for toggle type if multiple is true."
		);
	}
	const { name, label, options, onChange, value, savedValue } = props;
	const styles = {
		column: 4,
		...props?.styles,
	};

	const instanceId = useInstanceId(Multiple);
	const [saved, setSaved] = useState(savedValue ?? value);

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
							<Column column={styles?.column}>
								<Toggle
									key={item.value}
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
};

export default withConditionedFields(Multiple);
