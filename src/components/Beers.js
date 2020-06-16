import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Beers extends React.Component {
    state = {
        beersArr: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    beersArr: res.data
                })
            })
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                {this.state.beersArr.map(e =>
                    <div className="flex-beer" key={e._id}>
                        <img src={e.image_url} />
                        <div>
                        <h2 ><Link to={"/beers/" + e._id}>{e.name}</Link></h2>
                        <p>{e.tagline}</p>
                        <p> {e.contributed_by} </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Beers;