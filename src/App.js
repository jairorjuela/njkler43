import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida


class App extends Component {

  constructor(){
    super();
    this.state = {
      potst: posts,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({
      term: event.target.value
    })
  }

  renderPosts() {
    let termi = this.state.term
     const renderPosts = posts
     .filter(post => {
       return post.title.toLowerCase().indexOf(termi.toLowerCase()) >= 0
     })
     .map((post, index) => {
       return (
         <li key={index}>
          <a href={post.url}><img src={post.image} alt={post.title}/></a>
           <p>{post.title}</p>
         </li>
       )
     })
     return renderPosts
   }

  render() {

    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.searchHandler}/>
        </div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}


export default App
