const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character'

require("dotenv").config(); 

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`)
    
    if(!data.name) throw new Error(`Faltan dados del personaje de ID: ${id}`)
    
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status
    }
    return res.status(STATUS_OK).json(character)
    

  }catch (error) {
      return error.message.includes('ID')
      ? res.status(STATUS_ERROR).send(error.message)
      : res.status(500).send(error.response.data.error)
  }
  
}

function getAllChar(req, res){
 try {
  axios.get(`${URL}`).then(({ data }) =>  {
    if(data){
      // *** ERROR al usar filter y no map para editar los campos y que estaba en data.results
      const characters = data.results.map((char) => {
        const character ={
          id: char.id,
          status: char.status,
          name: char.name,
          species: char.species,
          origin: char.origin?.name,
          image: char.image,
          gender: char.gender
        };
        return character;
      });
      res.status(STATUS_OK).json(characters);
    }
  })
 } catch(error){
  res.status(STATUS_ERROR).json({message: "character not found"})
 }
}

module.exports = {
    getCharById,
    getAllChar
};