import React,{useState} from 'react'

export const Main = () => {

    const [characters, setCharacters] = useState([
        {name: 'Rick Sanchez',
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        species: "Human"}
    ])
    console.log(characters);

    const captureCharacters = () =>{
        const nombre = document.getElementById('nombre')
        console.log(nombre.value);
        const url = 'https://rickandmortyapi.com/api/character/?name='+nombre.value
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results));
        
    }

    const validateEvent = (e) =>{
        if (e.charCode === 13){
            captureCharacters()
        }
    }

  return (
    <div>
        <div className="Search">
        <input type="text" id='nombre' onKeyPress={validateEvent} placeholder="Buscar Nombre" />
        </div>
        <div className='cards'>
        {characters.map((index,key) =>{
            return(
                <div key={key} className='card'>
                    <img src={index.image} alt="" className='imgCard' />
                    <div className='infoCard'>
                    <p>{index.name}</p>
                    <p>{index.species}</p>
                    </div>
                </div>
            )
        })}
        </div>
        
    </div>
  )
}
