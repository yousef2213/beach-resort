import React, { Component } from 'react'
import Title from './Title'
import {RoomContext} from '../context'
import Room from './Room'
import Loading from './Loading'



export default class featured extends Component {
    static contextType = RoomContext; 
    render() {
        let {loading , featuredRooms : rooms} = this.context;
        rooms = rooms.map( room => <Room key={room.id} room={room} /> );
        
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading />: rooms}
                </div>
                
            </section>
        )
    }
}
