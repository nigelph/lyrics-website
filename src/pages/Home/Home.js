import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SongForm from '../../components/SongForm/SongForm'
import homeStyle from '../Home/home.module.css'

export default function Home() {
    return (
        <div className={homeStyle['home-container']}>
            <Navbar />
            <SongForm />
            <div id='show-lyrics'></div>
            <Footer />
        </div>
    )
}
