import { useEffect, useState } from "react";
import { isArray, sortingFields } from "../utils";
import { useBuilderContext } from "./index";

const useOptions = ( props: any, propertyName: string = 'fields' ) => {
    if( ! props?.[propertyName] ) {
        throw new Error('#options param need to set in order to use useOptions hook.');
    }

    const { value: savedValue, multiple }  = props;
    const builderContext = useBuilderContext();
    const [fieldOptions, setFieldOptions] = useState(props[propertyName]);
    const [lOptions, setOptions] = useState([])
    const [isData, setData] = useState({ options: null, parentIndex: null })
    const [selectedOption, setSelectedOption] = useState(null)
    const [option, setOption] = useState(null)

    useEffect(() => {
        let newFieldsOptions = builderContext.getTabFields( props?.parentIndex )?.[propertyName] || fieldOptions;
        // console.log(props.name, newFieldsOptions);
        // console.log(props.name, 'old', fieldOptions);
        /**
         * old Options is => fieldOptions, L28, 29, 30 ( remove )
         * if there is any issue with other fields, then it should be for AJAX on Select only.
         */
        setOptions(builderContext.eligibleOptions(newFieldsOptions));
        setSelectedOption(builderContext.eligibleOption(newFieldsOptions, savedValue, multiple ?? false ))
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

    useEffect(() => {
        if( lOptions.filter(opt => opt.value === option).length === 0 ){
            let options = sortingFields(lOptions);
            setOption(options?.[0]?.value || savedValue );
        }
    }, [option, lOptions])

    let options = sortingFields(lOptions);
    return { options, option, selectedOption, setOptions, setData }
}

export default useOptions;