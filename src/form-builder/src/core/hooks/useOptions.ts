import { useEffect } from "react";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const builderContext = useBuilderContext();
    const options = builderContext.eligibleOptions(props[propertyName]);
    const opt = builderContext.eligibleOption(options, props.meta.value, props.field?.multiple );

    let option : string | Array<string>;
    if( ! props.field?.multiple ) {
        option = opt.value || props.meta.default;
    } else {
        option = opt.map( (o: any) => o.value ) || props.meta.default;
    }

    useEffect(() => {
        if( option ) {
            builderContext.setFieldValue(props.field.name, option);
        }
    }, [option])

    return { options, option }
}

export default useOptions;