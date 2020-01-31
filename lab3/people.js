//Author: Anthony Ciccone
//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const axios = require("axios");
const getPeople = async () =>{
  const { data } = await axios.get(
  "https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json"
);
  return data;
}

const getPersonById = async id => {
  if(id == undefined) throw "Parameter must not be undefined.";
  if(typeof id != "number") throw "Parameter must be a number";
  if(id < 1 || id > 500) throw "Parameter is out of bounds";

  const foo = await getPeople();
  return foo[id-1]["firstName"] + " " + foo[id-1]["lastName"];
}

const lexIndex = async index => {
  if(index == undefined) throw "Parameter must not be undefined";
  if(typeof index != "number") throw "Parameter must be a number";
  if(index < 1 || index > 500) throw "Parameter is out of bounds";

  let foo = await getPeople();
  foo.sort((a, b) => { a = a["lastName"].toLowerCase(); b = b["lastName"].toLowerCase();
    if(a > b) return 1
    if(a < b) return -1
    return 0
  });
  return foo[index - 1]["firstName"] + " " + foo[index - 1]["lastName"];
};

const firstNameMetrics = async () =>{
  let foo = await getPeople();
  var vowels = new Array('a','e','i','o','u','A','E','I','O','U');
  let tlett = 0,
      tvow = 0,
      tcons = 0;
  let lname = foo[0]["firstName"],
      sname = lname;
  for(let person of foo){
    let name = person["firstName"];
    for(let letter in name){
      if(vowels.includes(name.charAt(letter))){
        tvow++;
      }else{
        tcons++;
      }
      tlett++;
    }
    if(name.length > lname.length){
      lname = name;
    }
    if(name.length < sname.length){
      sname = name;
    }
  }

  return {
    totalLetters: tlett,
    totalVowels: tvow,
    totalConsonants: tcons,
    longestName: lname,
    shortestName: sname
  }
}

module.exports = {
  getPersonById,
  lexIndex,
  firstNameMetrics
};
