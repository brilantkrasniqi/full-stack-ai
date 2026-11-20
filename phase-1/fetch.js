const pokemons = ['pikachu', 'ditto', 'charmander','goku']
async function runParallel(names) {
  const start = Date.now();
  const pokemmonNames = names.map(name=> pokemonTrainer(name))
  const settledPromise = await Promise.allSettled(pokemmonNames)
  const pokiNames = settledPromise.flatMap((promise)=>{
    if (promise.status === 'rejected') {
      console.error(promise.reason.message)
      return []
    }
    return promise.value
  })
  console.log(Date.now() - start)
  console.log(pokiNames)
  return pokiNames
}
runParallel(pokemons) 
async function pokemonTrainer(name) {
  // try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if(!response.ok) {
      throw new Error(`Bad response: ${response.status}`,)
    }
    const data = await response.json()
    return data.name
  // } catch(err){
  //   console.log(err.message)
  // }
}

async function runSequiential() {
  const start = Date.now();
  for (const pokemon of pokemons) {
    await pokemonTrainer(pokemon)
  }
  const elapsed = Date.now() - start;
  console.log(elapsed);
}
// runSequiential()