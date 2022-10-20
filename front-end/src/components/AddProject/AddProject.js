import React, {Component} from 'react';

class AddProject extends Component {
    initialState = {
        projectID: '',
        apiKey: ''
    };

    state = this.initialState;


    handleChange = event => {
        const { projectID, value } = event.target;

        this.setState({
            [projectID] : value,
        });
    }

    onAddProjectSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { projectID, apiKey } = this.state; 

        return (
            <form onSubmit={this.onAddProjectubmit}>
                <label for="name">Project ID</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={projectID} 
                    onChange={this.handleChange} />
                <label for="job">API Key</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={apiKey} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default AddProject;