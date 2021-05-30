import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import ImageCard from "../components/ImageCard/ImageCard";
import Loader from "../components/Loader/Loader";
import { API } from "../config";
import ImageModal from "../components/ImageModal/ImageModal";

function Home() {
    const [isLoading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(API)
            .then((res) => {
                console.log(res.data);
                setImages(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
            });
    }, []);
    return (
        <div className="main__div">
            {error && <p>there is error</p>}
            {isLoading ? (
                <Loader />
            ) : (
                images.map((image) => <ImageCard key={image.id} data={image} />)
            )}
        </div>
    );
}

export default Home;
