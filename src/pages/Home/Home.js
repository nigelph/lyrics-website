import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SongForm from '../../components/SongForm/SongForm'

export default function Home() {
    return (
        <div>
            <Navbar />
            <SongForm />
            <div id='show-lyrics'></div>
            <Footer />
        </div>
    )
}
