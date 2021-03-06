import React from 'react'
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    const songs = this.props.songs.map((song) => {

      let className;
      if(this.props.selectedSongId === song.id){
        className = "selected";
      }

      let handleSongSelect = () => {
        this.props.handleSongSelect(song.id)
      }

      return (
        <Song
          key={song.id}
          song={song}
          className={className}
          handleSongSelect = {handleSongSelect}
        />
      )


    })

    return (
      <ul>
      {songs}
      </ul>
    )
  }




}

export default SongCollection
