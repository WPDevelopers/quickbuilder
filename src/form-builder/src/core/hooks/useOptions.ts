import { useCallback, useEffect, useState } from "react";
import { isArray } from "../utils";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const { field, meta }  = props;
    const builderContext = useBuilderContext();
    const options = builderContext.eligibleOptions(props[propertyName]);
    const selectedOption = builderContext.eligibleOption(options, meta.value, field.multiple ?? false );

    let option : string | Array<string>;
    if( ! field.multiple ) {
        option = selectedOption.value || meta.default;
    } else {
        option = (isArray(selectedOption) && selectedOption.map( (o: any) => o.value )) || meta.default;
    }

    // useEffect(() => {
    //     if( option ) {
    //         builderContext.setFieldValue(field.name, option);
    //     }
    // }, [option])

    return { options, option, selectedOption }
}

export default useOptions;