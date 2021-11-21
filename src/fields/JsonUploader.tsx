import React, { useState, useCallback } from "react";
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

	const [uploadedFile, setUploadedFile] = useState(undefined);

	const handleChange = (e) => {
		setUploadedFile(e.target.files[0]);
	};

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
						onClick={() => setUploadedFile(undefined)}
					>
						x
					</span>
				</span>
			)}
		</span>
	);
};

export default withLabel(React.memo(JsonUploader));
