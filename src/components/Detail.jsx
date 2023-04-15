import React, { useEffect, useState } from 'react'; // Importa useEffect y useState en una sola línea
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return () => setCharacter({}); // Corrige el retorno de useEffect
     }, [id]);

    return (
        <div>
            {character.name && <h1>Nombre: {character.name}</h1>}
            {character.status && <p>Estado: {character.status}</p>}
            {character.species && <p>Especie: {character.species}</p>}
            {character.gender && <p>Género: {character.gender}</p>}
            {character.origin && (
                <p>Origen: {character.origin.name}</p>
            )}
            {character.image && (
                <img src={character.image} alt={character.name} />
            )}
        </div>
    )
}

export default Detail;