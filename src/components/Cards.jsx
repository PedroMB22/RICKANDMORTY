import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map((character) => {
         return <Card
            id = {character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender= {character.gender}
            origin={character.origin}
            image={character.image}
            onClose={() => props.onClose(character.id)}
         />
      })}
            
   </div>;
}
