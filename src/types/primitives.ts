/**
 * Shared primitive types reused across the field-config schema and the field
 * component props. These are the building blocks for the typed builder API.
 */
import type { ChangeEvent, FocusEvent } from 'react';

/**
 * The built-in field `type` discriminators. The trailing `(string & {})`
 * preserves editor autocomplete for the known types while still allowing
 * custom field types registered via the `custom_field` filter.
 */
export type BuiltinFieldType =
	| 'text'
	| 'email'
	| 'number'
	| 'range'
	| 'hidden'
	| 'radio'
	| 'textarea'
	| 'checkbox'
	| 'checkbox-select'
	| 'select'
	| 'select-async'
	| 'radio-card'
	| 'toggle'
	| 'slider'
	| 'date'
	| 'colorpicker'
	| 'editor'
	| 'media'
	| 'jsonuploader'
	| 'codeviewer'
	| 'copy-to-clipboard'
	| 'responsive-number'
	| 'message'
	| 'button'
	| 'action'
	| 'modal'
	| 'group'
	| 'repeater'
	| 'section'
	| 'tab';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FieldType = BuiltinFieldType | (string & {});

/** A single selectable option for select / radio / checkbox-style fields. */
export interface FieldOption {
	label: string;
	value: string | number | boolean;
	/** Conditional visibility for this individual option. */
	rules?: Condition;
	is_pro?: boolean;
	column?: number;
	icon?: string;
	tooltip?: string;
	/** Options frequently carry extra per-field metadata. */
	[key: string]: unknown;
}

/** Async/AJAX option-loading configuration for select-style fields. */
export interface AjaxConfig {
	/** REST endpoint to request. */
	api: string;
	method?: 'GET' | 'POST';
	/** Payload sent with the request. `@fieldName` values reference other fields. */
	data?: Record<string, unknown>;
	/** Only fetch when this condition passes. */
	rules?: Condition;
	/** Maps the API response shape onto `{ label, value }`. */
	response_mapper?: { label: string; value: string; [key: string]: string };
	/** Field to populate with the result. */
	target?: string;
	/** When to trigger the request. */
	on?: 'click' | 'change' | 'load';
	include_all_in_options?: boolean;
	[key: string]: unknown;
}

/** Comparison operators for the conditional-rule DSL (see `when.ts`). */
export type ComparisonOperator =
	| 'is'
	| '!is'
	| 'includes'
	| '!includes'
	| 'isOfType'
	| '!isOfType'
	| 'allOf'
	| 'anyOf'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte';

/** Logical operators that combine nested conditions. */
export type LogicalOperator = 'and' | 'or' | 'not';

/** A leaf comparison, e.g. `['is', 'source', 'woocommerce']`. */
export type ComparisonRule = [operator: ComparisonOperator, key: string, value: unknown];

/** A logical combination, e.g. `['and', ['is', 'a', 1], ['includes', 'b', ['x']]]`. */
export type LogicalRule = [operator: LogicalOperator, ...rules: Condition[]];

/** A predicate evaluated against the current form values. */
export type ConditionFn = (values: Record<string, any>) => boolean;

/** Any conditional expression accepted by the rules engine. */
export type Condition = ComparisonRule | LogicalRule | ConditionFn;

/** Validation messages keyed by rule name (e.g. `required`, `min:20`). */
export interface ValidationRules {
	required?: string;
	[rule: string]: string | undefined;
}

/** The synthetic event target that fields emit through `onChange`. */
export interface FieldChangeTarget {
	type: string;
	name: string;
	value: any;
	checked?: boolean;
	multiple?: boolean;
	options?: FieldOption[];
}

/** The synthetic change event most fields dispatch. */
export interface FieldChangeEvent {
	target: FieldChangeTarget;
	persist?: () => void;
}

/**
 * Field change handler. Fields emit either the synthetic {@link FieldChangeEvent}
 * or a native React change event (both are understood by `executeChange`).
 */
export type FieldChangeHandler = (
	event: FieldChangeEvent | ChangeEvent<any>,
	extra?: any
) => void;

/** Field blur handler. */
export type FieldBlurHandler = (event: FocusEvent<any> | FieldChangeEvent) => void;
