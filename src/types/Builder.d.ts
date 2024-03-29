interface BuilderConfig {
    sidebar?: boolean
}
export interface Builder  {
    config: BuilderConfig,
    tabs: any,
    submit: any,
}

export type BuilderProps = Builder & JSX.IntrinsicElements['div'];