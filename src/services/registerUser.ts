fetch("https://api.chucknorris.io/jokes/random")
.then(function(response){
  return response.json();
})
.then(function(myJson){
  console.log(JSON.stringify(myJson))
})


export const registerUser = (name, surname, email) => {
    return new Promise((resolve) => {
        resolve(name.value);
        resolve(surname);
        resolve(email);
    });
}
