import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      articles:[],
     favourite:0
      
    }
  }
  ///action creater
  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b7fb42012d54ae2949b0ca17b967a87')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
   this.setState({
     articles: data.articles
   })
  });
  }
  
favourite=()=>{
  this.setState({
    ...this.state,
    favourite:++this.state.favourite
  })
}
unfavourite=()=>{
  this.setState({
    ...this.state,
    unfavourite:--this.state.favourite
  })
}

  render(){
    console.log(this.state);
  return (
    <div className="App">
       {this.state.articles.map((item, index)=>{
         return(
       <h2 style={{textAlign:'center'}}>
         {item.title}
         <img src={item.urlToImage} style={{width:'50vw'}}/>
         <p>
          
           {item.content}
         </p>
         <a href={item.url} >
read more
         </a>
         

         <button  onClick={this.favourite}>
           favourite
         </button>
         <button  onClick={this.unfavourite}>
           not favourite
         </button>
       </h2>
       
       
         )
  })}
  
    </div>
  );
}
}

export default App;
