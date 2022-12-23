import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContentHome from './components/MainContent';
import Header from './components/Header';
import ProjectsContent from './components/ProjectsContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={ <ContentHome /> } />
          <Route exact path="/projects" element={ <ProjectsContent /> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
