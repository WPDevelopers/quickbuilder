import { Button } from "@wordpress/components";
import React, { useEffect, useState, useCallback } from "react";
import { useBuilderContext } from "../../core/hooks";
import { Field } from "../../fields";
import { SteppedButtonConfig } from "../../types/Tabs";

const SteppedButton: React.FC<SteppedButtonConfig> = (props) => {
    const builderContext = useBuilderContext(); // Access builder context
    const [nextTab, setNextTab] = useState<string | undefined>(undefined);
    const [prevTab, setPrevTab] = useState<string | undefined>(undefined);
    const [disablePrev, setDisablePrev] = useState(false);

    // Retrieve `isStartClicked` from the context
    const isStartClicked = builderContext.getFieldValue("isStartClicked") ?? false;

    const getCookie = (cookieName: string): string | null => {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            if (name === cookieName) {
                return decodeURIComponent(value);
            }
        }
        return null;
    };

    useEffect(() => {
        const tabIds = props.fields.map((tab) => tab.id);
        const currentTabIndex = tabIds.findIndex((tab) => tab === props.active);

        // Set previous and next tabs
        if (currentTabIndex !== -1) {
			setPrevTab(tabIds[currentTabIndex - 1]);
		}
		if (currentTabIndex <= tabIds.length) {
			setNextTab(tabIds[currentTabIndex + 1]);
		}

        // Check if `prev` button should be disabled
        const isSetupPage = tabIds[currentTabIndex] === "setup-page";
        const betterdocsInsightsAllowed = getCookie("betterdocs_insights_allowed") == "1";

        setDisablePrev(isSetupPage && (isStartClicked || betterdocsInsightsAllowed));
    }, [props.active, props.fields, isStartClicked]);

    useEffect(() => {
        builderContext.setFieldValue(
            "active_tab",
            builderContext?.config?.active
        );
    }, [props.active]);

    const handleButtonClick = (button: string) => {
        const tabIds = props.fields.map((tab) => tab.id);
        const currentTabIndex = tabIds.findIndex((tab) => tab === props.active);

        let targetTab;

        if (button === "start") {
            builderContext.setFieldValue("isStartClicked", true); // Update context
            targetTab = tabIds[currentTabIndex + 1];
        } else if (button === "next" || button === "skip") {
            targetTab = tabIds[currentTabIndex + 1];
        } else if (button === "prev" && !disablePrev) {
            targetTab = tabIds[currentTabIndex - 1];
        }

        // Navigate to the target tab if it exists
        if (targetTab) {
            props.setActive(targetTab);
        }
    };

    return (
        <div className="wprf-stepped-button">
            {props.config.buttons &&
                Object.keys(props.config.buttons).map((button, index) => {
                    return (
                        <React.Fragment key={`button_${button}_${index}`}>
                            {button === "skip" && nextTab !== undefined && (
                                <Button
                                    className={`wprf-btn wprf-step-btn-${button}`}
                                    onClick={() => handleButtonClick(button)}
                                >
                                    {props.config.buttons?.[button]}
                                </Button>
                            )}
                            {button === "start" && prevTab === undefined && (
                                <div className={`wprf-btn wprf-step-btn-next`}>
                                    <Field
                                        type="button"
                                        ajax={
                                            props.config.buttons?.[button]?.ajax
                                        }
                                        name="step-button"
                                        onClick={() => handleButtonClick(button)}
                                        text={
                                            typeof props.config.buttons?.[button] ===
                                            "object"
                                                ? props?.active ===
                                                  props.config.buttons?.[button]?.condition
                                                    ? props.config.buttons?.[button]
                                                          ?.customName
                                                    : props.config.buttons?.[button]
                                                          ?.name
                                                : props.config.buttons?.[button]
                                        }
                                    />
                                </div>
                            )}
                            {((button === "next" &&
                                nextTab !== undefined &&
                                prevTab !== undefined) ||
                                (button === "prev" && prevTab !== undefined)) && (
                                <div
                                    className={`wprf-btn wprf-step-btn-${button} ${
                                        button === "prev" && disablePrev
                                            ? "disabled"
                                            : ""
                                    }`}
                                >
                                    <Field
                                        type="button"
                                        ajax={
                                            props.config.buttons?.[button]?.ajax
                                        }
                                        name="step-button"
                                        disabled={button === "prev" && disablePrev}
                                        onClick={() => handleButtonClick(button)}
                                        text={
                                            typeof props.config.buttons?.[button] ===
                                            "object"
                                                ? props?.active ===
                                                  props.config.buttons?.[button]?.condition
                                                    ? props.config.buttons?.[button]
                                                          ?.customName
                                                    : props.config.buttons?.[button]
                                                          ?.name
                                                : props.config.buttons?.[button]
                                        }
                                    />
                                </div>
                            )}
                            {nextTab === undefined &&
                                props.config.buttons?.[button]?.type && (
                                    <Field {...props.config.buttons?.[button]} />
                                )}
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default React.memo(SteppedButton);
