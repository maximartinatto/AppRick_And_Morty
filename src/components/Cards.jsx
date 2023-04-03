import Card from './Card';

function Cards({ characters }) {
   return (
      <div>
         {
            characters.map((character) => {
               return <Card
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  origin={character.origin.name}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => alert('Emulamos que se cierra la card')}
               />
            })
         }
      </div>
   )
}

export default Cards                                     
