export interface TabConfig {
    tabs: any,
    config?: { [key: string] : any },
    submit?: any
}

interface TabMenuConfig extends TabConfig {
    active: string,
    setActive?: (tabId: string) => void,
    config?: TabConfig['config'],
    context?: any
}

// export type TabContentProps = TabConfig &&

export type TabProps = TabMenuConfig & JSX.IntrinsicElements['div'];