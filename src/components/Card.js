import React, {Component} from 'react'


export default class Card extends Component {

  render(props){
    console.log(this.props.language.image)
      return(
      <div className='card'>
        <img id="logo" src={this.props.language.logo} />
        <div className='card-info'>
          <h3>{this.props.language.name}</h3>
            
              <p>{this.props.language.style}</p>
              <p>{this.props.language.company}</p>
              <p><a href={this.props.language.docs}>Official Docs</a></p>
              <p><a href={this.props.language.meme}>Meme</a></p>
           
        </div>
      </div> 
      )
  }


}

