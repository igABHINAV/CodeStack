import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import { AuthProvider } from './context/ConTexT';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import AddPost from './pages/AddPost';

import LoginRouting from './specialFunctions/LoginRouting';
import NavbaR from './pages/NavbaR';
import YourStuff from './pages/YourStuff';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <NavbaR/>
          <Routes>
            <Route element={<LoginRouting />}>
              <Route path='/' element={<Home />} />
              <Route path='/add' element={<AddPost />} />
              <Route path='/feed' element={<YourStuff />} />
            </Route>
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
