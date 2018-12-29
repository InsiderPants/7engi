import React from 'react';

const FormFields = (props) => {
    
    const renderFields = () => { //call from return statement
        const formArray = []; //sample array which contain id and all other props as setting
        for(let key in props.formData) { //looping in props
            formArray.push({ //inserting formfields in formArray
                id: key,
                setting: props.formData[key]
            });
        }
        return formArray.map((item,i) => { //returning JSX for each prop
            return (
                <div key={i}>
                    {renderTemplates(item) /*function to render single form field (called for every iteration)*/}
                </div>
            );
        });
    }

    const renderTemplates = (data) => { // called from renderfields
        let formTemplate = ''; //variable for storing JSX
        switch (data.setting.element) { //switching on props to render correct input according to the given props
            case 'input': //for plain text
                formTemplate = (
                    <div>
                        {showLabel(data.setting.label,data.setting.labelText) /* for showing label (also checks whether label is required or not)*/}
                        <input 
                            {...data.setting.config /* properties for HTML attributes*/} 
                            value = {data.setting.value}
                            onChange = {event => handleChangeEvent(event,data.id)} //handling state change
                        />
                    </div>
                )
                break;
            case 'select':
                formTemplate = (
                    <div>
                        {showLabel(data.setting.label,data.setting.labelText)}
                        <select
                            value = {data.setting.value}
                            name = {data.setting.config.name}
                            onChange = {event => handleChangeEvent(event,data.id)}
                        >
                            {data.setting.config.options.map((item,i) => {
                                return (
                                    <option key = {i} value = {item.val}>
                                        {item.text}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )    
                break;
        
            default:
                formTemplate = null; // if none of the case matched
                break;
        }
        return formTemplate; //returned the JSX
    }

    const showLabel = (a,b) => { //function for showing label
        return a?
            <label>{b}</label>
            :null; 
    }

    const handleChangeEvent = (e,id) => { //for updateing state
        const newState = props.formData; //creating new state
        newState[id].value = e.target.value; //sending back to parent component via props
        props.updateState(newState); //caling prop function
    }

    return (
        <div>
            {renderFields()/* to render fields*/ }
        </div>
    );
}

export default FormFields;