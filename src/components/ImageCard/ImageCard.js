import React, { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";
import "./imageCard.css";

function ImageCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { alt_description, description, urls } = props.data;
    return (
        <>
            <div className="image__card">
                <img
                    src={urls.small}
                    alt={alt_description}
                    onClick={handleShow}
                />
            </div>
            <ImageModal show={show} close={handleClose} data={props.data} />
        </>
    );
}

export default ImageCard;
