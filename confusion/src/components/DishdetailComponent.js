import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);
  }

  renderComments(comments){
    if(comments.length == 0){
      return (
        <div></div>
      );
    }

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comments[0].author}, {new Date(comments[0].date).toDateString()}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }

  renderDish(dish){
    return ( 
      <Card>
        <CardImg src={dish.image} alt={dish.alt} />

        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } 

  render(){
    if(this.props.dish){
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
  
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    }else {
      return (
        <div></div>
      );
    }
    
  }
}

export default DishDetail;