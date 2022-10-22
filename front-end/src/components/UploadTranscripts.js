import React, { Component } from 'react';
import SubmitTranscript from './SubmitTranscript';

import axios from 'axios';

class UploadTranscripts extends Component {
  state = {
    name: ''
  };

  async postData() {
    axios
      .get(`http://localhost:8000/api/v1/transcripts/trimmed`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  async getData() {
    try{
      const students = await axios.get(`http://localhost:8000/api/v1/transcripts`)
      console.log(students)
      console.log("SUCCESS!!!")
    }catch(e){
      console.log(e)
    }
  }

  async putRawData() {
    try{
      const students = await axios.get(`http://localhost:8000/api/v1/transcripts/raw`)
      console.log(students)
      console.log("SUCCESS!!!")
    }catch(e){
      console.log(e)
    }
  }



///////////////////

  // postData() {

  //   let obj = { name: 'Chelsea', age: 420, email:'mail' }
  //   localStorage.setItem('myData', JSON.stringify(obj));

  // }

  // async getData() {
  //   const students = await axios.get(`http://localhost:5000/api/v1/restaurants`)
  //   setStudents(students.data)
  //   setShow(!show)
  // }

  render() {
     
    return (
      <div
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   height: '90vh'
        // }}
      >
        <button onClick={ () => this.postData() }> Post Data </button>
        <button onClick={ () => this.getData() }> Get Data </button>
        <button onClick={ () => this.putRawData() }> Put Raw Data </button>
        {/* <SubmitTranscript></SubmitTranscript> */}

        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form> */}
        
      </div>
    );
  }

}
export default UploadTranscripts;
