// console.log("Chris")

const showPokemon = () => {
    /* Access image by id and change
            the display property to block*/
    document.getElementById('image').style.display="block"
    document.getElementById('click-id').innerHTML = showPokemon();
}

const getPoke = async () => {
    // const response =  await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    const response =  await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemon = {};
    
    pokemon['name'] = response.data.species.name
    pokemon['image'] = response.data.sprites['front_default']
    type_url = response.data.types[0].type.url
    const responds_2 = await axios.get(type_url)
    pokename1 = responds_2.data.pokemon[0].pokemon.name

    // image request
    const response_img =  await axios.get("https://pokeapi.co/api/v2/pokemon/"+pokename1)
    poke_1img = response_img.data.sprites['front_default']
    console.log(poke_1img)

    // img div to html
    let img_div1 = document.createElement('img')
    img_div1.src = poke_1img


    console.log(response_img)
    let pok1 = document.createElement('h1')
    pok1.innerHTML = pokename1 

    let parentDiv1 = document.getElementById("pokeball_1")
    if (parentDiv1) {
        parentDiv1.appendChild(pok1)
        parentDiv1.appendChild(img_div1)  
      }

    // console.log(type_url)
    let newDiv1 = document.createElement('p')
    newDiv1.innerHTML = pokemon['name'] 

    let newDiv = document.createElement('img')
    newDiv.src= pokemon['image']
    // tell div where we want it to go
    let parentDiv = document.getElementById("pokeballs")
    if (parentDiv) {
        parentDiv.appendChild(newDiv) // this attaches our new div element into the DOM, by nesting it under an existing element
        parentDiv.appendChild(newDiv1)
      }
}

getPoke()
