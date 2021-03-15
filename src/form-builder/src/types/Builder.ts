interface BuilderConfig {
    sidebar?: boolean
}
export interface Builder  {
    config: BuilderConfig,
    tabs: any,
}

export type BuilderProps = Builder & JSX.IntrinsicElements['div'];