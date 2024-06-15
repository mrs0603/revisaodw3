import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const
  return (
    <div>Home
    <Container>
<Button onClick={()=>navigate("/adicionaprod")}>Criar produto</Button>
<Row>
<Card>
<Card.Img variant="top" src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/78fe3f5d3bdc4b1f4d6fb7f4558e0aee.jpg" />
      <Card.Body>
        <Card.Title>Jabuticaba</Card.Title>
        <Card.Text>
          Preço: R$25,31
        </Card.Text>
        <Button variant="primary">Editar Produto </Button>
        <Button variant="danger">Excluir Produto </Button>
      </Card.Body>
    
</Card>

<Card>
<Card.Img variant="top" src="https://longevidadesaudavel.com.br/wp-content/uploads/2023/08/12.png" />
      <Card.Body>
        <Card.Title>Uva</Card.Title>
        <Card.Text>
          Preço: R$25,31
        </Card.Text>
        <Button variant="primary">Editar Produto </Button>
        <Button variant="danger">Excluir Produto </Button>
      </Card.Body>
    
</Card>
</Row>
    </Container>

    </div>
  )
}



Home.propTypes = {}

export default Home
