import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    menu: {
        width: 200,
    }
});

const FormFields = (props) => {
    
    const { classes } = props;

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
                    <TextField
                        id = "standard-helperText"
                        label = {data.setting.labelText}
                        className = {classes.textField}
                        helperText = {data.setting.helperdata}
                        placeholder = {data.setting.config.placeholder}
                        margin = "normal"
                        onChange = {event => handleChangeEvent(event,data.id)}
                    />
                )
                break;
            case 'select':
                formTemplate = (
                    <TextField
                        id = "standard-select"
                        select
                        name = {data.setting.config.name}
                        label = {data.setting.labelText}
                        className = {classNames(classes.textField, classes.menu)}
                        value = {data.setting.value}
                        onChange = {event => handleChangeEvent(event,data.id)}
                        SelectProps = {{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText = "Please select your grade"
                        margin = "normal"
                    >
                        {data.setting.config.options.map((item,i) => (
                            <MenuItem key={i} value={item.val}>
                                {item.text}
                            </MenuItem>
                        ))}
                        </TextField>
                )    
                break;
        
            default:
                formTemplate = null; // if none of the case matched
                break;
        }
        return formTemplate; //returned the JSX
    }

    const handleChangeEvent = (e,id) => { //for updateing state
        const newState = props.formData; //creating new state
        newState[id].value = e.target.value; //sending back to parent component via props
        props.updateState(newState); //caling prop function
    }

    return (
        <div className={classes.container}>
            {renderFields()/* to render fields*/ }
        </div>
    );
}

export default withStyles(styles)(FormFields);