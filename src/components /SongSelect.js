import React from 'react';

const SongSelect = (props) => {
    const options = props.songs.map(song => {

        return <option value={song["im:name"].label} key={song.id.attributes["im:id"]}> {song["im:name"].label} </option>
    })

    function handleChange(event){
        props.onSongSelected(event.target.value);
    }

return (
    <select id="song-select" onChange={handleChange} defaultValue="default">
    <option disabled value="default"> Choose a song... </option>
    {options}
    </select>
)
    
}

export default SongSelect