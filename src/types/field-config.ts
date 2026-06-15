/**
 * Author-facing field-configuration schema.
 *
 * `FieldConfig` is a discriminated union (on `type`) of every built-in field
 * type plus a `CustomFieldConfig` escape hatch for types registered through the
 * `custom_field` filter. The per-type props are derived from real consumer
 * configs (e.g. config/betterdocs.json) and confirmed against component source;
 * `BaseFieldConfig` tolerates extra/legacy props via its index signature.
 *
 * Annotate a config with the specific interface (e.g. `SelectFieldConfig`) for
 * the most precise per-field checks.
 */
import type {
	AjaxConfig,
	Condition,
	FieldOption,
	FieldType,
	ValidationRules,
} from './primitives';

/** Layout / presentation overrides attached to a field config. */
export interface FieldStyle {
	type?: string;
	label?: { position?: 'top' | 'right' | 'bottom' | 'left' };
	column?: number;
	[key: string]: unknown;
}

/** Add-button configuration for repeater fields. */
export interface RepeaterButton {
	label?: string;
	[key: string]: unknown;
}

/**
 * Options accepted by select/radio/checkbox families. Real configs supply either
 * an array of options or an object keyed by index/id, so both forms are allowed.
 */
export type FieldOptions = FieldOption[] | Record<string, FieldOption>;

/**
 * Properties shared by every field configuration. Per-type configs extend this
 * and narrow `type` to a string literal for discriminated-union autocomplete.
 */
export interface BaseFieldConfig {
	/** Field type discriminator (e.g. `"text"`, `"select"`, `"repeater"`). */
	type: FieldType;
	/** Unique field identifier and state key. */
	name?: string;
	/** Human-readable label rendered above/beside the control. */
	label?: string;
	/** Secondary label / subtitle rendered next to the label. */
	label_subtitle?: string;
	/** Default value applied when the field has no saved value. */
	default?: any;
	/** Placeholder text (falls back to `label` when omitted). */
	placeholder?: string;
	/** Helper text rendered under the control. */
	description?: string;
	/** Longer help text (may contain HTML). */
	help?: string;
	/** Extra CSS class(es). */
	className?: string;
	classes?: string;
	/** Sort order within its container (lower renders first). */
	priority?: number;
	/** Conditional visibility rules evaluated against the form values. */
	rules?: Condition;
	/** Validation messages keyed by rule name. */
	validation_rules?: ValidationRules;
	/** Marks the field as pro-only. */
	is_pro?: boolean;
	is_license_active?: boolean;
	/** Dynamic default/value assignment driven by other fields. */
	trigger?: Record<string, unknown>;
	/** Layout / presentation overrides. */
	style?: FieldStyle;
	/**
	 * Tolerated escape hatch for real-world configs. Production configs carry
	 * extra props no component reads (legacy/grid hints, occasional typos); this
	 * keeps them type-checking while the named props above drive autocomplete.
	 * Annotate a single field with its specific `*FieldConfig` for strict checks.
	 */
	[key: string]: any;
}

/* ------------------------------------------------------------------ *
 *  Input / text-like fields
 * ------------------------------------------------------------------ */

/** Single-line inputs rendered by the `Input` component. */
export interface TextFieldConfig extends BaseFieldConfig {
	type: 'text' | 'email' | 'number' | 'range' | 'hidden';
	min?: number;
	max?: number;
	step?: number;
	copyOnClick?: boolean;
}

/** Native radio input(s). */
export interface RadioFieldConfig extends BaseFieldConfig {
	type: 'radio';
	options?: FieldOptions;
}

/** Multi-line text input. */
export interface TextareaFieldConfig extends BaseFieldConfig {
	type: 'textarea';
	rows?: number;
}

/** Responsive (per-device) numeric input. */
export interface ResponsiveNumberFieldConfig extends BaseFieldConfig {
	type: 'responsive-number';
	min?: number;
	max?: number;
	step?: number;
}

/* ------------------------------------------------------------------ *
 *  Choice fields
 * ------------------------------------------------------------------ */

/** Checkbox or checkbox group. */
export interface CheckboxFieldConfig extends BaseFieldConfig {
	type: 'checkbox';
	options?: FieldOptions;
	multiple?: boolean;
}

/** React-select dropdown (single or multi). */
export interface SelectFieldConfig extends BaseFieldConfig {
	type: 'select';
	options?: FieldOptions;
	multiple?: boolean;
	search?: boolean;
	/** Async option loading. */
	ajax?: AjaxConfig;
	/** Prepend an "All" option. */
	include_all_in_options?: boolean;
	/** Render the selected values inline. */
	show_selected_values?: boolean;
	/** Pre-filter options by another field's value. */
	filterValue?: any;
}

/** Filtered checkbox-driven select. */
export interface CheckboxSelectFieldConfig extends BaseFieldConfig {
	type: 'checkbox-select';
	options?: FieldOptions;
	multiple?: boolean;
	search?: boolean;
	ajax?: AjaxConfig;
	filterValue?: any;
}

/** Async-loaded react-select. */
export interface SelectAsyncFieldConfig extends BaseFieldConfig {
	type: 'select-async';
	ajax?: AjaxConfig;
	options?: FieldOptions;
	multiple?: boolean;
}

/** Card-style radio group. */
export interface RadioCardFieldConfig extends BaseFieldConfig {
	type: 'radio-card';
	options?: FieldOptions;
	multiple?: boolean;
	search?: boolean;
	filterValue?: any;
}

/** On/off toggle switch. */
export interface ToggleFieldConfig extends BaseFieldConfig {
	type: 'toggle';
	options?: FieldOptions;
	disabled?: boolean;
	/** Show distinct enabled/disabled text when active. */
	enable_disable_text_active?: any;
}

