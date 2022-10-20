import React, { Component } from 'react';
import axios, {post} from 'axios';

const api_key = "VF.DM.633b377749ac36000789fc0b.2A2gp7YghAjnQkq7"
const version = "633b36f2c02de81ff2167419"
const url = `https://api-dm-test.voiceflow.fr/exportraw/${api_key}?versionID=${version}`
// https://jsonplaceholder.typicode.com/users
class SubmitTranscript extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}

// class SubmitTranscript extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: ''
//         }
//     }

//     onChange(e)
//     {
//         let files = e.target.files;

//         let reader = new FileReader();
//         reader.readAsDataURL(files[0]);

//         reader.onload = (e) => {
//             console.warn('img data', e.target.result)

//             const url = ""
//             const formData = {file:e.target.result}
//             return post(url, formData).then(response => console.warn('result', response))
//         }
//     }

//     render() {
//         return (

//             <div onSubmit={this.onFormSubmit}>
//                 <h1>Submit a transcript from your device:</h1>
//                 <input type='file' name='file' onChange={(e)=>this.onChange(e)} />
//             </div>
//         )
//     }
// }

export default SubmitTranscript;