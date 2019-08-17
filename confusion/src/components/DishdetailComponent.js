import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);
  }

  getComments(){
    return this.props.dish.comments.map((comment) => {
      return (
        <div>
          <p>{comment.comment}</p>
        <p>-- {comment.author} {comment.date}</p>
        </div>
      );
    });
  }

  render(){
    if(this.props.dish){
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg src={this.props.dish.image} alt={this.props.dish.alt} />
  
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
  
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>{this.getComments()}</CardText>
              </CardBody>
            </Card>
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