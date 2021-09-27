import React from 'react'
import { applyFilters } from '@wordpress/hooks'

const Action = (props) => {
    let actions = applyFilters(props.action, props);
    if(actions == props){
        actions = <></>;
    }
    return (
        <>
            {actions}
        </>
    )
}

export default Action;