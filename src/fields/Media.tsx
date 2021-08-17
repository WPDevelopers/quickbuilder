import React, { useState, useEffect } from 'react'
import { MediaUpload } from '@wordpress/media-utils';
import { withLabel } from '../..';

const Media = (props) => {
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
                imageData != null &&
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

export default withLabel(Media);
