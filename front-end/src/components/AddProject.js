// This component allows the user to create a new project.
// It is visible on the Manage Project page.

import React, {Component, useEffect} from 'react';
import ProjectDataService from "../services/ProjectDataService";


export default class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            project_name:'',
            version_id:'',
            api_key:'',
            transcripts: [],
        }
        this.addProjectName = this.addProjectName.bind(this)
        this.addVersionID = this.addVersionID.bind(this)
        this.addApiKey = this.addApiKey.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * A method that stores the project_name value inputted into the state.
     * @param event
     */
    addProjectName(event) {
        this.setState({
            project_name: event.target.value
        })
    }

    /**
     * A method that stores the project_id value inputted into the state.
     * @param event
     */
    addVersionID(event) {
        this.setState({
            version_id: event.target.value
        })
    }

    /**
     * A method that stores the api_key value inputted into the state.
     * @param event
     */
    addApiKey(event) {
        this.setState({
            api_key: event.target.value
        })
    }

    /**
     * Submit inputs to MongoDB.
     * @param event
     */
    onSubmit(event) {
        event.preventDefault()

        const addedProject = {
            // The user input received from the fields
            project_name: document.getElementById("project_name").value,
            version_id: document.getElementById("version_id").value,
            api_key: document.getElementById("api_key").value,
            transcripts: this.state.transcripts // This is another way to write the above code
        }

        ProjectDataService.createProject(addedProject)
            .then(response => console.log(response.data))

        // Reset THE form after submission
        this.setState({
            project_name:'',
            version_id:'',
            api_key:'',
            transcripts: [],
        })

    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='form-div'>
                    <form onSubmit={this.onSubmit}>
                        {/* TEXT FIELDS THAT TAKE IN USER INPUTS */}
                        <input type='text'
                               aria-label='project name'
                               placeholder='Project Name'
                               id="project_name"
                               onChange={this.addProjectName}
                               value={this.state.project_name}  // Attaches the user input to the state
                               className='form-control form-group'
                        />
                        <input type='text'
                               aria-label='version id'
                               placeholder='Version ID'
                               id="version_id"
                               onChange={this.addVersionID}
                               value={this.state.version_id}
                               className='form-control form-group'
                        />
                        <input type='text'
                               aria-label='api key'
                               placeholder='API Key'
                               id="api_key"
                               onChange={this.addApiKey}
                               value={this.state.api_key}
                               className='form-control form-group'
                        />
                        {/* SUBMIT BUTTON */}
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
