import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
     let playlists = this.props.data.map((playlist) => {
       let className;
       if(this.props.selectedPlaylistId === playlist.id) {
         className = 'selected'
       }

       let handlePlaylistSelect = () => {
         this.props.handlePlaylistSelect(playlist.id)
       }

      return(
        <Playlist
        key={playlist.id}
        playlist={playlist}
        className={className}
        handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    })
    return(
        <ul>
        {playlists}
        </ul>
    )
  }

}

export default PlaylistCollection;
