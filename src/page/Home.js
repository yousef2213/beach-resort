import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import Services from '../component/Servise'
import Featured from '../component/featured'
export default function Home() {
    return (
        <>
            <Hero hero="defaultHero" >
                <Banner title="luxurious rooms" subtitle="yousef ayman" >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <Featured />
        </>
    )
}