/* ------------------------------------------------------------------ *
 *  Rich / specialized fields
 * ------------------------------------------------------------------ */

/** Range slider (WordPress RangeControl). */
export interface SliderFieldConfig extends BaseFieldConfig {
	type: 'slider';
	min?: number;
	max?: number;
	step?: number;
}

/** Date / datetime picker. */
export interface DateFieldConfig extends BaseFieldConfig {
	type: 'date';
}

/** Color picker. */
export interface ColorPickerFieldConfig extends BaseFieldConfig {
	type: 'colorpicker';
	reset_text?: string;
}

/** Rich-text (Draft.js) editor. */
export interface EditorFieldConfig extends BaseFieldConfig {
	type: 'editor';
}

/** WordPress media uploader. */
export interface MediaFieldConfig extends BaseFieldConfig {
	type: 'media';
	multiple?: boolean;
	value?: any;
}

/** JSON file uploader. */
export interface JsonUploaderFieldConfig extends BaseFieldConfig {
	type: 'jsonuploader';
}

/** Read-only code display with copy support. */
export interface CodeViewerFieldConfig extends BaseFieldConfig {
	type: 'codeviewer';
	code?: string;
	copyOnClick?: boolean;
	readOnly?: boolean;
}

/** Copy-to-clipboard utility field. */
export interface CopyToClipboardFieldConfig extends BaseFieldConfig {
	type: 'copy-to-clipboard';
	readOnly?: boolean;
	descriptionLabel?: string;
	descriptionCopyable?: any;
}

/** Static informational message. */
export interface MessageFieldConfig extends BaseFieldConfig {
	type: 'message';
}

/* ------------------------------------------------------------------ *
 *  Action / overlay fields
 * ------------------------------------------------------------------ */

/** Action button (optionally AJAX-backed). */
export interface ButtonFieldConfig extends BaseFieldConfig {
	type: 'button';
	text?: string | { normal?: string; saved?: string; [key: string]: unknown };
	ajax?: AjaxConfig;
	href?: string | number;
	target?: string;
	fields?: AnyFieldConfig[];
}

/** Wrapper that defers to a WordPress filter. */
export interface ActionFieldConfig extends BaseFieldConfig {
	type: 'action';
	action?: string;
	url?: string;
	button?: any;
}

/** Modal dialog. */
export interface ModalFieldConfig extends BaseFieldConfig {
	type: 'modal';
	fields?: AnyFieldConfig[];
}

/* ------------------------------------------------------------------ *
 *  Container fields (nest other fields)
 * ------------------------------------------------------------------ */

/** Inline/grouped set of fields stored as a flat object. */
export interface GroupFieldConfig extends BaseFieldConfig {
	type: 'group';
	fields: AnyFieldConfig[];
	display?: 'inline' | 'block';
}

/** Repeatable set of fields stored as an array of objects. */
export interface RepeaterFieldConfig extends BaseFieldConfig {
	type: 'repeater';
	fields: AnyFieldConfig[];
	button?: RepeaterButton;
}

/** Collapsible section of fields. */
export interface SectionFieldConfig extends BaseFieldConfig {
	type: 'section';
	fields: AnyFieldConfig[];
	id?: string;
	collapsed?: boolean;
	searchable?: boolean;
	searchPlaceholder?: string;
	searchNotFoundMessage?: string;
	showSubmit?: boolean;
	submit?: any;
	save?: any;
}

/** A single tab in a tabbed builder. */
export interface TabFieldConfig extends BaseFieldConfig {
	type: 'tab';
	fields: AnyFieldConfig[];
	id?: string;
	icon?: string;
	title?: boolean | string;
	active?: string;
	config?: any;
	step?: any;
	submit?: any;
	sidebar?: boolean;
	completionTrack?: boolean;
	save?: any;
}

/* ------------------------------------------------------------------ *
 *  Custom fields + the unified union
 * ------------------------------------------------------------------ */

/**
 * Escape hatch for field types registered via the `custom_field` filter.
 * Accepts an arbitrary `type` and arbitrary extra props.
 */
export interface CustomFieldConfig extends BaseFieldConfig {
	type: FieldType;
	fields?: AnyFieldConfig[];
	options?: FieldOptions;
	[key: string]: any;
}

/**
 * Every built-in field configuration, as a discriminated union on `type`. A
 * `switch` (or the editor) narrows cleanly to the matching interface and
 * autocomplete is per-type. For configs that include custom field types, use
 * {@link AnyFieldConfig}.
 */
export type FieldConfig =
	| TextFieldConfig
	| RadioFieldConfig
	| TextareaFieldConfig
	| ResponsiveNumberFieldConfig
	| CheckboxFieldConfig
	| SelectFieldConfig
	| CheckboxSelectFieldConfig
	| SelectAsyncFieldConfig
	| RadioCardFieldConfig
	| ToggleFieldConfig
	| SliderFieldConfig
	| DateFieldConfig
	| ColorPickerFieldConfig
	| EditorFieldConfig
	| MediaFieldConfig
	| JsonUploaderFieldConfig
	| CodeViewerFieldConfig
	| CopyToClipboardFieldConfig
	| MessageFieldConfig
	| ButtonFieldConfig
	| ActionFieldConfig
	| ModalFieldConfig
	| GroupFieldConfig
	| RepeaterFieldConfig
	| SectionFieldConfig
	| TabFieldConfig;

/**
 * `FieldConfig` plus the {@link CustomFieldConfig} escape hatch — use this for
 * config trees that include field types registered via the `custom_field`
 * filter.
 */
export type AnyFieldConfig = FieldConfig | CustomFieldConfig;

/** A list of field configurations (a container's `fields`, a tab's body, …). */
export type FieldConfigList = FieldConfig[];
