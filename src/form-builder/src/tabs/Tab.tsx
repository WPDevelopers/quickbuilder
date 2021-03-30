import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Content from './Content'
import { TabConfig } from './types';
import { BuilderProvider } from '../core/hooks/useBuilderContext';
import useBuilder from '../core/hooks/useBuilder';

import '../scss/index.scss';


const Tab: React.FC<TabConfig> = (props) => {
    const builderContextState = useBuilder(props);
    const [activeTab, setActiveTab] = useState(props.config.active);

    return (
        <div>
            <BuilderProvider value={builderContextState}>
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
                />
            </BuilderProvider>
        </div>
    )
}

export default Tab;