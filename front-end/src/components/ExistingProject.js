// import React, {Component} from "react";
// import axios from "axios";
// import * as project_names from "react-bootstrap/ElementChildren";
//
//
// class ExistingProject extends Component {
//     constructor() {
//         super()
//         this.state = {
//             project_name: '',
//             project_id: '',
//             api_key: '',
//             transcripts: '',
//             projectNames: []
//         }
//     };
//
//     componentDidMount = () => {
//         this.getProjectName();
//     }
//
//     getProjectName = () => {
//         axios.get('...')
//             .then( (response) => {
//                 const data = response.data;
//                 this.setState({project_names: data})
//                 console.log('Data has been received!');
//             })
//             .catch( () => {
//                 alert('Error retrieving data :(');
//             });
//     }
//
//     displayProjectNames = (projects) => {
//         if (!project_names.length) return null;
//
//         project_names.map((project, index) => (
//             <div key={index}>
//                 <p>{project.project_name}</p>
//             </div>
//         ));
//     }
//
//     render() {
//         console.log('State: ', this.state);
//
//         return (
//             <div>
//                 <div>
//                     {this.displayProjectNames(this.state.project_names)}
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ExistingProject;