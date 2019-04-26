import React from 'react';
import { Button, Modal, Card, Row, Col, CardTitle } from 'react-materialize';
import './ButtonTeam.css';

const ButtonTeam = () => {
  return (
    <Modal 
      actions={
      <Button waves="yellow" modal="close" flat>Fermer</Button>
      }
      header="Meet the team" 
      trigger={<Button id='Team'
      floating
      large
      className="yellow accent-2"
      // fab={{ direction: 'left' }}
      icon="info"
      waves="light"
      style={{ left: '3%', bottom: '2%',position:'absolute' }}
    />}
    >
      <Row>
        <Col m={6} s={12}>
          <Card 
          title="Florin"
          header={< CardTitle />} actions={[<a/>]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267605/ScanEat/florin.png"
              className="responsive-img" alt="Florin Rinja" />
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card 
            title="Juliette"
            header={<CardTitle />} actions={[<a />]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267604/ScanEat/juliette.png"
            className="responsive-img" alt="Juliette Michaux" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col m={6} s={12}>
          <Card header={<CardTitle />} actions={[<a />]} >
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267609/ScanEat/rachel.png"
              alt="Rachel O.S" />
            Rachel
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card header={<CardTitle />} actions={[<a />]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267616/ScanEat/romain.jpg"
              className="responsive-img" alt="Romain Dailly" />
            Romain
          </Card>
        </Col>
      </Row>    
    </Modal>
  )
}

export default ButtonTeam; 