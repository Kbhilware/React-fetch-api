import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { Routes, Route } from "react-router-dom";
// import './env_local'
export default class App extends Component {
  pageCount = 8;
  apiKey = '86af0c3c3b6646fdabbd95377b7016f7';
  // apiKey = process.env.REACT_APP_NEWS_KEY;
  
  render() {
    return (
    <>
      <Routes>
          <Route path='/' element={<Navbar siteName="News"/> }>
            <Route path="/entertainment" element={<News pageCount={this.pageCount}  newsCat='entertainment' newsCountry="in" apikeynew={this.apiKey} />} />
            <Route path="/general" element={<News pageCount={this.pageCount}  newsCat='general' newsCountry="in" apikeynew={this.apiKey} />} />
            <Route path="/health" element={<News pageCount={this.pageCount}  newsCat='health' newsCountry="in" apikeynew={this.apiKey} />} />
            <Route path="/science" element={<News pageCount={this.pageCount}  newsCat='science' newsCountry="in" apikeynew={this.apiKey} />} />
            <Route path="/sports" element={<News pageCount={this.pageCount}  newsCat='sports' newsCountry="in" apikeynew={this.apiKey} />} />
            <Route path="/technology" element={<News pageCount={this.pageCount}  newsCat='technology' newsCountry="in" apikeynew={this.apiKey}/>} />
          </Route>
          </Routes>
      </>
    )
  }
}
