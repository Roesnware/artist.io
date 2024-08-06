// import stylesheet
import './App.css';

// import router 
import { Outlet } from 'react-router-dom';
import NeonBackground from './components/Background/Background.jsx';

// app component
function App() {
  return (
      <div className='page'>
        <div>
          <Outlet />
        </div>
      </div>
  )
}

// export app
export default App;