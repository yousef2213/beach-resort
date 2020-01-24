import React from 'react'
import Title from './Title'
import { useContext } from 'react'
import { RoomContext } from '../context'

// get Unige 
const getunique = (items,value) => {
    return [...new Set( items.map ( item => item[value] ) )]
}

export default function RoomFiltered({rooms}) {
    const context = useContext(RoomContext);
    const {
        type,
        handelChange,
        capacity,
        price,
        maxPrice,
        maxSize , 
        minPrice,
        breakfast,
        pets
    } = context;
    
    // return getunique
    let types = getunique(rooms,"type")
    types = ["all", ...types]
    types = types.map( (item,index) => {
        return(
            <option key={index} value={item}>
                {item}
            </option>
        )
    });

    let people = getunique(rooms,"capacity")
    people = people.map((item,index)=> {
        return(
    <option key={index} value={item}>{item}</option>
        )
    })    
    
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handelChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* capacity type */}
                <div className="form-group">
                    <label htmlFor="capacity">room type</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handelChange}>
                        {people}
                    </select>
                </div>
                {/* end capacity  */}

                {/* price type */}
                <div className="form-group">
                    <label htmlFor="price">room price $ {price} </label>
                    <input
                        type="range"
                        onChange={handelChange}
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        className="form-control"
                    />
                </div>
                {/* end capacity  */}

            </form>
        </section>
    )
}
