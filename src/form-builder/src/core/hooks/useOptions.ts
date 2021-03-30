import { useCallback, useEffect, useState } from "react";
import useDefaults from "./useDefaults";
import { isArray, isEmptyObj, isObject } from "../utils";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const { value: savedValue, multiple }  = props;
    const builderContext = useBuilderContext();

    let value = savedValue;
    // if( meta.parent && meta.parent.type === 'group' ) {
    //     let helpers = builderContext.getFieldHelpers(props);
    //     let parentValue = helpers.getValue( meta.parent.name);
    //     if( parentValue ) {
    //         value = parentValue[field.name];
    //     }
    //     // if( ! isEmptyObj(meta.value) ) {
    //     //     value = meta.value[field.name];
    //     // }
    // }

    // if( field.name === 'source' ) {
    //     console.log( "value", props );
    // }

    const options = builderContext.eligibleOptions(props[propertyName]);
    const selectedOption = builderContext.eligibleOption(options, value, multiple ?? false );

    let option : string | Array<string>;
    if( ! multiple ) {
        option = selectedOption.value || value;
    } else {
        option = (isArray(selectedOption) && selectedOption.map( (o: any) => o.value )) || value;
    }

    // useEffect(() => {
    //     if( option ) {
    //         builderContext.setFieldValue(field.name, option);
    //     }
    // }, [option])


    return { options, option, selectedOption }
}

export default useOptions;