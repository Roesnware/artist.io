import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header.jsx'
import './CharacterDetails.css';

const baseURL = 'https://dattebayo-api.onrender.com';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/characters/${characterId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCharacter(data);
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='characterPage'>
        <div className='character-detail-card'>
          <div className='character-header'>
            <img src={character.images[0]} alt={character.name} className='character-image' />
            <div className='character-info'>
              <h2 id='character-name'>{character.name}</h2>
            </div>
          </div>
          <div className='character-details'>
            <p><strong>Clan:</strong> {character.personal.clan || 'N/A'}</p>
            <p><strong>Village:</strong> {character.personal.affiliation[0] || 'N/A'}</p>
            <p><strong>Nature Type:</strong> {character.natureType.join(', ') || 'N/A'}</p>
            <p><strong>Jutsu:</strong> {character.jutsu.join(', ') || 'N/A'}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CharacterDetails;