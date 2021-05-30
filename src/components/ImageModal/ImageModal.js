import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./imageModal.css";

function ImageModal({ show, close, data }) {
    console.log(data);
    return (
        <div>
            <>
                <Modal show={show}>
                    <Modal.Header closeButton onClick={close}>
                        <Modal.Title className="title">
                            {data.description
                                ? data.description
                                : data.alt_description}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={data.urls.small}
                            alt={data.alt_description}
                            className="modal__image"
                        />
                    </Modal.Body>
                </Modal>
            </>
        </div>
    );
}

export default ImageModal;
