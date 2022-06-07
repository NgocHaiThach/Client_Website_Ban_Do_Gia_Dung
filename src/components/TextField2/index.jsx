import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField2 = ({ label, nameInput, labelName, classNameDiv, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className={`mb-2 ${classNameDiv}`}>
                <label className={`${labelName}`} htmlFor={field.name}>{label}</label>
                <input
                    className={`${nameInput} ${meta.touched && meta.error && "is-invalid"
                        }`}
                    {...field}
                    {...props}
                    autoComplete="off"
                />
                {/* <ErrorMessage component="div" name={field.name} className="error" style={{ color: 'red' }} /> */}
            </div>
        </>
    );
};
export default TextField2;