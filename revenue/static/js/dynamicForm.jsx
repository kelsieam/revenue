import React, { useState } from 'react';

const DynamicForm = () => {
    const [numForms, setNumForms] = useState(1);
    const [formValues, setFormValues] = useState({});
    
    const handleNumFormsChange = (evt) => {
        const num = parseInt(evt.target.value, 10);
        setNumForms(isNaN(num) ? 1 : num);
    };

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formValues);
    };

    const generateFormFields = () => {
        const formFields = [];
        for (let i = 0; i < numForms; i++) {
            formFields.push(
                <div key={i}>
                    <h4>Form { i + 1 }</h4>
                    <input
                        type="number"
                        id={`sub-cost-${i}`}
                        name={`sub-cost-${i}`}
                        placeholder="$$$$"
                        onChange={handleInputChange}
                    />
                </div>
            );
        }
        return formFields;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="num-forms">number of forms?</label>
                <input
                    type="number"
                    id="num-forms"
                    name="num-forms"
                    value={numForms}
                    onChange={handleNumFormsChange}
                />
            </div>
            {generateFormFields()}
            <div>
                <input type="submit" className="btn btn-secondary" value="Submit" />
            </div>
        </form>
    );
};

export default DynamicForm;