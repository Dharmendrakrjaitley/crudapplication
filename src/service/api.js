import axios from "axios";



const API_URL='http://localhost:3002/players';
export const addPlayer=async (data)=>{
    try{
      return await axios.post(API_URL,data);
    } catch(error){
        console.log('Error while calling addPlayer api', error.message);
    }
   
}

export const getPlayers=async()=>{
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getPlayers api",error.message)
  }
}

export const getPlayer=async(data)=>{
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling getPlayer api",error.message)
  }
}

export const editPlayer= async(data,id)=>{
  try {
    return await axios.put(`${API_URL}/${id}`,data)
  } catch (error) {
    console.log("Error while calling editPlayer api",error.message)
  }
}


export const deletePlayer= async (id)=>{
  try {
    return await axios.delete(`${API_URL}/${id}`)
  } catch (error) {
    console.log("Error while calling DeletePlayer api",error.message)
  }
}