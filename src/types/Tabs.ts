export interface Field {
    label        ?: string,
    name         ?: string,
    type         ?: string,
    className    ?: string,
    parentIndex  ?: Array<any>,
    [key: string] : any,
}

export type Fields = Array<Field>;

interface Step {
    'rules'    : [],
    'show'    : boolean,
    'buttons'?: { [key: string] : string } | Field,
}

export interface TabConfig extends Field {
    active          : string,
    completionTrack?: boolean,
    sidebar        ?: boolean,
    title          ?: boolean,
    submit         ?: any,
    fields          : Fields,
    step           ?: Step,
}

export interface TabMenuConfig extends TabConfig {
    setActive : (tabId: string) => void,
    context  ?: any,
    clickable?: any,
}

export interface TabContentConfig extends TabConfig {
}

export interface InnerContentConfig {
    fields     : Fields,
    parentIndex: Array<any>,
    context    : any,
}

export interface SteppedButtonConfig {
    active   : string,
    setActive: (tabId?: string) => void,
    fields   : Fields,
    config   : Step,
	ajax? : any
}

// export type TabContentProps = TabConfig &&

export type TabProps = TabMenuConfig & TabContentConfig & JSX.IntrinsicElements['div'];
