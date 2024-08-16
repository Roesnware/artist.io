import './Card.css'

const Card = () => {
  return (
    <>
        <a className='card' href='#'>
            <div className='cardContent'>
                <figure id='card-image'/>
            </div>
            <div className='cardHeader'>
                <h2 id='card-title'>Naruto</h2>
            </div>
        </a>
    </>
  )
}

export default Card;