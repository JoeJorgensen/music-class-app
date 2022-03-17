import React from 'react'
import Badge from '../Styles/Badge'
import Button from '../Styles/Button'

class SongForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            artist: ''
        }
    }

    handleChange = (e)=>{
        console.log('value', e.target.value)
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.addSong(this.state)

    }
    render(){
    return (
        <div className='card'>
            {/* <h1>Song Form</h1> */}
            <form onSubmit={this.handleSubmit}>
                <Badge smallFont>Name</Badge>  
                <br/>
                <br/>

                <input name= 'name' value={this.state.name} onChange={this.handleChange}/>
                <br/>
                <br/>
                
                <Badge smallFont>Artist</Badge>
                <br/>
                <br/>


                <input name= 'artist' value={this.state.artist} onChange={this.handleChange}/>

                <br/>
                <br/>
                <Button outline >Add Song</Button>
            </form>
        </div>
    )
    }

}

export default SongForm