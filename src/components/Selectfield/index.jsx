import React from "react";
import { ErrorMessage, Field } from "formik";
import "./style.css";

const SelectField = props => {
    const { label, name, options, placeholder } = props;
    return (
        <div className="mb-3" style={{ padding: '15px 20px' }}>
            {/* label section */}
            <label htmlFor={name} className="text-muted mb-1" style={{ fontSize: "1rem", fontWeight: "500" }}>
                {label}
            </label>

            {/* input section */}
            <Field as="select" name={name} id={name} className="select-field">
                <option value="">{placeholder}</option>
                {options.map(item => (
                    <option value={item.value} key={item.id}>
                        {item.value}
                    </option>
                ))}
            </Field>

            {/* error section */}
            <ErrorMessage component="div" name={name} className="text-danger" style={{ fontSize: "0.875rem" }}></ErrorMessage>
        </div>
    );
};

export default SelectField;
