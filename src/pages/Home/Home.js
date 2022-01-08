import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SongForm from '../../components/SongForm/SongForm'
import homeStyle from '../Home/home.module.css'

export default function Home() {
    return (
        <div className={homeStyle['home-container']}>
            <Navbar />
            <h1 className={homeStyle['main-heading']}>Search Song Lyrics</h1>
            <SongForm />
            <div id='show-lyrics' className={homeStyle['lyrics-style']}></div>
            <Footer />
        </div>
    )
}
