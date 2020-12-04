import React from 'react'
import '../Components/ImageList.css'
import ImageCard from "../Components/ImageCard"


const ImageList = (props) => {

    const RenderedImage = props.images.map(({ id, alt_description, urls }) => <ImageCard 
        id={id}
        alt_description={alt_description}
        urls={urls}
    />);

    return (
        <div className="image_container"> {RenderedImage} </div>
    );
}

export default ImageList
