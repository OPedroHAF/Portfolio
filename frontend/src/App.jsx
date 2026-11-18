import React, {useState} from 'react';
import './App.css';

import perfilImg from './assets/perfil.jpg'

function App(){
  const [isOpenedSection, setIsOpenedSection] = useState({
    about: false,
    projects: false
  });

  const openNext = (section) =>{
    setIsOpenedSection((prev) => ({...prev, [section]: true}));
  }

  return(
    
    <div className="portfolio-container">
      
      <div className={`osu-overlay ${isOpenedSection.about ? 'fade-out' : ''}`}>
        <div className="osu-circle" onClick={() => openNext('about')}>
          <span>Click</span>
        </div>
      </div>

      <div className="content-section">
        <div className="about-wrapper">

          <div className="about-left">
            <div className="photo-box">
              <img className="profile-photo" src={perfilImg} alt="Foto de Pedro" />
            </div>
            <div className="stats-grid">
              <div className="stat-card pink">
                <span>Charisma</span>
                <strong>12</strong>
              </div>
              <div className="stat-card blue">
                <span>Wisdom</span>
                <strong>10</strong>
              </div>
              <div className="stat-card red">
                <span>Strength</span>
                <strong>8</strong>
              </div>
              <div className="stat-card purple">
                <span>Intelligence</span>
                <strong>11</strong>
              </div>
              <div className="stat-card gray">
                <span>Dexterity</span>
                <strong>12</strong>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h2>Pedro Henrique Alves Ferreira</h2>
            <div className="badges-row">
              <div className="badge">Lvl. 22</div>
              <div className="badge">Gen. M</div>
              <div className="badge">Software Engineer</div>
            </div>
            <div className="quote-box">
              <p>"One of my favorite hobbies is to get deeply immersed in games!"</p>
            </div>
            <div className="games-row">
              <div className="game-art">Obra Dinn</div>
              <div className="game-art">Half-Life</div>
              <div className="game-art">Valorant</div>
            </div>
          </div>
        </div>
      </div>

      {isOpenedSection.about && !isOpenedSection.projects && (
        <div className="osu-overlay" style={{ position: 'relative' }}>
          <div className="osu-circle" onClick={() => openNext('projects')}>
            <span>Click</span>
          </div>
        </div>
      )}

      {isOpenedSection.projects && (
        <div className="content-section fade-in">
          <h2>Projetos</h2>
          <p>texto só pra eu n esquecer de colocar coisa depois</p>
        </div>
      )}

    </div>  
  )
}
export default App;