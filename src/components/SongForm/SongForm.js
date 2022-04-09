import React from 'react'
import formStyle from './SongForm.module.css'
import InputBox from './components/InputBox/InputBox'
import SubmitButton from './components/SubmitButton/SubmitButton'

function showLyrics(e) {
    e.preventDefault()
    let artist = document.getElementById('artistName').value
    let songName = document.getElementById('songName').value

    if (/\s/.test(artist)) {
        artist = artist.replace(/ /g, "-");
        console.log(artist);
    } else if (/\s/.test(songName)) {
        songName = songName.replace(/ /g, "-");
    } else {
        console.log(
            "Song does not exist, or artist/song name was not entered properly"
        );
    }
    fetch(`https://api.lyrics.ovh/v1/"${artist}/${songName}`)
        .then(res => res.json())
        .then((data) => {
            let lyricArea = document.getElementById('show-lyrics')
            lyricArea.innerHTML = ''
            console.log(data.lyrics)
            lyricArea.innerHTML += data.lyrics.replace(new RegExp('\n', 'g'), "<br>");

        })
}


export default function SongForm() {
    return (
        <div className={formStyle['form-container']}>
            <form onSubmit={showLyrics} className={formStyle['form-style']}>
                <InputBox placeholder='Enter Artist' id='artistName' />
                <InputBox placeholder='Enter Song Name' id='songName' />
                <SubmitButton id='submit' />

            </form>
        </div>

    )
}
