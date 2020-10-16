import React, { Component } from 'react'
import {Navigation} from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';
import JsonData from '../data/data.json';


export class Home extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        {/* <Gallery /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default Home;
