import axiosInstance from "../shared/utils/axiosInstance"

  const getProdutos = async ()=> {
  const response = await axiosInstance.get("/produtos")
  return response.data
}
const postaProduto = async ( produto ) => {
    const response = await axiosInstance.post("/produtos",produto)
    return response.data
}

 const getProduto = async (id)=> {
  const response = await axiosInstance.get("/produtos",id)
  return response.data.id
}

const atualizaProdutos = async (produto,id)=> {
  const response = await axiosInstance.put("/produtos",produto,id)
  return response.data.id
}

export default {
    getProdutos,
    postaProduto,
    getProduto,
    atualizaProdutos
}
