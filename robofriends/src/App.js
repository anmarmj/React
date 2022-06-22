import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox'
import React, { Component } from 'react';
import './App.css'
import Scroll from './Scroll';



class App extends Component {

    constructor() {
        super();
        this.state =
        {
            robots: [],
            searchfield: '',
            cardsize: 200
        }
    }
    // when define an own function use this syntax 
    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })


    }
    render() {

        const filterdRobots = this.state.robots.filter(
            robotsArry => {
                return robotsArry.name.toLowerCase().includes
                    (this.state.searchfield.toLowerCase())
            }

        )

        if (this.state.robots.length === 0) {

            return (
                <div className='dtc v-mid tc white ph3 ph4-l'>
                    <h1 >Loading awesome robots</h1>
                </div>
            )

        }
        else {
            return (
                <div className='tc'>
                    <h1 className='fw8'>Robo Friends</h1>
                    <SearchBox

                        searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList
                            robots={filterdRobots}
                            cardsize={this.state.cardsize} />
                    </Scroll>

                </div>


            );
        }
    }

}

export default App;