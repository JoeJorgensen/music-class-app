import React from "react";
import Badge from "../Styles/Badge";
import Button from "../Styles/Button";
import SongForm from "./SongForm";
import  './Card.css';

class Music extends React.Component{
    constructor(props){
        super(props)
        //Initial state below
        this.state={songs:[
        {name: ' Gold Digger ', artist: 'Kanye West'}, 
        {name: ' We Are Young ', artist: 'Fun'},
        {name: ' Time ', artist:' Pink Floyd' },
        {name: ' The End ', artist:' The Doors' },
        {name: ' Brothers In Arms ', artist:' Dire Straits' },
        {name: ' Vienna ', artist:' Billy Joel' },
        {name: ' House Of The Rising Sun ', artist:' The Animals ' },
        {name: ' Going Up The Country ', artist:' Canned Heat ' },
        
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

                <div  style={{contentAlign:'center'}}> 
                <br/>
                <br/>


                <div className="card" >
                <Badge  >
                { s.name}
                </Badge>
                <br/>
                <br/>
                <br/>



                <Badge secondary rounded>
                {s.artist}
                </Badge>
                <br/>
                <br/>

                 <Button outline > 
                <p onClick={()=>this.deleteSong(s.name)}>Delete Song</p>
                </Button> 
                </div>

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
        <div  style={{textAlign : 'center'}}>
            
             <Badge>Playlist</Badge>
              <br/>
            <br/>
            <Button outline >
            <p onClick={this.toggleForm}>{showForm ? 'Done' :  'New Song ' }</p>
            </Button>
           

        {showForm && <SongForm addSong={this.addSong} />}
        
        {this.renderMusic()}
        </div>
        )

    }
}


export default Music