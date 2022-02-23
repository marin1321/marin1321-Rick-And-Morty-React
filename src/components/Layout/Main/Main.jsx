import React,{useState} from 'react'

export const Main = () => {

    let character = []

    const sendCharacters = (data) => {
        console.log(data)
        character=data
        console.log(character);
    }

    const captureCharacters = () =>{
        const nombre = document.getElementById('nombre')
        const url = 'https://rickandmortyapi.com/api/character/?name='+nombre.value
        fetch(url)
        .then(response => response.json())
        .then(data => sendCharacters(data.results));
    }

    const validateEvent = (e) =>{
        if (e.charCode === 13){
            captureCharacters()
        }
    }

  return (
    <div>
        <input type="text" id='nombre' onKeyPress={validateEvent} />
        {character.map((a)=>(
            console.log(a)
        ))}
        
        
    </div>
  )
}
