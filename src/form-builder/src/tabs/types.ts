export interface TabConfig {
    tabs: any,
    config?: { [key: string] : any }
}

interface TabMenuConfig extends TabConfig {
    active: string,
    setActive?: (tabId: string) => void,
    config?: TabConfig['config']
}

// export type TabContentProps = TabConfig &&

export type TabProps = TabMenuConfig & JSX.IntrinsicElements['div'];