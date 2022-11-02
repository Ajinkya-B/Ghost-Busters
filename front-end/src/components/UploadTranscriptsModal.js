import React from "react";
import Modal from 'react-bootstrap/Modal';

import UploadTranscripts from "../pages/UploadTranscripts";
import UploadTranscriptsFromVoiceflow from "./UploadTranscriptsFromVoiceflow";
import UploadTranscriptsFromDevice from "./UploadTranscriptsFromDevice";

import {NavBtn, NavBtnLink} from "./NavbarElements";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <center>
                        How would you like to upload transcripts?
                    </center>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <center>

                    {/*CHELSEA'S TODO: Center the buttons, and also style the select project and remove project buttons*/}

                    <p>Automatically upload from your current project:</p>
                    {/*UploadTranscripts returns a bunch of buttons for getting, posting transcripts*/}
                    {/*<UploadTranscripts />*/}

                    {/*This component returns a button that logs textTranscripts into the console*/}
                    <UploadTranscriptsFromVoiceflow />


                    <p>Upload from your device:</p>
                    {/*RIGHT NOW THIS COMPONENT RETURNS A NONFUNCTIONAL BUTTON*/}
                    <UploadTranscriptsFromDevice />

                </center>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    <Button onClick={props.onHide}>Close</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    );
}

function UploadTranscriptsModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <NavBtn>
                <NavBtnLink onClick={() => setModalShow(true)}>
                    Upload Transcripts
                </NavBtnLink>
            </NavBtn>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default UploadTranscriptsModal;
