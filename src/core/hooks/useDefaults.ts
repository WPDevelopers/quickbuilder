import { isArray, isEmptyObj, isObject, isString } from '../utils';

const useDefaults = ( parentName, helpers, value, trigger : any ) => {
    if( trigger != undefined && trigger?.defaults != undefined && ! isEmptyObj( trigger.defaults ) ) {
        const { defaults } = trigger;
        if( defaults != undefined && ! isEmptyObj( defaults ) ) {
            let defaultsData = {};
            if( defaults?.[ value ] && isString(defaults?.[ value ]) ) {
                let at = defaults[value].indexOf("@"),
                    colon = defaults[value].indexOf(":");
                if (at === 0 && colon > 0) {
                    let eligibleKey = defaults[value].substr(1, colon - 1);
                    let eligibleDataToSet = defaults[value].substr(colon + 1);
                    let eligibleDefaultData = helpers.getValueForDefault( eligibleKey, parentName );
                    if (eligibleKey != "" && eligibleDataToSet != "") {
                        eligibleDataToSet = eligibleDataToSet === 'false' ? false : eligibleDataToSet;
                        defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
                        helpers.setValue( eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
                    }
                }
            }
            else if( defaults?.[ value ] && (isArray(defaults[ value ]) || isObject(defaults[ value ])) ) {
                for( let property in defaults[ value ] ) {
                    let eachKey = defaults[ value ][property];
                    if( eachKey && (isArray(eachKey) || isObject(eachKey))){
                        let eligibleDefaultData = helpers.getValueForDefault( property, parentName );
                        if (property != "" && eachKey != "") {
                            eachKey = eachKey === 'false' ? false : eachKey;
                            defaultsData[property] = eligibleDefaultData ? eligibleDefaultData : eachKey;
                            helpers.setValue( property, eligibleDefaultData ? eligibleDefaultData : eachKey);
                        }
                    }
                    else if(eachKey) {
                        let at = eachKey.indexOf("@"),
                            colon = eachKey.indexOf(":");
                        if (at === 0 && colon > 0) {
                            let eligibleKey:any = eachKey.substr(1, colon - 1);
                            let eligibleDataToSet:any = eachKey.substr(colon + 1);
                            if( eachKey.indexOf(".") > -1 ) {
                                eligibleKey = eligibleKey.split('.')
                            }
                            let eligibleDefaultData = helpers.getValueForDefault( eligibleKey, parentName );
                            if (eligibleKey != "" && eligibleDataToSet != "") {
                                eligibleDataToSet = eligibleDataToSet === 'false' ? false : eligibleDataToSet;
                                defaultsData[eligibleKey] = eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet;
                                helpers.setValue( eligibleKey, eligibleDefaultData ? eligibleDefaultData : eligibleDataToSet);
                            }
                        }
                    }
                }
            }
            return {defaultsData};
        }
    }
}

export default useDefaults;
