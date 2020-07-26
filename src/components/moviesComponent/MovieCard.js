import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody} from 'reactstrap';

const MovieCard = (props) => {
    return(
        <CardGroup>
            <div className="col-md-4">
                <Card>
                    <CardImg top width="100%" src={props.moviePoster} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.movieTitle}</CardTitle>
                        <CardSubtitle>{props.movieYear}</CardSubtitle>
                        <CardText>{props.movieType}</CardText>
                    </CardBody>
                </Card>
            </div>
      </CardGroup>
    )
}

export default MovieCard;