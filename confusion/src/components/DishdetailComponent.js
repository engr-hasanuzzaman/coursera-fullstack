import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

function RenderCommentsComponent({comments}){
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
              <p>-- {comments[0].author}, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) }</p>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

const DishDetail = ({dish}) => {
  if(!dish){
    return (
      <div></div>
    );
  }

  return (
    <div className="container">  
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg src={dish.image} alt={dish.alt} />

            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <h4>Comments</h4>
              <RenderCommentsComponent comments={dish.comments} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>  
  );
}

export default DishDetail;