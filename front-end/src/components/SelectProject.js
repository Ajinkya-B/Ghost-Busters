import React, {Component} from "react";
import axios from "axios";


class SelectProject extends Component {

    // This function displays the project objects from MongoDB on the console/terminal.
    // This is incomplete! We want to display the project names on the frontend (i.e., the ManageProject page)
    async getAllProjects() {
        try{
            await axios.get(`http://localhost:8000/api/v1/transcripts/getAllProjects`)

        } catch(e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={ () => this.getAllProjects() }> Get Projects </button>
                </div>
            </div>
        )
    }

}

export default SelectProject;