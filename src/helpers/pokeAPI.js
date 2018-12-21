import axios from 'axios';

export const fetchRandomPokemon = async () => {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
  const randomSeed = Math.floor(Math.random() * 500);

  try {
    const response = await axios.get(`${endpoint}${randomSeed}/`);

    return response.data.name;
  } catch (error) {
    alert(error);
  }
};
