import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';
import './Characters.css';

const baseURL = 'https://dattebayo-api.onrender.com';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(baseURL + '/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.characters);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const visibleCharacters = showAll ? characters : characters.slice(0, 6);

  return (
    <div className='characters-section'>
      <div className='flexSections'>
        <div id='section-title'>Featured Anime Characters</div>
        <a href='#' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View More'}
        </a>
      </div>
      <div className='carousel'>
        {
          visibleCharacters.map(character => (
            <Link to={`/characters/${character.id}`} key={character.id}>
              <Card 
                title={character.name} 
                imageUrl={character.images[0]} 
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Characters;