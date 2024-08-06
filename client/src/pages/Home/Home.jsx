import './Home.css';
import Background from '../../components/Background/Background';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div className='flexContainer'>
      <Header />
      <Background />
      <div className='sections'>
        <div>
          <div>
            <div className='flexSections'>
              <div>Featured Anime</div>
              <a>View all</a>
            </div>
            <div></div>
          </div>
          <div className='flexSections'>
            <div>Featured Manga</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
        <div>
          <div className='flexSections'>
            <div>Top Anime For You</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
        <div>
          <div className='flexSections'>
            <div>Top Manga For You</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default Home;