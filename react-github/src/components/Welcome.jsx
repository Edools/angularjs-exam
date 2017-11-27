import React from 'react';
import { browserHistory as history } from 'react-router';
import '.././index.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/


const Welcome = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <h1 className="display-3 space-top">Hey you...</h1>
          <p className="lead">Search someones username in Github</p>
          <hr className="my-2" />
          <p>Just type an username and discover the number of followers, following, repositories and other informations..</p>
          <Button href= "/search" color="primary">Start now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
