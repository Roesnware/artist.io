import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import clansData from '../../utils/clans.js';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import './CharacterDetails.css';

const baseURL = 'https://dattebayo-api.onrender.com';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [relatedCharacters, setRelatedCharacters] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch the main character's details
    fetch(`${baseURL}/characters/${characterId}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data);

        fetch('/api/generate-blog-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            characterName: data.name,
            clanName: data.personal?.clan
          }),
        })
          .then(response => response.json())
          .then(blogPost => setBlogPost(blogPost))
          .catch(error => console.error('Error fetching blog post:', error));
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [characterId]);

  // Find the clan data for the current character
  const characterClan = clansData.find(clan => clan.name === data.personal?.clan);

  if (characterClan) {
    // Fetch related characters by clan
    const fetchRelatedCharacters = characterClan.characters.map(id =>
      fetch(`${baseURL}/characters/${id}`).then(response => response.json())
    );

    // Resolve all the promises
    Promise.all(fetchRelatedCharacters)
      .then(characters => {
        // Filter out the current character and characters without an image
        const filteredCharacters = characters
          .filter(relatedCharacter =>
            relatedCharacter.id !== parseInt(characterId) &&
            relatedCharacter.images && relatedCharacter.images.length > 0
          )
          .slice(0, 10); // Limit to the first 10 characters

        setRelatedCharacters(filteredCharacters);
      })
      .catch(error => console.error('Error fetching related characters:', error));
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='characterPage'>
        <div className='character-detail-card'>
          <div className='character-header'>
            {character.images?.[0] && (
              <img src={character.images[0]} alt={character.name} className='character-image' />
            )}
            <div className='character-info'>
              <h2 id='character-name'>{character.name}</h2>
            </div>
          </div>
          <div className='character-details'>
            {character.personal?.clan && (
              <p><strong>Clan:</strong> {character.personal.clan}</p>
            )}
            {character.personal?.affiliation?.[0] && (
              <p><strong>Village:</strong> {character.personal.affiliation[0]}</p>
            )}
            {character.natureType?.length > 0 && (
              <p><strong>Nature Type:</strong> {character.natureType.join(', ')}</p>
            )}
            {character.jutsu?.length > 0 && (
              <p><strong>Jutsu:</strong> {character.jutsu.join(', ')}</p>
            )}
          </div>
        </div>

        <div className='characterSuggestions'>
          <h3>Related Characters</h3>
          <ul className='related-characters-list'>
            {relatedCharacters.map((relatedCharacter) => (
              <li className='relatedEach' key={relatedCharacter.id}>
                <Link to={`/characters/${relatedCharacter.id}`} className='related-link'>
                  <div className='relatedContainer'>
                    <p className='relatedName'>{relatedCharacter.name}</p>
                    {relatedCharacter.images?.[0] && (
                      <img className='relatedImage' src={relatedCharacter.images[0]} alt={relatedCharacter.name} />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='blog-section'>
          <h3>Related Blog Posts</h3>
          {blogPosts.length > 0 ? (
            <ul>
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <Link to={post.link}>Read more</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No blog posts found for this character or clan.</p>
          )}
        </div>
      </div>
      {blogPost && (
        <div className="ai-blog-post">
          <h3>{blogPost.title}</h3>
          <p>{blogPost.description}</p>
          <a href={blogPost.link}>Read More</a>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CharacterDetails;