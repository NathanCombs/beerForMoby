import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './header.css';

export default class Header extends React.Component{
    render(){
  return (
    <div className = "title">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Moby wants some beer.</h1>
          <p className="lead">Here's where he likes to go.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
};

