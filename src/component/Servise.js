import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Servise extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail />,
                title:'Free Cocktail',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus!'
            },
            {
                icon: <FaHiking />,
                title:'EndLess Hiking',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus!'
            },
            {
                icon: <FaShuttleVan />,
                title:'Free Shullt',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus!'
            },
            {
                icon: <FaBeer />,
                title:'Strongest Beer',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item,index) =>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>
                            </article>
                        )
                    } )}
                </div>
            </section>
        )
    }
}
