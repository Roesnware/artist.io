import './Card.css'

const Card = ({ title, imageUrl }) => {
  return (
    <div className='card'>
      <div className='cardContent'>
        <figure 
          id='card-image'
          style={{ backgroundImage: `url(${imageUrl})`, height: '11.2rem', backgroundSize: 'cover', width: '15rem', backgroundPosition: 'center' }} 
        />
      </div>
      <div className='cardHeader'>
        <h3 id='card-title'>{title}</h3>
      </div>
    </div>
  );
}

export default Card;