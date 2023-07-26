import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardTemplate({project}) {
  return (
    <Card>
    <Card.Img variant="top" src={project.src} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>
        {project.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href={project.github} target="_blank">GitHub Repo</Card.Link>
      <Card.Link href={project.deployed} target="_blank">Deployed App</Card.Link>
    </Card.Body>
  </Card>
  )
}
