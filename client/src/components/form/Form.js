import React from 'react';
import axios from 'axios';
import FormFields from '../../templates/FormFields';

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
                labelText: 'BatchYear',
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
                labelText: 'BatchNear',
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
                labelText: 'rollno',
                config: {
                    name: 'rollno_input',
                    type: 'text',
                    placeholder: '058'
                }
            },
            ma101: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of ma101',
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
            ap101: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of ap101',
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
            ac101: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of ac101',
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
            me101: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of me101',
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
            me103: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of me103',
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
            hu101: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Enter your Grade of hu101',
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
        }
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
        axios.post('/api/search/getResults', finalData).then(res => console.log(res.data)).catch(error => console.log(error));
    }

    changeState = (data) => {
        this.setState({formData : data}); //function for setting state
    }

    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit}>
                    <FormFields //template to render from fields
                        //props
                        formData = {this.state.formData} //this will send the state aka the configuration for input
                        updateState = {newState => this.changeState(newState)} //for updateion of state
                    />
                    <button type="submit" className="submit_button">Submit</button>
                </form>
            </div>
        );
    }
};

export default Form;