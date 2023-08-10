import React, { useState, useEffect } from 'react'
import { MediaUpload } from '@wordpress/media-utils';
import { addFilter } from "@wordpress/hooks";
import { withLabel } from '../core/hooks';

const _Media = (props) => {
    const [imageData, setImageData] = useState(props.value?.url ? props.value : null)

    useEffect(() => {
        props.onChange({
            target: {
                type: 'media',
                name: props.name,
                value: imageData
            }
        })
    }, [imageData])

    return (
        <div className="wprf-control wprf-media">
            {
                imageData != null && !props?.notImage &&
                <div className="wprf-image-preview">
                    {imageData != null && imageData?.url && <img src={imageData.url} alt={imageData.title} />}
                </div>
            }
            <div className="wprf-image-uploader">
                <MediaUpload
                    onSelect={(media) => {
                        setImageData({
                            id: media.id,
                            title: media.title,
                            url: media.url
                        });
                    }}
                    multiple={false}
                    allowedTypes={['image']}
                    value={imageData}
                    render={({ open }) => {
                        return <>
                            {
                                imageData != null &&
                                <button className="wprf-btn wprf-image-remove-btn" onClick={() => setImageData(null)}>
                                    {props?.remove || 'Remove'}
                                </button>
                            }
                            <button
                                className="wprf-btn wprf-image-upload-btn"
                                onClick={open}
                            >
                                {imageData != null ? (props?.reset || 'Change Image') : (props?.button || 'Upload')}
                            </button>
                        </>
                    }}
                />
            </div>
        </div>
    )
}
const Media = withLabel(_Media);
export default Media;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('media' === type) {
    return <Media {...props} />;
  }
  return field;
});
