import { MediaUpload } from "@wordpress/media-utils";
import React, { useEffect, useState } from "react";
import { withLabel } from "../core/hooks";

const Media = (props) => {
	const [imageData, setImageData] = useState(
		props.value?.url ? props.value : null
	);

	useEffect(() => {
		props.onChange({
			target: {
				type: "media",
				name: props.name,
				value: imageData,
			},
		});
	}, [imageData]);

	return (
		<div className="wprf-control wprf-media">
			{imageData != null && !props?.notImage && (
				<div className="wprf-image-preview">
					{imageData != null && imageData?.url && (
						<img src={imageData.url} alt={imageData.title} />
					)}
				</div>
			)}
			<div
				className={`wprf-image-uploader ${
					imageData != null && !props?.notImage ? "uploaded" : ""
				}`}
			>
				<MediaUpload
					onSelect={(media) => {
						setImageData({
							id: media.id,
							title: media.title,
							url: media.url,
						});
					}}
					multiple={false}
					allowedTypes={["image"]}
					value={imageData}
					render={({ open }) => {
						return (
							<>
								{imageData != null ? (
									<div className="wprf_image_overlay">
										<button
											className="wprf-btn wprf-image-change-btn"
											onClick={open}
										>
											<i className="btd-icon btd-upload"></i>
										</button>
										<button
											className="wprf-btn wprf-image-remove-btn"
											onClick={() => setImageData(null)}
										>
											{props?.remove || (
												<i className="btd-icon btd-delete"></i>
											)}
										</button>
									</div>
								) : (
									<button
										className="wprf-btn wprf-image-upload-btn"
										onClick={open}
									>
										<span className="icon">
											<i className="btd-icon btd-upload"></i>
										</span>
										<span className="title">
											Click to upload
										</span>
										<span className="info">
											SVG, PNG, JPG or GIF (max.
											800x400px)
										</span>
									</button>
								)}
							</>
						);
					}}
				/>
			</div>
		</div>
	);
};

export default withLabel(Media);
