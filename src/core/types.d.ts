export interface FormBuilderValues {
    [field: string]: any
}

export type FormBuilderErrors<Values> = {
    [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
    ? FormBuilderErrors<Values[K][number]>[] | string | string[]
    : string | string[]
    : Values[K] extends object
    ? FormBuilderErrors<Values[K]>
    : string;
};

export type FormBuilderTouched<Values> = {
    [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
    ? FormBuilderTouched<Values[K][number]>[]
    : boolean
    : Values[K] extends object
    ? FormBuilderTouched<Values[K]>
    : boolean;
};

export interface FormBuilderState<Values> {
    /** Form values */
    values: Values;
    /** map of field names to specific error for that field */
    errors: FormBuilderErrors<Values>;
    /** map of field names to whether the field has been touched */
    touched: FormBuilderTouched<Values>;
    /** whether the form is currently submitting */
    isSubmitting: boolean;
    /** whether the form is currently validating (prior to submission) */
    // isValidating: boolean;
    /** Top level status state, in case you need it */
    // status?: any;
    /** Number of times user tried to submit the form */
    // submitCount: number;
}

/** Field metadata */
export interface FieldMetaProps<Value> {
    visible?: boolean,
    /** Value of the field */
    value: Value;
    default?: Value;
    /** Error message of the field */
    error?: string;
    /** Has the field been visited? */
    touched: boolean;
    /** Initial value of the field */
    initialValue?: Value;
    /** Initial touched state of the field */
    // initialTouched: boolean;
    /** Initial error message of the field */
    initialError?: string;
}

export interface FieldHelperProps<Value> {
    /** Set the field's value */
    setValue: (value: Value, shouldValidate?: boolean) => void;
    /** Set the field's touched value */
    setTouched: (value: boolean, shouldValidate?: boolean) => void;
    /** Set the field's error value */
    setError: (value: Value) => void;
}

export interface BuilderHandlers {
    /** Form submit handler */
    // handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
    /** Reset form event handler  */
    // handleReset: (e?: React.SyntheticEvent<any>) => void;
    handleBlur: {
        /** Classic React blur handler, keyed by input name */
        (e: React.FocusEvent<any>): void;
        /** Preact-like linkState. Will return a handleBlur function. */
        <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
        /** Classic React change handler, keyed by input name */
        (e: React.ChangeEvent<any>): void;
        /** Preact-like linkState. Will return a handleChange function.  */
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    getFieldProps: <Value = any>(props: any) => FieldInputProps<Value>;
    getFieldMeta: <Value>(name: string, props: any) => FieldMetaProps<Value>;
    // getFieldHelpers: <Value = any>(name: string) => FieldHelperProps<Value>;
    eligibleOptions: ( options: [] ) => Array<any>;
    eligibleOption: ( options: Array<any>, value: any, multiple?: boolean ) => any;
}

/**
 * Formik state helpers
 */
export interface BuilderHelper<Values> {
    /** Manually set top level status. */
    setStatus: (status?: any) => void;
    /** Manually set errors object */
    setErrors: (errors: FormBuilderErrors<Values>) => void;
    /** Manually set isSubmitting */
    setSubmitting: (isSubmitting: boolean) => void;
    /** Manually set touched object */
    setTouched: (touched: FormBuilderTouched<Values>, shouldValidate?: boolean) => void;
    /** Manually set values object  */
    setValues: (values: React.SetStateAction<Values>, shouldValidate?: boolean) => void;
    /** Set value of form field directly */
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    /** Set error message of a form field directly */
    setFieldError: (field: string, message: string | undefined) => void;
    /** Set whether field has been touched directly */
    setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    /** Validate form values */
    validateForm: (values?: any) => Promise<FormBuilderErrors<Values>>;
    /** Validate field value */
    validateField: (field: string) => void;
    /** Reset form */
    resetForm: (nextState?: Partial<FormBuilderState<Values>>) => void;
    /** Submit the form imperatively */
    submitForm: () => Promise<void>;
    /** Set Formik state, careful! */
    setFormikState: (f: FormBuilderState<Values> | ((prevState: FormBuilderState<Values>) => FormBuilderState<Values>), cb?: () => void) => void;
}

export interface FieldInputProps<Value> {
    /** Value of the field */
    value: Value;
    /** Name of the field */
    name: string;
    /** Multiple select? */
    multiple?: boolean;
    /** Is the field checked? */
    checked?: boolean;
    /** Change event handler */
    onChange: BuilderHandlers['handleChange'];
    /** Blur event handler */
    onBlur: BuilderHandlers['handleBlur'];
}

// export type FormBuilderContextType<Values> = FormBuilderState<Values> & BuilderHandlers & BuilderHelper<Values>;
export type FormBuilderContextType<Values> = any;

