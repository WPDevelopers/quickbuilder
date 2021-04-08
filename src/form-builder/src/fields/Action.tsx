import React from 'react'
import { applyFilters } from '@wordpress/hooks'

export const Action = (props) => {
    return (
        <>
            {applyFilters(props.action)}
        </>
    )
}

export default Action;