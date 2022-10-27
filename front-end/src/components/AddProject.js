import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';


class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            project_name:'',
            project_id:'',
            api_key:'',
            transcripts:''
        }
        this.addProjectName = this.addProjectName.bind(this)
        this.addProjectID = this.addProjectID.bind(this)
        this.addApiKey = this.addApiKey.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // These methods store the value of the creator input into the state
    addProjectName(event) {
        this.setState({
            project_name: event.target.value
        })
    }

    addProjectID(event) {
        this.setState({
            project_id: event.target.value
        })
    }

    addApiKey(event) {
        this.setState({
            api_key: event.target.value
        })
    }

    // Submit creator inputs to DB
    onSubmit(event) {
        event.preventDefault() // Prevents form's default behaviour
        // (i.e., prevents page refresh after the creator inputs data

        const addedProject = {
            // This is received from the fields
            project_name: document.getElementById("project_name").value,
            project_id: document.getElementById("project_id").value,
            api_key: document.getElementById("api_key").value,
            transcripts: this.state.transcripts // This is another way to write the above code
        }

        axios.post('http://localhost:8000/api/v1/transcripts/createProject', addedProject)
            .then(response => console.log(response.data))

        // Reset form after submission
        this.setState({
            project_name:'',
            project_id:'',
            api_key:'',
            transcripts:'',
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='form-div'>
                    <form onSubmit={this.onSubmit}>
                        <input type='text'
                               placeholder='Project Name'
                               id="project_name"
                               onChange={this.addProjectName}
                               value={this.state.project_name}  // Attaches the user input to the state
                               className='form-control form-group'
                        />
                        <input type='text'
                               placeholder='Project ID'
                               id="project_id"
                               onChange={this.addProjectID}
                               value={this.state.project_id}
                               className='form-control form-group'
                        />
                        <input type='text'
                               placeholder='API Key'
                               id="api_key"
                               onChange={this.addApiKey}
                               value={this.state.api_key}
                               className='form-control form-group'
                        />
                        <input type='submit'
                               className='btn btn-primary btn-block'
                               value='Submit'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProject;