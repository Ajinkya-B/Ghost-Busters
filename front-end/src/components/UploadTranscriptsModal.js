import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UploadTranscripts from "../pages/UploadTranscripts";
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
                    <p>Automatically upload from your current project:</p>
                    <UploadTranscripts />
                    <p>Upload from your device:</p>
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
