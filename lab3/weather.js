//Author: Anthony Ciccone
//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const axios = require("axios");
const getPeople = async () =>{
  const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
  return data;
}
const getWeather = async () =>{
  const { data } = await axios.get(
  "https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json");
  return data;
}

const shouldTheyGoOutside = async (firstname, lastname) =>{
  if(firstname == undefined || lastname == undefined) throw "Both parameters must not be undefined";
  if(typeof firstname != "string" || typeof lastname != "string") throw "Both parameters must be strings";

  const pdata = await getPeople();
  const wdata = await getWeather();
  for(let person of pdata){
    if(person["firstName"] == firstname && person["lastName"] == lastname){
      for(let place of wdata){
        if(place["zip"] == person["zip"]){
          if(place["temp"] >= 34){
            return "Yes, " + firstname + " should go outside.";
          }else{
            return "No, " + firstname + " should not go outside";
          }
        }
      }
    }
  }
  throw "Person not found";
}

module.exports = {
  shouldTheyGoOutside
}
