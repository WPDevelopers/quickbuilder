import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useBuilderContext } from "../core/hooks";
import { sortingFields } from "../core/utils";
import { Field } from "../fields";

const Section = (props) => {
	const { searchable = false, searchPlaceholder = "Search..." } = props;
	const builderContext = useBuilderContext();
	const [isCollapse, setCollapse] = useState(props.collapsed ?? false);
	const [fields, setFields] = useState([]);
	const [filteredFields, setFilteredFields] = useState([]);
	const [searchString, setSearchString] = useState("");

	useEffect(() => {
		const newFields = sortingFields(props.fields);
		/**
		 * FIXME: the line below the doc:
		 * Commented for Issue#11, Cycle 7
		 * Uncommented for Issue #38, Cycle 7
		 */
		builderContext.setFormField(
			[...props.parentIndex, "fields"],
			newFields
		);
		// builderContext.setFormField([...props.parentIndex, 'sorted'], true);
		let allFields = newFields.map((item, index) => {
			let parentIndex = [...props.parentIndex, "fields", index];
			return (
				<Field key={item.name} {...item} parentIndex={parentIndex} />
			);
		});
		setFields(allFields);
		setFilteredFields(allFields);
	}, []);

	const handleSearchString = (e) => {
		setSearchString(e?.target?.value);
	};

	useEffect(() => {
		if (searchString) {
			let newFields = fields.filter((field) =>
				field?.props?.label
					?.toLowerCase()
					?.includes(searchString.toLowerCase())
			);
			setFilteredFields(newFields);
		} else {
			setFilteredFields(fields);
		}
	}, [searchString, fields]);

	const componentClasses = classNames(
		"wprf-control-section",
		props?.classes,
		props?.name,
		{
			"wprf-section-collapsed": props?.collapsible && isCollapse,
		}
	);

	return (
		<div id={props?.name} className={componentClasses}>
			{props.placeholder && (
				<div className="wprf-section-title">
					<h4>{props.placeholder}</h4>
					{props.collapsible && (
						<button onClick={() => setCollapse(!isCollapse)}>
							{/* <Icon
                            icon={`arrow-${isCollapse ? "down" : "up"}-alt2`}
                        /> */}
							Icon
						</button>
					)}
				</div>
			)}
			{searchable ? (
				<div className="wprf-section-fields">
					<div className="wprf-section-search-form">
						<input
							type="search"
							name=""
							id=""
							placeholder={searchPlaceholder}
							onChange={(e) => handleSearchString(e)}
							value={searchString}
						/>
					</div>
					<div className="wprf-section-search-results">
						{filteredFields}
					</div>
				</div>
			) : (
				<div className="wprf-section-fields">{filteredFields}</div>
			)}
		</div>
	);
};

export default React.memo(Section);
