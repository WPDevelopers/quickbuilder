import { isArray, isEmptyObj, isString } from '../utils';

const useDefaults = ( parentName, helpers, value, trigger : any ) => {
    if( trigger != undefined && trigger?.defaults != undefined && ! isEmptyObj( trigger.defaults ) ) {
        const { defaults } = trigger;
        if( defaults != undefined && ! isEmptyObj( defaults ) ) {
            let defaultsData = {};
            if( defaults?.[ value ] ) {
                let at = defaults[value].indexOf("@"),
                    colon = defaults[value].indexOf(":");
                if (at === 0 && colon > 0) {
                    let eligibleKey = defaults[value].substr(1, colon - 1);
                    let eligibleDataToSet = defaults[value].substr(colon + 1);
                    let eligibleDefaultData = helpers.getValueForDefault( eligibleKey, parentName );
                    if (eligibleKey != "" && eligibleDataToSet != "") {
                        defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
                        helpers.setValue( eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
                    }
                }
            }
            // else if( defaults?.[ value ] && isArray(defaults?.[ value ]) ) {
            //     for( let eachKey of defaults?.[ value ] ) {
            //         let at = eachKey.indexOf("@"),
            //             colon = eachKey.indexOf(":");
            //         if (at === 0 && colon > 0) {
            //             let eligibleKey = eachKey.substr(1, colon - 1);
            //             let eligibleDataToSet = eachKey.substr(colon + 1);
            //             let eligibleDefaultData = helpers.getValueForDefault( eligibleKey, parentName );
            //             if (eligibleKey != "" && eligibleDataToSet != "") {
            //                 defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
            //                 helpers.setValue( eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
            //             }
            //         }
            //     }
            // }
            return {defaultsData};
        }
    }
}

export default useDefaults;
