import React from 'react'
import { applyFilters } from '@wordpress/hooks'

const Action = (props) => {
    return (
        <>
            {applyFilters(props.action, '', props)}
        </>
    )
}

export default Action;