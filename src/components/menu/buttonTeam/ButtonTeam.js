import React from 'react';
import { Button, Modal, Card, Row, Col } from 'react-materialize';
import './ButtonTeam.css';

const ButtonTeam = (props) => {

  return (
    <Modal
      actions={
        <Button waves="yellow" modal="close" flat>Fermer</Button>
      }
      header="L'équipe" 
      trigger={<Button id='Team'
        floating
        large
        className="yellow accent-2"
        // fab={{ direction: 'left' }}
        icon="info"
        waves="light"
        style={{ left: '3%', bottom: '2%', position: 'absolute' }}
      />}
    >
      <Row>
        <Col m={6} s={12}>
          <Card 
          title="Florin"
          actions={[<a href="https://github.com/florinrinja" target='_blank'rel="noopener noreferrer"> Github</a>]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267605/ScanEat/florin.png"
            className="responsive-img" alt="Florin Rinja" />
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card 
            title="Juliette"
            actions={[<a href="https://github.com/juliettemichaux" target='_blank' rel="noopener noreferrer"> Github</a>]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267604/ScanEat/juliette.png"
              className="responsive-img" alt="Juliette Michaux" />
          </Card>
        </Col>
      </Row>
      <Row key={1}>
        <Col m={6} s={12}>
          <Card
            title="Rachel"
            actions={[<a href="https://github.com/rachel-os/" target='_blank'rel="noopener noreferrer"> Github</a>]} >
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556280898/ScanEat/rachel.png" className="responsive-img"
              alt="Rachel O.S" />
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card
            title="Romain"
            actions={[<a href="https://github.com/romain-dailly" target='_blank'rel="noopener noreferrer">Github</a>]}>
            <img src="https://res.cloudinary.com/grainderiz/image/upload/v1556267616/ScanEat/romain.jpg"
              className="responsive-img" alt="Romain Dailly" />
          </Card>
        </Col>
      </Row>
    </Modal>
  )
}

export default ButtonTeam; 