/**
 * Component-facing prop types.
 *
 * A field component receives its config props (from the schema) plus the props
 * the builder HOCs (`withProps` / `withLabel`) inject at runtime. Each
 * `XxxProps` below is `XxxFieldConfig & InjectedFieldProps`, exported so authors
 * of custom field components can reuse the exact contract.
 */
import type { FieldBlurHandler, FieldChangeHandler } from './primitives';
import type {
	ActionFieldConfig,
	ButtonFieldConfig,
	CheckboxFieldConfig,
	CheckboxSelectFieldConfig,
	CodeViewerFieldConfig,
	ColorPickerFieldConfig,
	CopyToClipboardFieldConfig,
	DateFieldConfig,
	EditorFieldConfig,
	GroupFieldConfig,
	JsonUploaderFieldConfig,
	MediaFieldConfig,
	MessageFieldConfig,
	ModalFieldConfig,
	RadioCardFieldConfig,
	RadioFieldConfig,
	RepeaterFieldConfig,
	ResponsiveNumberFieldConfig,
	SectionFieldConfig,
	SelectAsyncFieldConfig,
	SelectFieldConfig,
	SliderFieldConfig,
	TabFieldConfig,
	TextareaFieldConfig,
	TextFieldConfig,
	ToggleFieldConfig,
} from './field-config';

/**
 * Props the builder injects into every field via `withProps` / `withLabel`.
 * The index signature keeps the contract open — fields receive additional
 * builder-managed props (validation meta, helpers, …) at runtime; these are
 * typed precisely in Phase 4.
 */
export interface InjectedFieldProps {
	/** Current field value. */
	value?: any;
	/** Synthetic/native change handler. */
	onChange: FieldChangeHandler;
	/** Blur handler. */
	onBlur?: FieldBlurHandler;
	/** Resolved DOM id (defaults to `name`). */
	id?: string;
	/** Whether the field passed its visibility rules. */
	visible?: boolean;
	/** The builder context (typed precisely in Phase 4). */
	context?: any;
	/** Path of this field within nested containers. */
	parentIndex?: Array<string | number>;
	/** Name of the enclosing container field. */
	parent?: string;
	/** Kind of the enclosing container (`group` | `repeater` | …). */
	parenttype?: string;
	/** Index of this field inside a repeater. */
	index?: number;
	[key: string]: any;
}

/** Generic helper: a field config combined with the injected runtime props. */
export type FieldProps<Config> = Config & InjectedFieldProps;

export type InputProps = FieldProps<TextFieldConfig | RadioFieldConfig>;
export type TextareaProps = FieldProps<TextareaFieldConfig>;
export type ResponsiveNumberProps = FieldProps<ResponsiveNumberFieldConfig>;
export type CheckboxProps = FieldProps<CheckboxFieldConfig>;
export type SelectProps = FieldProps<SelectFieldConfig>;
export type CheckboxSelectProps = FieldProps<CheckboxSelectFieldConfig>;
export type SelectAsyncProps = FieldProps<SelectAsyncFieldConfig>;
export type RadioCardProps = FieldProps<RadioCardFieldConfig>;
export type ToggleProps = FieldProps<ToggleFieldConfig>;
export type SliderProps = FieldProps<SliderFieldConfig>;
export type DateProps = FieldProps<DateFieldConfig>;
export type ColorPickerProps = FieldProps<ColorPickerFieldConfig>;
export type EditorProps = FieldProps<EditorFieldConfig>;
export type MediaProps = FieldProps<MediaFieldConfig>;
export type JsonUploaderProps = FieldProps<JsonUploaderFieldConfig>;
export type CodeViewerProps = FieldProps<CodeViewerFieldConfig>;
export type CopyToClipboardProps = FieldProps<CopyToClipboardFieldConfig>;
export type MessageProps = FieldProps<MessageFieldConfig>;
export type ButtonProps = FieldProps<ButtonFieldConfig>;
export type ActionProps = FieldProps<ActionFieldConfig>;
export type ModalProps = FieldProps<ModalFieldConfig>;
export type GroupProps = FieldProps<GroupFieldConfig>;
export type RepeaterProps = FieldProps<RepeaterFieldConfig>;
export type SectionProps = FieldProps<SectionFieldConfig>;
export type TabFieldProps = FieldProps<TabFieldConfig>;
