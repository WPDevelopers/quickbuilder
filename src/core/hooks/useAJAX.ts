
import React, {useEffect} from 'react'
import { wpFetch } from '../functions';
import when from '../when';
import useBuilderContext from './useBuilderContext';

export const useAJAX = ( props ) => {
    const builderContext = useBuilderContext();

    if( props?.ajax && when(props?.ajax?.rules, builderContext.values) ) {

        let data = {};

        Object.keys(props?.ajax.data).map( singleData => {
            if( props?.ajax.data[singleData].indexOf('@') > -1 ) {
                let eligibleKey = props?.ajax.data[singleData].substr(1);
                data[singleData] = builderContext.values?.[eligibleKey]
            } else {
                data[singleData] = props?.ajax.data[singleData]
            }
        })

        wpFetch({
            path: props?.ajax.api,
            data: data
        }).then(response => {
            console.log(response);
        })

        let ajaxOptions = data;



        return { ajaxOptions }
    }

    return { ajaxOptions : false };
}

export default useAJAX;
