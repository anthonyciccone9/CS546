//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const form = document.getElementById("form");

const prime = function prime(num) {
  for(let i = 2; i < Math.floor(Math.sqrt(num)); i++){
    if(num%i === 0){
      return false
    }
  }
  return num > 1;
}

if(form){
    const number = document.getElementById("input");
    var result;
    form.addEventListener("submit", event => {
        event.preventDefault();
        result = parseInt(number.value);
    if(!isNaN(result)){
        if(prime(result)) {
            $("#error").hide();
            const li = `<li class = "is-prime"> ${input.value} is a prime number</li>`
            $("#attempts").append(li);
            $("#form").trigger('reset');
        }
        else{
            $("#error").hide();
            const li = `<li class = "not-prime"> ${input.value} is NOT a prime number</li>`
            $("#attempts").append(li);
            $("#form").trigger('reset');
        }
    } else{
            $("#error").show();
            $("#error").html("Give me a number plz :3");
        }
    });
}
