import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
  constructor(props){
    super(props);
  }

  renderComments(comments){
    if(!comments){
      return (
        <div></div>
      );
    }

    return (
      <div>
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

  render(){
    if(!this.props.dish){
      return (
        <div></div>
      );
    }

    return (
      <div className="container">  
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
                <h4>Comments</h4>
                <CardText>{this.renderComments(this.props.dish.comments)}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>  
    );
  }
}

export default DishDetail;