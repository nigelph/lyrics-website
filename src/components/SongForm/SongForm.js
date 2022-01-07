import React from 'react'

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
            lyricArea.innerHTML += data.lyrics;
        })
}


export default function SongForm() {
    return (

        <form onSubmit={showLyrics}>
            <input type="text" placeholder='Enter Artist' id="artistName"></input>
            <input type="text" placeHolder='Enter Song Name' id="songName"></input>

            <input type="submit" id="submit"></input>
        </form>

    )
}
