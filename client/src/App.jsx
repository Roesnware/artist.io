// import stylesheet
import './App.css';

// import router 
import { Outlet } from 'react-router-dom';

// app component
function App() {
  return (
      <div className='page background'>
        <div>
          <Outlet />
        </div>
      </div>
  )
}

// export app
export default App;