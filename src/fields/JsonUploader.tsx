import React, { useState, useEffect, useCallback } from "react";
import { withLabel } from "../core/hooks";
import { validFieldProps } from "../core/utils";
import { __ } from "@wordpress/i18n";

const JsonUploader = (props) => {
	const validProps = validFieldProps(props, [
		"is_pro",
		"visible",
		"trigger",
		"disable",
		"parentIndex",
		"context",
		"copyOnClick",
	]);

	const [uploadedFile, setUploadedFile] = useState<any>();

	const handleChange = (e) => {
		if (!e.target.files.length) {
			return;
		}

		const file = e.target.files[0];

		if(file?.type != 'application/json' && file?.type != 'text/json'){
			props.context.alerts.toast('error', __(`Invalid file type.`, 'notificationx'));
			return;
		}

		setUploadedFile(file);

		let reader = new FileReader();
		const self = this;
		reader.onload = (event) => {
			const json = event?.target?.result;
			props.onChange({
				target: {
					type: 'jsonuploader',
					name: props.name,
					value: json,
				}
			});
		};
		reader.readAsText(file);
	};

	const removeFile = () => {
		setUploadedFile(null);
		props.onChange({
			target: {
				type: 'jsonuploader',
				name: props.name,
				value: null,
			}
		});
	}

	useEffect(() => {
		if(!props?.value){
			setUploadedFile(null);
		}
	}, [props?.value])

	return (
		<span className="wprf-json-uploader">
			{!uploadedFile && (
				<label className="wprf-json-uploaderButton">
					<span>{__("Upload")}</span>
					<input
						type="file"
						accept="application/JSON"
						onChange={(e) => {
							handleChange(e);
						}}
					/>
				</label>
			)}
			{uploadedFile && uploadedFile?.name && (
				<span className="wpfr-json-file-name-wrapper">
					<span className="wpfr-json-file-name">
						{uploadedFile?.name.length > 20
							? `${uploadedFile?.name.substr(
									0,
									9
							  )}...${uploadedFile?.name.substr(
									uploadedFile?.name.length - 7
							  )}`
							: uploadedFile?.name}
					</span>
					<span
						className="wprf-json-file-delete-button"
						onClick={removeFile}
					>
						x
					</span>
				</span>
			)}
		</span>
	);
};

export default withLabel(React.memo(JsonUploader));
