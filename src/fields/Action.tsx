import React from 'react'
import { applyFilters } from '@wordpress/hooks'

const Action = (props) => {
    console.log("props", props);

    return (
        <>
            {applyFilters(props.action, '', props)}
        </>
    )
}

export default Action;