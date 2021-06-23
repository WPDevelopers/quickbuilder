import { useEffect, useState } from "react";
import { isArray } from "../utils";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const { value: savedValue, multiple }  = props;
    const builderContext = useBuilderContext();
    const [fieldOptions, setFieldOptions] = useState(props[propertyName]);
    const [options, setOptions] = useState([])
    const [isData, setData] = useState({ options: null, parentIndex: null })
    const [selectedOption, setSelectedOption] = useState(null)
    const [option, setOption] = useState(null)

    useEffect(() => {
        setOptions(builderContext.eligibleOptions(fieldOptions));
        setSelectedOption(builderContext.eligibleOption(fieldOptions, savedValue, multiple ?? false ))
    }, [savedValue, fieldOptions])

    useEffect(() => {
        setFieldOptions(props[propertyName]);
        setOptions(builderContext.eligibleOptions(props[propertyName]));
    }, [props])

    useEffect(() => {
        setOptions(builderContext.eligibleOptions(fieldOptions));
    }, [ fieldOptions ])

    useEffect(() => {
        if( isData.options != null ) {
            // console.log( 'tttttt', [...props[propertyName], ...isData.options] );
            // builderContext.setFormField(isData.parentIndex, [...props[propertyName], ...isData.options])
            // setOptions(builderContext.eligibleOptions(isData.options));
            setFieldOptions(isData.options);
        }
    }, [isData])


    useEffect(() => {
        if( selectedOption != null ) {
            let opt : string | Array<string>;
            if( ! multiple ) {
                opt = selectedOption.value || savedValue;
            } else {
                opt = (isArray(selectedOption) && selectedOption.map( (o: any) => o.value )) || savedValue;
            }
            setOption(opt);
        }
    }, [selectedOption])

    return { options, option, selectedOption, setOptions, setData }
}

export default useOptions;