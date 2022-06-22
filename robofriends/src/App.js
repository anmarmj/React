import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'
import React, { Component } from 'react';
import './App.css'



class App extends Component {

    constructor() {
        super();
        this.state =
        {
            robots: robots,
            searchfield: '',
            cardsize: 200
        }
    }
    // when define an own function use this syntax 
    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })

    }
    render() {

        const filterdRobots = this.state.robots.filter(
            robotsArry => {
                return robotsArry.name.toLowerCase().includes
                    (this.state.searchfield.toLowerCase())
            }

        )

        return (
            <div className='tc'>
                <h1 className='fw8'>Robo Friends</h1>
                <SearchBox

                    searchChange={this.onSearchChange} />
                <CardList
                    robots={filterdRobots}
                    cardsize={this.state.cardsize} />
            </div>


        );
    }

}

export default App;