import React, {Component} from "react";

export default class DashboardWelcome extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1 className='h1 title'>
                    Welcome to your Ghostboard!
                </h1>
                <h4 className="subtitle">
                    Please select a project.
                </h4>
            </div>
        )
    }
}
