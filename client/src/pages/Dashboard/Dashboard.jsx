import './Dashboard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.jsx';

const Dashboard = () => {
  return (
    <div className='flexContainer'>
      <Header />
      <div className='sections'>
        <div>
          <div>
            <div className='flexSections'>
              <div>Your Likes</div>
              <a>View all</a>
            </div>
            <div></div>
          </div>
          <div className='flexSections'>
            <div>Recently Watched</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
        <div>
          <div className='flexSections'>
            <div>Recently Read</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
        <div>
          <div className='flexSections'>
            <div>Recently Searched</div>
            <a>View all</a>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Dashboard;