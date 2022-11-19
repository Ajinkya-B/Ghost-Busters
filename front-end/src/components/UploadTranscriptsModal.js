// This component is a modal that appears when the "Upload Transcripts" button is pressed.

import React from "react";
import Modal from 'react-bootstrap/Modal';
import {NavBtn, NavBtnLink} from "./Elements";

import UploadTranscriptsFromVoiceflow from "./UploadTranscriptsFromVoiceflow";


// Create the modal.
function VerticallyCenteredModal(props) {
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
                    {/* CHELSEA'S TODO: Center the buttons */}
                    <p>Automatically upload from your current project:</p>

                    {/*This component returns a button that logs textTranscripts into the console*/}
                    <UploadTranscriptsFromVoiceflow />

                    {/*<p>Upload from your device:</p>*/}
                    {/*<UploadTranscriptsFromDevice />*/}
                </center>
            </Modal.Body>
        </Modal>
    );
}

// Display the modal when the "Upload Transcripts" button is clicked.
export default function UploadTranscriptsModal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <NavBtn>
                <NavBtnLink onClick={() => setModalShow(true)}>
                    Upload Transcripts
                </NavBtnLink>
            </NavBtn>

            <VerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
