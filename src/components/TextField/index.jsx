import { ErrorMessage, Field } from "formik";
import React from "react";
import "./style.css";

const TextField = (props) => {
    const { as, type, label, name, rows, placeholder, note, required, classNameLabel, classNameInput, classNameDiv } = props;
    return (
        <div className={`mb-3 ${classNameDiv}`}>
            {/* label section */}
            <label
                htmlFor={name}
                className={`text-muted mb-1 ${classNameLabel}`}
                style={{ fontSize: "1rem", fontWeight: "500" }}
            >
                <span>{label}</span>
                <span className="text-danger">{required ? "*" : ""}</span>
            </label>

            {/* input section */}
            <Field
                as={as} // as for textarea type
                rows={rows} // rows for textarea type
                type={type} // type for text, email, password,...
                name={name}
                placeholder={placeholder}
                className={`text-field ${classNameInput}`}
            />

            {/* note */}
            <p
                className="text-muted"
                style={{
                    fontSize: "0.75rem",
                }}
            >
                {note}
            </p>

            {/* error section */}
            <ErrorMessage
                component="div"
                name={name}
                className="text-danger"
                style={{ fontSize: "0.875rem" }}
            ></ErrorMessage>
        </div>
    );
};

export default TextField;
