import React from 'react'
import {Link } from 'react-router-dom'
import defaulteimage from '../images/room-1.jpeg'
export default function Room({room}) {
    const {name , slug,images , price } = room;
    
    
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaulteimage } alt="rooms"  />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Featured
                </Link>
                <p className="room-info">{name}</p>
            </div>
            
        </article>
    )
}
