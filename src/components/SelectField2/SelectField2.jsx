import React from "react";
import { ErrorMessage, useField } from "formik";
import { Form } from "react-bootstrap";
import Select from 'react-select';
const SelectField2 = ({ label, dtf, valuField, options, ...props }) => {
    const [field, meta] = useField(props);

    const { name, value } = field;
    const selectedOption = options?.find(option => option.value === +value);

    const handleSelectedOptionChange = (selectedOption) => {
        if (name === 'province') {
            localStorage.setItem('province', JSON.stringify(selectedOption));
            props.setReRender(props.getLocalStorage())
        }
        if (name === 'district') {
            localStorage.setItem('district', JSON.stringify(selectedOption));
            props.setReRender(props.getDistrictLocalStorage())
        }
        if (name === 'ward') {
            localStorage.setItem('ward', JSON.stringify(selectedOption));
            props.setReRender(props.getWardLocalStorage())
        }

        const selectedValue = selectedOption ? selectedOption.label : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);

    }
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                defaultValue={{ label: dtf === undefined ? 'Chọn....' : `${dtf}`, value: valuField === undefined ? null : valuField }}
                options={options}
                isSearchable={true}
            />
            <ErrorMessage component="div" name={field.name} className="error" style={{ color: 'red' }} />
        </div>
    );
};

export default SelectField2;
