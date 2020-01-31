//Author: Anthony Ciccone
//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const people = require("./people.js");
const weather = require("./weather.js");
const work = require("./work.js");

async function test() {
  //Tests for getPersonById
  try{ //Should Pass
    const pidpass = await people.getPersonById(1);
    console.log(pidpass);
  }catch(e){
    throw e;
  }
  try{ //Should Fail
    const pidfial = await people.getPersonById("1");
    console.log(pidfail);
  }catch(e){
    console.log(e);
  }

  //Tests for lexIndex
  try{ //Should Pass
    const lxppass = await people.lexIndex(1);
    console.log(lxppass);
  }catch(e){
    console.log(e);
  }
  try{ //Should Fail
    const lxpfail = await people.lexIndex("1");
    console.log(lxpfail);
  }catch(e){
    console.log(e);
  }

  //Tests for firstNameMetrics
  try{ //Does not take a parameter, therefore can not fail. This just runs the method.
    const fmtpass = await people.firstNameMetrics();
    console.log(fmtpass);
  }catch(e){
    console.log(e);
  }

  //Tests for shouldTheyGoOutside
  try{ //Should Pass
    const shouldpass = await weather.shouldTheyGoOutside("Robert", "Herley");
    console.log(shouldpass);
  }catch(e){
    console.log(e);
  }
  try{ //Should Fail
    const shouldfail = await weather.shouldTheyGoOutside("Rrobert", "Herley");
    console.log(shouldfail);
  }catch(e){
    console.log(e);
  }

  //Tests for whereDoTheyWork
  try{ //Should Pass
    const wdtwpass = await work.whereDoTheyWork("Robert", "Herley");
    console.log(wdtwpass);
  }catch(e){
    console.log(e);
  }
  try{ //Should Fail
    const wdtwfail = await work.whereDoTheyWork("Rrobert", "Herley");
    console.log(wdtwfail);
  }catch(e){
    console.log(e);
  }

  //Tests for findTheHacker
  try{ //Should Pass
    const hackerpass = await work.findTheHacker("79.222.167.180");
    console.log(hackerpass);
  }catch(e){
    console.log(e);
  }
  try{ //Should Fail
    const hackerfail = await work.findTheHacker(79222167180);
    console.log(hackerfail);
  }catch(e){
    console.log(e);
  }
}

test();
