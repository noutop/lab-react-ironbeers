import React from 'react';

import { Link } from 'react-router-dom'

import axios from 'axios'

class BeerDetails extends React.Component{
    state={
        //Until loading is done we can use null undefined,etc...
        beer:[],
        isLoading:true
    }
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/'+this.props.match.params.id)
        .then((response)=>{
            console.log(response.data);
            this.setState({
                //Rewrite the beer array!
                beer:response.data,
                isLoading:false
            })
        })
    }
    render(){
        
        if(this.state.isLoading){
            return <h1>LOADING...</h1>
        }
        console.log(this.state.beer);
        let beer=this.state.beer
        return(
            <div className="flex-beer">
                <img src={beer.image_url}/>
                <div>
                <h1>{beer.name}</h1> 
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                </div>
            </div>
        )
    }
    
}
export default BeerDetails;