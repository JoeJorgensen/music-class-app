import React from "react";
import SongForm from "./SongForm";

class Music extends React.Component{
    constructor(props){
        super(props)
        //Initial state below
        this.state={songs:[{name:'Gold Digger', artist: 'Kanye West'}, 
        {name:'We Are Young', artist: 'Fun'},
    ], 
        showForm: false}
    }
    addSong=(song)=>{

        let updateSongs = [song, ...this.state.songs]
        this.setState({
            songs:updateSongs
        })

    }
    deleteSong = (songName)=>{
       let filterSongs = this.state.songs.filter(s=> s.name !== songName)
       this.setState({
           songs: filterSongs
       })

    }
    renderMusic = ()=>{
        return this.state.songs.map((s)=>{
            return (
                <div className="border"> 

                <h1>{s.name}</h1>

                <p>{s.artist}</p>
                <button onClick={()=>this.deleteSong(s.name)}>Delete Song</button>
                
                </div>
            )
        })
    }

toggleForm = ()=>{
    this.setState({
    showForm: !this.state.showForm
    })
}
render = ()=>{
    const {showForm} = this.state
    console.log('Music render method called')
    return (
        <div className="border">
            <button onClick={this.toggleForm}>{showForm ? 'hide' :  'show' }</button>
        {showForm && <SongForm addSong={this.addSong} />}
        <h1> Playlist:</h1>
        {this.renderMusic()}
        </div>
        )

    }
}


export default Music