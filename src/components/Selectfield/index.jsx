import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import "./style.css";
import Select from 'react-select';


const SelectField = props => {
    const { label, options, placeholder, dft } = props;
    const [field, meta] = useField(props);

    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value)

    const handleSelectOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption

        const changEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        }

        field.onChange(changEvent)
    }
    return (
        <>
            <div style={{ padding: '15px 20px' }}>
                {/* label section */}
                <label htmlFor={name} style={{ fontSize: "1rem", fontWeight: "500" }}>
                    {label}
                </label>

                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectOptionChange}
                    defaultValue={{ label: placeholder === undefined ? 'Chọn....' : `${placeholder}`, value: dft === undefined ? null : dft }}
                    options={options}
                    isSearchable={true}
                />

                {/* error section */}
                <ErrorMessage component="div" name={field.name} className="error" style={{ color: 'red' }} />

            </div>
        </>
    );
};

export default SelectField;
