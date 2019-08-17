import React, {Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes'

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
    console.log("main component render");
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
          <NavbarBrand href="/">Home</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
