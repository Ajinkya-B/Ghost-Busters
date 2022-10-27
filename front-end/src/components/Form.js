// This file will probably be deleted soon. I'm keeping it for reference for now. - Chelsea

import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            projectID: '',
            apiKey: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { projectID, apiKey } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="projectID">Project ID</label>
                <input 
                    type="text" 
                    name="projectID" 
                    id="projectID"
                    value={projectID} 
                    onChange={this.handleChange} />
                <label for="apiKey">API Key</label>
                <input 
                    type="text" 
                    name="apiKey" 
                    id="apiKey"
                    value={apiKey} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;