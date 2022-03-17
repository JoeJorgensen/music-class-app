import React from "react";
import Badge from "../Styles/Badge";
import Button from "../Styles/Button";
import './Card.css';
import SongForm from "./SongForm";

class Music extends React.Component{
    constructor(props){
        super(props)
        //Initial state below
        this.state={songs:[
        {name: ' Guilty Conscience ', artist:' 070 Shake ' },
        {name: ' We Are Young ', artist: 'Fun'},
        {name: ' Gold Digger ', artist: 'Kanye West'}, 
        {name: ' PPP ', artist:' Beach House ' },
        {name: ' Time ', artist:' Pink Floyd' },
        {name: ' The End ', artist:' The Doors' },
        {name: ' Brothers In Arms ', artist:' Dire Straits' },
        {name: ' Vienna ', artist:' Billy Joel' },
        {name: ' House Of The Rising Sun ', artist:' The Animals ' },
        {name: ' Going Up The Country ', artist:' Canned Heat ' },
        {name: ' Past Lives ', artist:' BØRNS ' },
        {name: ' All Apologies ', artist:' Nirvana ' },
        {name: ' Outro ', artist:' M83 ' },


        
       
        

        
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
            {/* '3px, #5ddcff, #3c67e3 43%, #4e00c2' */}
             <Badge >Playlist</Badge>
              <br />
              
            <br/>
            {/* <p style={{borderTop: '8px double  #3c67e3  '}}></p> */}
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