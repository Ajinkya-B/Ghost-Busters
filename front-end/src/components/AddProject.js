import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            projectName:'',
            projectID:'',
            // apiKey:'',
            transcripts:'',
            analyzedData:''
        }
        this.addProjectName = this.addProjectName.bind(this)
        this.addProjectID = this.addProjectID.bind(this)
        // this.addApiKey = this.addApiKey.bind(this)
        // this.onSubmit = this.onSubmit.bind.(this)
    }

    addProjectName(event) {
        this.setState({
            projectName: event.target.value
        })
    }

    addProjectID(event) {
        this.setState({
            projectID: event.target.value
        })
    }

    // addApiKey(event) {
    //     this.setState({
    //         apiKey: event.target.value
    //     })
    // }

    onSubmit(event) {
        event.preventDefault()

        const addedProject = {

            // this is received from the fields
            project_name: document.getElementById("project_name").value,
            project_id: document.getElementById("project_id").value
            // projectName: this.state.projectName,
            // projectID: this.state.projectID,
            // // apiKey: this.state.apiKey,
            // transcripts: this.state.transcripts,
            // analyzedData: this.state.analyzedData
        }

        axios.post('http://localhost:8000/api/v1/transcripts/createProject', addedProject)
            .then(response => console.log(response.data))

        // this.setState({
        //     projectName:'',
        //     projectID:'',
        // //     apiKey:'',
        //     transcripts:'',
        //     analyzedData:''
        // })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                   placeholder='Project Name'
                                   id="project_name"
                                   className='form-control form-group'
                            />
                            <input type='text'
                                   placeholder='Project ID'
                                   id="project_id"
                                   className='form-control form-group'
                            />
                            {/*<input type='text'*/}
                            {/*       placeholder='API Key'*/}
                            {/*       onChange={this.addApiKey}*/}
                            {/*       value={this.state.apiKey}*/}
                            {/*       className='form-control form-group'*/}
                            {/*/>*/}
                            <input type='submit'
                                   className='btn btn-primary btn-block'
                                   value='Submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;