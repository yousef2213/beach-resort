import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { RoomContext } from '../context'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import defaulteimage from '../images/room-1.jpeg'
import StyledHero from '../component/StyledHero'

export default class SinglePage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.sulg,
            defaulteimage
        };
    }

    static contextType = RoomContext;
    render() {
        const {getRooms} = this.context;
        const room = getRooms(this.state.slug);

        if(!room) {
            return(
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to="/rooms/" className="btn-primary" >
                        back to rooms
                    </Link>
                </div>
            )
        }

        const {
            name,
            price,
            description,
            pets,
            images,
            extras,
            breakfast,
            size,
            capacity
        } = room;
        const [mainImg , ...defaulteimage] = images;console.log(images);
        
        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary" >
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaulteimage.map((item,index) => {
                            return <img key={index} src={item} alt="single images" />
                        } )}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Data</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>max capacity : {capacity > 1 ? `${capacity} people`: `${capacity} Person`} </h6>
                            <h6> 
                                {pets ? "pets allowed" : "no pets allowed"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                    {extras.map(  (item,index) =>{
                            return <li key={index}>{item}</li>
                        }  )}
                    </ul>
                </section>
            </>
        )
    }
}
