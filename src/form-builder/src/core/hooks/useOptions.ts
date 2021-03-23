import { useCallback, useEffect, useState } from "react";
import useDefaults from "./useDefaults";
import { isArray, isEmptyObj, isObject } from "../utils";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const { field, meta, helpers }  = props;
    const builderContext = useBuilderContext();

    let value = meta.value;
    if( meta.parent && meta.parent.type === 'group' ) {
        let helpers = builderContext.getFieldHelpers(props);
        let parentValue = helpers.getValue( meta.parent.name);
        if( parentValue ) {
            value = parentValue[field.name];
        }
        // if( ! isEmptyObj(meta.value) ) {
        //     value = meta.value[field.name];
        // }
    }

    // if( field.name === 'source' ) {
    //     console.log( "value", props );
    // }

    const options = builderContext.eligibleOptions(props[propertyName]);
    const selectedOption = builderContext.eligibleOption(options, value, field.multiple ?? false );

    let option : string | Array<string>;
    if( ! field.multiple ) {
        option = selectedOption.value || meta.value || meta.default;
    } else {
        option = (isArray(selectedOption) && selectedOption.map( (o: any) => o.value )) || meta.value || meta.default;
    }

    // useEffect(() => {
    //     if( option ) {
    //         builderContext.setFieldValue(field.name, option);
    //     }
    // }, [option])


    return { options, option, selectedOption }
}

export default useOptions;