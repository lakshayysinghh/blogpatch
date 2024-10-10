import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase/config';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './components/home';
import AddBlog from './components/Addblog';
import about from './components/about';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar user={user} />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<about />} />
          <Route path="/login" element={<Login />} />
          {user && <Route path="/add-blog" element={<AddBlog />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;