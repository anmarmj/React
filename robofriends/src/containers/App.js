import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'
import React, { useState, useEffect } from 'react';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { nav } from '../components/nav';
import Sets from '../components/Sets';


function App() {
    const [robots, setRobots] = useState([]);
    const [setName, setSetName] = useState('set1');
    const [searchfield, setSearchField] = useState('');
    const cardsize = 200;


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users)
            })
    }, [setName]); // if we put in the array one of the state consant it will run once its change

    const onSearchChange = (event) => {

        setSearchField(event.target.value);

    }
    const onNavChange = (event) => {

        //setSearchField(event.target.value);
setSetName(event.target.name.toLowerCase())
    

    }
    // const { robots, searchfield, cardsize } = this.state

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
                <Sets navs={nav} onNavChange={onNavChange} />
                <h1 className='fw8'>Robo Friends</h1>
                <SearchBox

                    searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList
                            robots={filterdRobots}
                            cardsize={cardsize} 
                            setName = {setName}
                            />
                    </ErrorBoundry>
                </Scroll>

            </div>


        );
}

export default App;