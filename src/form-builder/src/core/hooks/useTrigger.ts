import { useState, useEffect } from 'react'
import { isArray, isObject } from '../utils';
import useBuilderContext from './useBuilderContext';

const useTrigger = ( props ) => {
    const builderContext = props.context;
    if( props?.trigger && isArray( props?.trigger ) ) {
        props?.trigger.map( ( trigger ) => {
            const triggerType = trigger?.type || 'setFieldValue';
            if( trigger?.action && isObject(trigger?.action) ) {
                for( let key in trigger?.action ) {
                    let eligibleKey: string|Array<string> = key;
                    if( eligibleKey.indexOf(".") > -1 ) {
                        eligibleKey = eligibleKey.split('.')
                    }
                    let eligibleData = trigger?.action[ key ];
                    let eligibleDefaultData = builderContext.getFieldHelpers().getValueForDefault( eligibleKey, props.name );
                    if (eligibleKey != "" && eligibleData != "") {
                        builderContext[triggerType](eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleData)
                    }
                }
            }
        });
    }
}

export default useTrigger;
