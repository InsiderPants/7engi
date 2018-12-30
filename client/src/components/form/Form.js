import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import FormFields from '../../templates/FormFields';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        marginTop: '2%',
    },
});

class Form extends React.Component {
    state = {
        formData: {
            name: {
                element: 'input',//type of input
                value: '', //value
                label: true, //boolean just for checking if label is required or not
                labelText: 'Name', // label txt
                config: {
                    name: 'name_input', //for our convenience
                    type: 'text', //to be inserted in html
                    placeholder: 'Enter your name'
                }
            },
            batchYear: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Batch Year',
                config: {
                    name: 'rollno_batchyear_input',
                    type: 'text',
                    placeholder: '2017'
                }
            },
            batchName: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Batch Name',
                config: {
                    name: 'rollno_batchname_input',
                    type: 'text',
                    placeholder: 'A4'
                }
            },
            rollno: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Roll No.',
                config: {
                    name: 'rollno_input',
                    type: 'text',
                    placeholder: '058'
                }
            },
            ma102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'MA102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            },
            ap102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'AP102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            },
            ee102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'EE102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            },
            co102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'CO102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            },
            me102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'ME102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            },
            en102: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'EN102',
                config: {
                    name: 'grade_input',
                    options: [
                        {val: 10, text: 'O'},
                        {val: 9, text: 'A+'},
                        {val: 8, text: 'A'},
                        {val: 7, text: 'B+'},
                        {val: 6, text: 'B'},
                        {val: 5, text: 'C'},
                        {val: 0, text: 'F'},
                        {val: -1, text: 'DT'}
                    ]
                }
            }
        },
    }

    handleSubmit = (e) => { //function for handling submit data
        e.preventDefault();
        let finalData = {}; //variable for storing data to be send to backend
        for(let key in this.state.formData) {
            if(this.state.formData[key].value === '' && this.state.formData[key].element === 'select') //setting default value for grades
                finalData[key] = "10";
            else 
                finalData[key] = this.state.formData[key].value; //setting value
        }
        console.log(finalData);
        //NETWORK REQUEST HERE
        axios.post('/api/search/getResults', finalData)
            .then(res => console.log(res.data))
            .then(() => this.props.history.push('/result'))
            .catch(error => console.log(error));
    }

    changeState = (data) => {
        this.setState({formData : data}); //function for setting state
    }

    render() {
        const { classes } = this.props;
        return (
             <div className={classes.root} >
                <Grid 
                    container 
                    justify = "center"
                    alignItems = "center"
                    spacing = {24}
                >
                    <Grid item xs={8}>
                        <form onSubmit = {this.handleSubmit}>
                            <Grid 
                                container 
                                justify = "center"
                                alignItems = "center"
                                spacing = {24}
                            >
                                <Grid item xs={12}>
                                    <FormFields //template to render from fields
                                        //props
                                        formData = {this.state.formData} //this will send the state aka the configuration for input
                                        updateState = {newState => this.changeState(newState)} //for updateion of state
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={this.redirectPage}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default compose(
    withRouter,
    withStyles(styles)
)(Form);