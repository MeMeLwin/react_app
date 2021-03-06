import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {

  constructor(){
    super();
    this.state={
      projects:[]

    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title:'Business',
        category:'Web Design'
      },
      {
        title:'Social App',
        category:'Mobile Development'
      },
      {
        title:'E-commerce Shopping Website',
        category:'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    console.log(project);
  }
  render() {
    return (
      <div className="App">
      <AddProject addproject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
