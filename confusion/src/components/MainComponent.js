import React, {Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponents';
import Footer from './FooterComponent';
import Header from './HeaderComponent'
import {DISHES} from '../shared/dishes'
import Home from './HomeComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  componentDidUpdate(){
    console.log("main component componentDidUpdate");
  }

  componentDidMount(){
    console.log("Main componentDidMount");
  }

  
  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Redirect path="/home" />
        </Switch>
      <Footer/>
      </div>
    );
  }
}

export default Main;
