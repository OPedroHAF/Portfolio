import React, { useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';

import perfilImg from './assets/perfil.jpg';
import obraDinnImg from './assets/obra_dinn.jpg'
import halfLifeImg from './assets/Half-Life_2.jpg'
import valorantImg from './assets/valorant.jpg'
import linkedinIcon from './assets/linkedin_icon.png'
import githubIcon from './assets/github_icon.png'
import whatsappIcon from './assets/whatsapp_icon.png'
import { getProjectBySlug, projects } from './projects';

function ProjectDetails() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <main className="content-section project-details-section fade-in">
        <h1>Project not found</h1>
        <button className="project-back-link" type="button" onClick={() => navigate('/')}>
          Back to portfolio
        </button>
      </main>
    );
  }

  return (
    <main className="content-section project-details-section fade-in">
      <button className="project-back-link" type="button" onClick={() => navigate('/')}>
        &lt; Back
      </button>

      <div className="projects-title">
        <h2>{project.title}</h2>
      </div>

      {project.youtubeVideoId && (
        <div className="project-details-media">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeVideoId}`}
            title={project.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}

      <p className="project-details-description">{project.description}</p>

      {project.repositoryUrl && (
        <a className="github-project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
          View project on GitHub
        </a>
      )}
    </main>
  );
}

function Portfolio() {
  const [isOpenedSection, setIsOpenedSection] = useState({
    about: false,
    projects: false,
    experience: false,
    contact: false
  });
  const navigate = useNavigate();
  const youtubeVideoId = projects[0].youtubeVideoId;
  const whatsappUrl = "https://wa.me/5531991577033?text="
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
                <div className="project-details">
                  <p className="project-caption">How to NOT play Valorant with your friends</p>
                  <button type="button" onClick={() => navigate(`/projects/${projects[0].slug}`)} className="project-details-btn">Details</button>
                </div>
              </article>

              <article className="project-card">
                <div className="project-media">
                  <div className="project-placeholder project-wip" role="img" aria-label="Cuida+ web application in progress">
                    <span className="project-wip-icon" aria-hidden="true">⚙</span>
                    <span>WORK IN PROGRESS</span>
                  </div>
                </div>
                <div className="project-details">
                  <p className="project-caption">Cuida+</p>
                  {projects[1].status && <span>{projects[1].status}</span>}
                  <button type="button" onClick={() => navigate(`/projects/${projects[1].slug}`)} className="project-details-btn">Details</button>
                </div>
              </article>
            </div>
            <button
              className="see-more"
              type="button"
              onClick={() => navigate(`/projects/${projects[0].slug}`)}
            >
              See more
            </button>
          </div>
        )
      }

      {isOpenedSection.projects && !isOpenedSection.experience && (
        <div className="osu-overlay section-transition">
          <button
            className="osu-circle"
            type="button"
            aria-label="Revelar secao experiências"
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, experience: true }))}
          >
            <span>Click</span>
          </button>
        </div>
      )}
      
      {isOpenedSection.experience && (
        <div className="content-section experience-section fade-in">
          <h2 className="experience-title">Experience</h2>

          <div className="experience-content">
            <p className="experience-role">
              <strong>Software Engineering Project Contributor</strong>
              <em> (Belo Horizonte, MG)</em>
            </p>
            <ul className="experience-list">
              <li>
                Collaborated with cross-functional student teams on interdisciplinary
                university projects, following structured requirements engineering,
                UML modeling, and user-centric design principles.
              </li>
              <li>
                Implemented core software features, managed GitHub repositories for
                asset and code sharing, and delivered working deployments under
                project deadlines.
              </li>
            </ul>
          </div>

          <button className="see-more" type="button">
            See more
          </button>
        </div>
      )}

      {isOpenedSection.experience && !isOpenedSection.contact && (
        <div className="osu-overlay section-transition">
          <button
            className="osu-circle"
            type="button"
            aria-label="Revelar secao Contato"
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, contact: true }))}
          >
            <span>Click</span>
          </button>
        </div>
      )}

      {isOpenedSection.contact && (
        <div className="content-section contact-section fade-in">
          <h2 className="contact-title">Contact</h2>

          <div className="contact-wrapper">
            <div className="contact-links">
              <p className="contact-intro">
                Let's talk!<br />
                You can reach me<br />
                through these links:
              </p>

              <div className="contact-socials" aria-label="Social media links">
                <a href="https://www.linkedin.com/in/pedro-henrique-alves-ferreira-67b56626a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://github.com/OPedroHAF" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <img src={githubIcon} alt="Github icon" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <img src={whatsappIcon} alt="Whatsapp icon" />
                </a>
              </div>
            </div>

            <form className="contact-form" action="https://formsubmit.co/evandroferreira191@gmail.com" method="POST">
              <label>
                <span>Name</span>
                <input type="text" name="name" required/>
              </label>

              <label>
                <span>Email</span>
                <input type="email" name="email" required/>
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" rows="4" required/>
              </label>

              <input type="hidden" name="_subject" value="New message"/>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}

      {isOpenedSection.contact && (
        <footer className="portfolio-footer fade-in">
          <p>
            Designed &amp; built by Pedro Henrique
            <span aria-hidden="true"> • </span>
            Belo Horizonte, MG
            <span aria-hidden="true"> • </span>
            © 2026
          </p>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;