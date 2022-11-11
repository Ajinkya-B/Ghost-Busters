import React, {useRef, Component} from "react";
import {NavBtn, NavBtnLink} from "./NavbarElements";
import axios from "axios";


class UploadTranscriptsFromDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("https://ghost-busters-f6c6b7uoga-uc.a.run.app/api/v1/transcripts/test", data, {
            // receive two    parameter endpoint url ,form data
        })
        .then(res => { // then print response status
            console.log(res.statusText)
        })
    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    render() {
        return (
            <div>
                <NavBtn>
                    <input type="file" name="file" onChange={this.onChangeHandler}/>
                    {/*<NavBtnLink>*/}
                    {/*    Choose file*/}
                    {/*</NavBtnLink>*/}
                </NavBtn>
                <button type="button" className="btn btn-success btn-block bg-blue" onClick={this.onClickHandler}>Submit
                </button>
            </div>
        );
    }
}

export default UploadTranscriptsFromDevice;
