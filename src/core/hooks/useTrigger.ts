import { isArray, isObject } from '../utils';

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
                    // let eligibleDefaultData = builderContext.getFieldHelpers().getValueForDefault( eligibleKey, props.name );
                    // data should be nullable.
                    if (eligibleKey != "") { // && eligibleData !== ""
                        builderContext[triggerType](eligibleKey, eligibleData) //eligibleDefaultData ? eligibleDefaultData :
                    }
                }
            }
        });
    }
}

export default useTrigger;
