import React from 'react'
import { applyFilters } from '@wordpress/hooks'
import type { ActionProps } from '../types'

const Action = (props: ActionProps) => {
    return (
        <>
            {applyFilters(props.action ?? '', '', props)}
        </>
    )
}

export default Action;
