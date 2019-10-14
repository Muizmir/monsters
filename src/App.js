import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handlechange = this.handlechange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handlechange= (e) => {
    this.setState({ searchField: e.target.value })
  }
  render(){
    const monsters= this.state.monsters
    const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
     )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'search monsters'
          handlechange = {this.handlechange} />

        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;