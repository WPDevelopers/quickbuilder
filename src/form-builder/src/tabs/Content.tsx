import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TabProps } from "./types";
import { sortingFields, isArray } from "../core/utils";
import InnerContent from "./InnerContent";
import Submit from "./Submit";
import SteppedButton from "./SteppedButton";
import { useBuilderContext } from "../core/hooks";


const Content: React.FC<TabProps> = ({ tabs, active, submit, config }) => {
    if (tabs === undefined) {
        throw new Error("There are no #tabs args defined in props.");
    }

    const [fields, setFields] = useState([]);
    const builderContext = useBuilderContext();

    useEffect(() => {
        const newFields = sortingFields(tabs);
        builderContext.setFormField(['tabs'], newFields);
        setFields(newFields);
    }, [])

    if (!isArray(fields)) {
        throw new Error('Not an array.')
    }

    return (
        <div className="wprf-tab-content-wrapper">
            {fields.map((tab, index) => {
                const componentClasses = classNames(
                    "wprf-tab-content",
                    `wprf-tab-${tab?.id}`,
                    {
                        "wprf-active": active === tab.id,
                    }
                );

                return (
                    <div id={tab?.id} className={componentClasses} key={tab?.id} >
                        <InnerContent fields={tab?.fields} parentIndex={index} />
                    </div>
                );
            })}
            {
                config?.step?.show &&
                <SteppedButton tabs={fields} config={config.step ?? {}} />
            }
            {(submit?.show ?? true) && <Submit {...submit} />}
        </div>
    );
};

export default Content;