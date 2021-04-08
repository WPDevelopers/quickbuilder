import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Content from './Content'
import { TabConfig } from './types';
// import { BuilderProvider } from '../core/hooks/useBuilderContext';
// import useBuilder from '../core/hooks/useBuilder';

import '../scss/index.scss';
import { useBuilderContext } from '../core/hooks';


const Tab: React.FC<TabConfig> = (props) => {
    // const builderContextState = useBuilder(props);
    const builderContext = useBuilderContext();
    const [activeTab, setActiveTab] = useState(props.config.active);

    useEffect(() => {
        setActiveTab(builderContext.config.active);
    }, [builderContext.config.active])

    useEffect(() => {
        builderContext.setActiveTab(activeTab);
    }, [activeTab])

    return (
        <>
            {/* <BuilderProvider value={builderContextState}> */}
            <Menu
                active={activeTab}
                setActive={(tabId) => setActiveTab(tabId)}
                tabs={props.tabs}
                config={props.config}
            />
            <Content
                tabs={props.tabs}
                active={activeTab}
                submit={props?.submit}
                config={props.config}
            />
            {/* </BuilderProvider> */}
        </>
    )
}

export default Tab;