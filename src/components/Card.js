import React, {Component} from 'react'
import BackCard from './BackCard'

export default class Card extends Component {

show

  render(props){
    console.log(this.props.language.image)
      return(
        <div className='card'>
            <div className='front'>
                    <img id="logo" src={this.props.language.logo} />
                <div id="front" className="">
                    <div className='card-info'>
                        <h3>{this.props.language.name}</h3>
                        <p>{this.props.language.style}</p>
                        <p>{this.props.language.company}</p>
                        <p><a href={this.props.language.docs}>Official Docs</a></p>
                        <p><a href={this.props.language.meme}>Meme</a></p>
                    </div>
                </div>
            </div> 
             <BackCard meme={this.props.language.meme}/>
        </div>    
      )
  }


}

