import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Topbar from './components/Topbar';
import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';

const App = () => (
  <Router>
    <AuthProvider>
      <PostProvider>
        <Topbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </PostProvider>
    </AuthProvider>
  </Router>
);

export default App;
