import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'
import React, { Component } from 'react';
import './App.css'
import Scroll from '../components/Scroll';



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

        const { robots, searchfield, cardsize } = this.state

        const filterdRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes
                    (searchfield.toLowerCase())
            }

        )

        return (!robots.length) ?

            (
                <div className='dtc v-mid tc white ph3 ph4-l'>
                    <h1 >Loading awesome robots</h1>
                </div>
            )


            :
            (
                <div className='tc'>
                    <h1 className='fw8'>Robo Friends</h1>
                    <SearchBox

                        searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList
                            robots={filterdRobots}
                            cardsize={cardsize} />
                    </Scroll>

                </div>


            );

    }

}

export default App;