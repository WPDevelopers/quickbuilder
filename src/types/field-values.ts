/**
 * Field **value** types — the shapes fields store in the form `values` map.
 *
 * Derived from real saved data (config/betterdocs.json `.values`: booleans,
 * strings, numbers, and option arrays like `["1","2"]`). Use these to type the
 * form state precisely instead of `any`, e.g.:
 *
 * ```ts
 * interface MyValues { title: string; enabled: boolean; sources: string[]; }
 * const ctx = useBuilderContext<MyValues>();
 * ctx.values.title; // string
 * ```
 */

/** Scalar text-like value (text, textarea, editor, colorpicker, date, …). */
export type TextValue = string;

/** Numeric value. Real configs occasionally persist it as a string. */
export type NumberValue = number | string;

/** Boolean toggle / single checkbox value. */
export type BooleanValue = boolean;

/** A single selected option value. */
export type OptionValue = string | number;

/** Multiple selected option values (multi-select, checkbox-select). */
export type MultiOptionValue = Array<string | number>;

/** Media value — an attachment id/url, or an attachment object. */
export type MediaValue =
	| string
	| number
	| { id?: number; url?: string;[key: string]: any };

/** A repeater stores an array of row objects. */
export type RepeaterValue = Array<Record<string, any>>;

/** A group stores a flat object of its child field values. */
export type GroupValue = Record<string, any>;

/** Any value a field may store in form state. */
export type FieldValue =
	| TextValue
	| NumberValue
	| BooleanValue
	| OptionValue
	| MultiOptionValue
	| MediaValue
	| RepeaterValue
	| GroupValue
	| null
	| undefined;

/**
 * Maps each value-bearing built-in field `type` to the value it stores. Types
 * with no own value (section, tab, modal, action, message) are intentionally
 * omitted — they don't write to `values`.
 */
export interface FieldValueByType {
	text: TextValue;
	email: TextValue;
	hidden: TextValue;
	textarea: TextValue;
	editor: TextValue;
	colorpicker: TextValue;
	date: TextValue;
	codeviewer: TextValue;
	'copy-to-clipboard': TextValue;
	number: NumberValue;
	range: NumberValue;
	slider: NumberValue;
	'responsive-number': NumberValue | Record<string, NumberValue>;
	toggle: BooleanValue;
	checkbox: BooleanValue | MultiOptionValue;
	radio: OptionValue;
	'radio-card': OptionValue;
	select: OptionValue | MultiOptionValue;
	'select-async': OptionValue | MultiOptionValue;
	'checkbox-select': MultiOptionValue;
	media: MediaValue;
	jsonuploader: TextValue | Record<string, any>;
	repeater: RepeaterValue;
	group: GroupValue;
	button: BooleanValue;
}

/** The value type stored for a given field `type` (falls back to `FieldValue`). */
export type FieldValueOf<T extends string> = T extends keyof FieldValueByType
	? FieldValueByType[T]
	: FieldValue;

/** The value type for a given field config, keyed off its `type`. */
export type ConfigValue<C extends { type: string }> = FieldValueOf<C['type']>;

/**
 * A typed-but-tolerant form-values map (field `name` → value). Stricter than
 * `FormBuilderValues` (`any`); author a dedicated interface for full precision
 * and pass it to `useBuilder<Values>()` / `useBuilderContext<Values>()`.
 */
export interface FormValues {
	[field: string]: FieldValue;
}
