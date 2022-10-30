import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'


function App (){

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')

    useEffect(() =>{
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => setRobots(users));
    }, []) //the scare bracket creates a condition tat makes the app run only if the condition changes


   const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!robots.length){
        return <h2>Loading...</h2>
    }else{
        return (
            <div className="tc">
                <h1 className="f1">My Robo Pals</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
                </Scroll>
            </div>       
        );
    }
}

export default App;