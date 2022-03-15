import React from 'react'

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
        <div className='border'>
            <h1>Song Form</h1>
            <form onSubmit={this.handleSubmit}>
                <p>Name</p>
                <input name= 'name' value={this.state.name} onChange={this.handleChange}/>
                <p>Artist</p>
                <input name= 'artist' value={this.state.artist} onChange={this.handleChange}/>

                <br/>
                <br/>
                <button>Add Song</button>
            </form>
        </div>
    )
    }

}

export default SongForm