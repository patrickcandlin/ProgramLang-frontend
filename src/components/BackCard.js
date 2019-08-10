import React, {Component} from 'react'

export default class BackCard extends Component {
    constructor(){
        super()
    }
    render(props){
        console.log("backcard", this.props.meme)
        return(
            <div  className="back">
               <img src={`${this.props.meme}`}/>
            </div>
        )
    }
}