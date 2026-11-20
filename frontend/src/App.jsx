import React, { useState } from 'react';
import './App.css';

import perfilImg from './assets/perfil.jpg';
import obraDinnImg from './assets/obra_dinn.jpg'
import halfLifeImg from './assets/Half-Life_2.jpg'
import valorantImg from './assets/valorant.jpg'

function App() {
  const [isOpenedSection, setIsOpenedSection] = useState({
    about: false,
    projects: false
  });
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
  const youtubeVideoId = 'https://www.youtube.com/watch?v=2bhWzCuyNWU';
  const githubRepositoryUrl = '';

  return (
    <div className="portfolio-container">
      <div className={`osu-overlay ${isOpenedSection.about ? 'fade-out' : ''}`}>
        <button
          className="osu-circle"
          type="button"
          aria-label="Revelar secao Sobre mim"
          onClick={() => setIsOpenedSection((previous) => ({ ...previous, about: true }))}
        >
          <span>Click</span>
        </button>
      </div>

      <div className="content-section">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="photo-box">
              <img className="profile-photo" src={perfilImg} alt="Foto de Pedro" />
            </div>

            <div className="stats-grid">
              <div className="stat-card pink">
                <span>CHA</span>
                <strong>12</strong>
              </div>
              <div className="stat-card blue">
                <span>WIS</span>
                <strong>10</strong>
              </div>
              <div className="stat-card red">
                <span>STR</span>
                <strong>8</strong>
              </div>
              <div className="stat-card purple">
                <span>INT</span>
                <strong>11</strong>
              </div>
              <div className="stat-card gray">
                <span>DEX</span>
                <strong>12</strong>
              </div>
              <div className="stat-card green">
                <span>CON</span>
                <strong>9</strong>
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
              <div className="game-art obra-dinn" role="img" aria-label="Capa de Return of the Obra Dinn">
                <img src={obraDinnImg} alt="" />
              </div>
              <div className="game-art half-life" role="img" aria-label="Capa de Half-Life 2">
                <img src={halfLifeImg} alt="" />
              </div>
              <div className="game-art valorant" role="img" aria-label="Capa de Valorant">
                <img src={valorantImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenedSection.about && !isOpenedSection.projects && (
        <div className="osu-overlay section-transition">
          <button
            className="osu-circle"
            type="button"
            aria-label="Revelar secao Projetos"
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, projects: true }))}
          >
            <span>Click</span>
          </button>
        </div>
      )}

      {isOpenedSection.projects && (
        isProjectDetailsOpen ? (
          <div className="content-section projects-section project-details-section fade-in">
            <button
              className="project-back-link"
              type="button"
              onClick={() => setIsProjectDetailsOpen(false)}
            >
              Back to Projects
            </button>
            <div className="projects-title">
              <h2>NOME DO PROJETO</h2>
            </div>
            <p>Project details will go here.</p>
            {githubRepositoryUrl && (
              <a
                className="github-project-link"
                href={githubRepositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                View source on GitHub
              </a>
            )}
          </div>
        ) : (
          <div className="content-section projects-section fade-in">
            <div className="projects-title">
              <h2>Projects</h2>
            </div>
            <div className="projects-wrapper">
              <article className="project-card">
                <div className="project-media">
                  {youtubeVideoId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                      title="How to NOT play Valorant with your friends"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="project-placeholder">YouTube video</div>
                  )}
                </div>
                <p className="project-caption">How to NOT play Valorant with your friends</p>
              </article>

              <button
                type="button"
                className="project-card"
                aria-label="Open details for NOME DO PROJETO"
                onClick={() => setIsProjectDetailsOpen(true)}
              >
                <span className="project-placeholder">Projeto</span>
                <span className="project-caption">NOME DO PROJETO</span>
              </button>
            </div>
            <button
              className="see-more"
              type="button"
              onClick={() => setIsProjectDetailsOpen(true)}
            >
              See more
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default App;