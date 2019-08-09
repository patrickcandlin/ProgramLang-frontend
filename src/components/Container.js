import React, {Component} from 'react'
// import { createSecurePair } from 'tls';
import Card from './Card'

export default class Container extends Component {
    constructor(){
        super()
        this.state = {
            languages: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/languages')
          .then(resp => resp.json())
          .then(resp => this.setState({
              languages: resp
          }))
    }





    mapLanguages = () => {
        console.log('hello from MapLang')
        return this.state.languages.map((language) =>
            <Card language={language} />
        );
    }

    render(){ 

        return(
        <div className='container'>
{/*             
            <Card language={this.state.languages}/> */}
            {this.mapLanguages()}
        </div>
        )
    }



}