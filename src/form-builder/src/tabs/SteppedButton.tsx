import React, { useEffect, useState } from 'react'
import { Button } from '@wordpress/components'
import { useBuilderContext } from '../core/hooks';

const SteppedButton = (props) => {
    const [nextTab, setNextTab] = useState(undefined);
    const [prevTab, setPrevTab] = useState(undefined)
    const builderContext = useBuilderContext();

    useEffect(() => {
        const tabIds = props.tabs.map(tab => tab.id);
        const currentTabIndex = tabIds.findIndex(tab => tab === builderContext.config.active);
        if (currentTabIndex != -1) {
            setPrevTab(tabIds[currentTabIndex - 1])
        }
        if (currentTabIndex <= tabIds.length) {
            setNextTab(tabIds[currentTabIndex + 1])
        }
    }, [builderContext.config.active, props.tabs])

    return (
        <div className="wprf-stepped-button">
            {
                Object.keys(props.config.buttons).map((button, index) => {
                    return <React.Fragment key={`button_${button}_${index}`}>
                        {
                            ((button === 'next' && nextTab !== undefined) || (button === 'prev' && prevTab !== undefined)) &&
                            <Button
                                className={`wprf-btn wprf-step-btn-${button}`}
                                onClick={() => builderContext.setActiveTab(button === 'next' ? nextTab : prevTab)}
                            >
                                {props.config.buttons[button]}
                            </Button>
                        }
                    </React.Fragment>;
                })
            }
        </div>
    )
}


export default React.memo(SteppedButton);