import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.jsx';
import Characters from '../../components/Characters/Characters';

const Home = () => {
  return (
    <div className='flexContainer'>
      <Header />
      
      <div className='sections'>
        <Characters />
      </div>

      <Footer />
    </div>
  );
};

export default Home;