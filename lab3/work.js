//Author: Anthony Ciccone
//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const axios = require("axios");
const getPeople = async () =>{
  const { data } = await axios.get(
  "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
  return data;
}
const getJobs = async () =>{
  const { data } = await axios.get(
  "https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json");
  return data;
}

const whereDoTheyWork = async (firstname, lastname) => {
  if(firstname == undefined || lastname == undefined) throw "Both parameters must not be undefined";
  if(typeof firstname != "string" || typeof lastname != "string") throw "Both parameters must be strings";

  const pdata = await getPeople();
  const jdata = await getJobs();
  for(let person of pdata){
    if(person["firstName"] == firstname && person["lastName"] == lastname){
      var ssn = person["ssn"];
      for(let job of jdata){
        if(job["ssn"] == ssn){
          if(job["willBeFired"]){
            return firstname + " " + lastname + " - " + job["jobTitle"] + " at " + job["company"] + ". They will be fired."
          }else{
            return firstname + " " + lastname + " - " + job["jobTitle"] + " at " + job["company"] + ". They will not be fired."
          }
        }
      }
    }
  }
  throw "Person not found.";
}

const findTheHacker = async ip => {
  if(ip == undefined || typeof ip != "string") throw "Parameter must exist and be an integer";

  const pdata = await getPeople();
  const jdata = await getJobs();
  for(let job of jdata){
    if(job["ip"] == ip){
      for(let person of pdata){
        if(person["ssn"] == job["ssn"]){
          return person["firstName"] + " " + person["lastName"] + " is the hacker!";
        }
      }
    }
  }
  throw "Person not found.";
}

module.exports = {
  whereDoTheyWork,
  findTheHacker
}
