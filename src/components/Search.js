import React, { Component } from 'react';
import SearchBar from "../containers/SearchBar";
import ImageList from "../containers/ImageList";
import './App.css'

class Search extends Component {
  
  render() {
    return (
<div className="container">

<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<a className="navbar-brand" href="/">Media Library</a>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
    <a className="nav-item nav-link" target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/pravallika-c/">LinkedIn</a>
    <a className="nav-item nav-link" target="_blank" rel='noopener noreferrer' href="https://github.com/pravallikac">MyGithub</a>
    <a className="nav-item nav-link" target="_blank" rel='noopener noreferrer' href="http://www2.cs.siu.edu/~pchandolu/">Myblog</a>
  </div>
</div>
</nav><br/><br/>
{/* <div className='User'>
                <div className='Aside-full'>
                    <header>
                        <h1>Media Library</h1>    
                    </header>
                    <SearchBar />
                   </div>

                <div className="right">
                <ImageList/>
                </div>
            </div> */}
                <div className='User'>
                <div className="Aside-full">
                    <div className="card-block">
                        <h4 className="card-title">Media Library</h4>
                        <div className="search">
                            <SearchBar />
                        </div>
                   </div>                       
                    
                 </div> 
                 
            <div className="right">
                <ImageList/>
                </div> 
            </div>                        
                    
            
            </div>
        
    );
  }
}

export default Search;



