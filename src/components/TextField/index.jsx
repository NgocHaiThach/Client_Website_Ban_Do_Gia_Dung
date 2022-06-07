import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField = ({ label, className, classNameDiv, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`mb-2 ${classNameDiv}`}>
            <label htmlFor={field.name} style={{ marginTop: '8px' }}>{label}</label>
            <input
                className={`form-control shadow-none  ${className} ${meta.touched && meta.error && "is-invalid"
                    }`}
                {...field}
                {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" style={{ color: 'red' }} />
        </div>
    );
};
export default TextField;