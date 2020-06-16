import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        redirect: false
    }

    addHandler = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name

        this.setState({
            [inputName]: inputValue
        })
    }

    submitHandler = (event) => {
        event.preventDefault()

        let newBeer = this.state
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
                this.setState({
                    redirect: true
                })
            })

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/beers" />
        }
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    Beer Name: <input name="name" value={this.state.name} onChange={this.addHandler} />
                    Tagline:   <input name="tagline" value={this.state.tagline} onChange={this.addHandler} />
                    Description: <input name="description" value={this.state.description} onChange={this.addHandler} />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;