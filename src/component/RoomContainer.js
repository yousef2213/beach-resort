import React from 'react'
import RoomList from './RoomList'
import RoomFiltered from './RoomFiltered'
import {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
                // console.log(value);
                const {loading,rooms,sortedRooms} = value;

                if(loading) {
                    return(
                        <Loading />
                    )
                }

                return(
                    <div>
                        <RoomFiltered rooms={rooms} />
                        <RoomList rooms={sortedRooms} />
                    </div>
                )
            }}
        </RoomConsumer>
    )
}
