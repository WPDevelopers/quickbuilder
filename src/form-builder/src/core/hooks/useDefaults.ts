import React, { useEffect } from 'react'
import { isEmptyObj } from '../utils';

const useDefaults = ( parentName, helpers, meta, trigger : any ) => {
    if( trigger != undefined && trigger?.defaults != undefined && ! isEmptyObj( trigger.defaults ) ) {
        const { defaults } = trigger;
        if( defaults != undefined && ! isEmptyObj( defaults ) ) {
            for( let obj in defaults ) {
                if( obj === ( meta.value || meta.default ) ) {
                    let at = defaults[obj].indexOf("@"),
                        colon = defaults[obj].indexOf(":");
                        if (at === 0 && colon > 0) {
                            let eligibleKey = defaults[obj].substr(1, colon - 1);
                            let eligibleDataToSet = defaults[obj].substr(colon + 1);
                            let eligibleDefaultData = helpers.getValueForDefault( eligibleKey, parentName );
                            if (eligibleKey != "" && eligibleDataToSet != "") {
                                helpers.setValue( eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
                            }
                        }
                }
            }
        }
    }
}

export default useDefaults;
