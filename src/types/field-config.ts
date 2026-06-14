/**
 * Author-facing field-configuration schema.
 *
 * Phase 1 establishes the shared {@link BaseFieldConfig}. The per-field-type
 * interfaces and the `FieldConfig` discriminated union are added in Phase 2.
 */
import type { Condition, FieldType, ValidationRules } from './primitives';

/** Layout / presentation overrides attached to a field config. */
export interface FieldStyle {
	type?: string;
	label?: { position?: 'top' | 'right' | 'bottom' | 'left' };
	column?: number;
	[key: string]: unknown;
}

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
}
