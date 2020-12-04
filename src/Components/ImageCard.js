import React from 'react'
import '../Components/ImageCard.css'

function ImageCard(props) {
    return ( <img className="image_card" key={props.id} alt={props.alt_description} src={props.urls.regular} /> )
}

export default ImageCard
