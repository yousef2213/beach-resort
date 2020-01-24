import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();


class RoomProvider extends Component {
    state = {
        rooms :[],
        sortedRooms : [],
        featuredRooms :[],
        loading: true,
        type:'all',
        capacity:1,
        minSize:0,
        maxSize:0,
        minPrice:0,
        maxPrice:0,
        breakfast: false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.FormatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true );
        let maxSize = Math.max(...rooms.map( item => item.size ));
        let maxPrice = Math.max(...rooms.map( item => item.price ));



        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price : maxPrice,
            maxPrice,
            maxSize
        })
        
    }

    //FormatData
    FormatData(items) {
        let TempItems = items.map( item => {
            const id = item.sys.id;
            const images = item.fields.images.map( image => image.fields.file.url );
            const room = {...item.fields,id,images};
            return room;
        });
        return TempItems
    }

    // getRooms
    getRooms = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    // handelChange
    handelChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        this.setState(
            {
                [name] : value
            },
            this.filterRooms
        )
    }

    filterRooms = () =>{
        let {
            rooms,
            type,
            minSize,
            maxSize,
            capacity,
            price
        } = this.state;

        let tempRooms = [...rooms];
        
        capacity = parseInt(capacity)
        price = parseInt(price)

        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price)

        this.setState({
            sortedRooms: tempRooms
        });
        
    };
    

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRooms : this.getRooms,
                handelChange : this.handelChange,
                filterRooms : this.filterRooms
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer,RoomContext,RoomProvider }