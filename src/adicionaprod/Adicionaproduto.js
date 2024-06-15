import React from 'react'
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Produtoservice from '../services/Produtoservice';
import axiosInstance from '../shared/utils/axiosInstance';


export default function Adicionaproduto() {
    const navigate = useNavigate();
    const submeter = async (e)=> {
      e.preventDefault()
      await Produtoservice.postaProduto(form)
      //navigate("/home")
    }
    const [form, setform] = React.useState({
      id:"",nome:"",preco:"",imagem:""
    })
    const preencheForm =  async (e) =>{
      const {name,value} = e.target
    setform({...form,[name]:value})
    }
    return (
    <div>Adicionaproduto
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Id</Form.Label>
        <Form.Control onChange={preencheForm} name="id" value={form.id} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control  onChange={preencheForm}  name="nome" value={form.nome} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Preço</Form.Label>
        <Form.Control  onChange={preencheForm} name="preco" value={form.preco}type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Img</Form.Label>
        <Form.Control  onChange={preencheForm} name="imagem" value={form.img}type="text" />
      </Form.Group>
      <Button onClick={submeter} variant="primary">Concluir</Button>
       </Form>
</div>

  )
}
