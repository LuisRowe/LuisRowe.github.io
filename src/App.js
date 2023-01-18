import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import ContentHome from './components/MainContent';
import Header from './components/Header';
import ProjectsContent from './components/ProjectsContent';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    console.log(theme);
  };

  return (
    <div className={ `${theme} App` }>
      <Header changeTheme={ changeTheme } />
      <div className="content">
        <Routes>
          <Route exact path="/" element={ <ContentHome /> } />
          <Route exact path="/projects" element={ <ProjectsContent /> } />
          <Route exact path="/projects/wallet" element={ <ContentHome /> } />
          <Route exact path="/projects/wallet" element={ <ProjectsContent /> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
