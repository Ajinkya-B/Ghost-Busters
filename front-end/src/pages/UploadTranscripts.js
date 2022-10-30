import React, { Component } from 'react';
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
      await axios.get(`http://localhost:8000/api/v1/transcripts`)

    }catch(e){
      console.log(e)
    }
  }

  async putRawData() {
    try{
      await axios.get(`http://localhost:8000/api/v1/transcripts/raw`)

    }catch(e){
      console.log(e)
    }
  }

  async flushDB(){
    try{
      await axios.get(`http://localhost:8000/api/v1/transcripts/flush`)

    }catch(e){
      console.log(e)
    }
  }

  async getTrimmed(){
    try{
      await axios.get(`http://localhost:8000/api/v1/transcripts/getTrimmed`)
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
        <button onClick={ () => this.postData() }> Put Trimmed Data into DB</button>
        <br/>
        {/*<button onClick={ () => this.getData() }> Get Data </button>*/}
        <br/>
        <button onClick={ () => this.putRawData() }> Put Raw Data into DB</button>
        <br/>
        <button onClick={ () => this.flushDB() }> Flush DB</button>
        <br/>
        <button onClick={ () => this.getTrimmed() }> Get Trimmed</button>
      </div>
    );
  }

}
export default UploadTranscripts;
