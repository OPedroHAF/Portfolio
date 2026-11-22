import React, { useEffect, useState } from 'react';
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

const translations = {
  en: {
    switchLanguage: 'Mudar idioma para português',
    revealAbout: 'Reveal About section',
    revealProjects: 'Reveal Projects section',
    revealExperience: 'Reveal Experience section',
    revealContact: 'Reveal Contact section',
    click: 'Click',
    projectNotFound: 'Project not found',
    backToPortfolio: 'Back to portfolio',
    back: '< Back',
    viewProjectOnGithub: 'View project on GitHub',
    aboutPhoto: 'Photo of Pedro',
    level: 'Lvl. 22',
    gender: 'Gen. M',
    obraDinnCover: 'Cover of Return of the Obra Dinn',
    halfLifeCover: 'Cover of Half-Life 2',
    valorantCover: 'Cover of Valorant',
    softwareEngineer: 'Software Engineer',
    favoriteHobby: '"One of my favorite hobbies is to get deeply immersed in games!"',
    projects: 'Projects',
    videoTitle: 'How to NOT play Valorant with your friends',
    youtubeVideo: 'YouTube video',
    cuidaPlusAlt: 'Cuida+ web application in progress',
    workInProgress: 'WORK IN PROGRESS',
    details: 'Details',
    seeMore: 'See more',
    experience: 'Experience',
    experienceRole: 'Software Engineering Project Contributor',
    experienceDescription: [
      'Collaborated with cross-functional student teams on interdisciplinary university projects, following structured requirements engineering, UML modeling, and user-centric design principles.',
      'Implemented core software features, managed GitHub repositories for asset and code sharing, and delivered working deployments under project deadlines.'
    ],
    contact: 'Contact',
    contactIntro: <>Let's talk!<br />You can reach me<br />through these links:</>,
    socialLinks: 'Social media links',
    linkedinIcon: 'LinkedIn icon',
    githubIcon: 'GitHub icon',
    whatsappIcon: 'WhatsApp icon',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    newMessage: 'New message',
    footer: <>Designed &amp; built by Pedro Henrique<span aria-hidden="true"> • </span>Belo Horizonte, MG<span aria-hidden="true"> • </span>© 2026</>
  },
  pt: {
    switchLanguage: 'Switch language to English',
    revealAbout: 'Revelar seção Sobre mim',
    revealProjects: 'Revelar seção Projetos',
    revealExperience: 'Revelar seção Experiência',
    revealContact: 'Revelar seção Contato',
    click: 'Clique',
    projectNotFound: 'Projeto não encontrado',
    backToPortfolio: 'Voltar ao portfólio',
    back: '< Voltar',
    viewProjectOnGithub: 'Ver projeto no GitHub',
    aboutPhoto: 'Foto de Pedro',
    level: 'Nível 22',
    gender: 'Gênero M',
    obraDinnCover: 'Capa de Return of the Obra Dinn',
    halfLifeCover: 'Capa de Half-Life 2',
    valorantCover: 'Capa de Valorant',
    softwareEngineer: 'Engenheiro de Software',
    favoriteHobby: '"Um dos meus hobbies favoritos é mergulhar de cabeça nos jogos!"',
    projects: 'Projetos',
    videoTitle: 'Como NÃO jogar Valorant com seus amigos',
    youtubeVideo: 'Vídeo do YouTube',
    cuidaPlusAlt: 'Aplicação web Cuida+ em desenvolvimento',
    workInProgress: 'EM DESENVOLVIMENTO',
    details: 'Detalhes',
    seeMore: 'Saiba mais',
    experience: 'Experiência',
    experienceRole: 'Colaborador em projetos de Engenharia de Software',
    experienceDescription: [
      'Colaborei com equipes estudantis multidisciplinares em projetos universitários, aplicando engenharia de requisitos, modelagem UML e princípios de design centrado no usuário.',
      'Implementei funcionalidades, gerenciei repositórios GitHub para compartilhamento de código e recursos, e publiquei versões funcionais dentro dos prazos dos projetos.'
    ],
    contact: 'Contato',
    contactIntro: <>Vamos conversar!<br />Você pode falar comigo<br />por estes canais:</>,
    socialLinks: 'Links para redes sociais',
    linkedinIcon: 'Ícone do LinkedIn',
    githubIcon: 'Ícone do GitHub',
    whatsappIcon: 'Ícone do WhatsApp',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    send: 'Enviar',
    newMessage: 'Nova mensagem',
    footer: <>Desenvolvido por Pedro Henrique<span aria-hidden="true"> • </span>Belo Horizonte, MG<span aria-hidden="true"> • </span>© 2026</>
  }
};

function ProjectDetails({ language, copy }) {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(projectSlug);
  const projectCopy = project?.translations?.[language];

  if (!project) {
    return (
      <main className="content-section project-details-section fade-in">
        <h1>{copy.projectNotFound}</h1>
        <button className="project-back-link" type="button" onClick={() => navigate('/')}>
          {copy.backToPortfolio}
        </button>
      </main>
    );
  }

  return (
    <main className="content-section project-details-section fade-in">
      <button className="project-back-link" type="button" onClick={() => navigate('/')}>
        {copy.back}
      </button>

      <div className="projects-title">
        <h2>{projectCopy?.title ?? project.title}</h2>
      </div>

      {project.youtubeVideoId && (
        <div className="project-details-media">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeVideoId}`}
            title={projectCopy?.title ?? project.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}

      <p className="project-details-description">{projectCopy?.description ?? project.description}</p>

      {project.repositoryUrl && (
        <a className="github-project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
          {copy.viewProjectOnGithub}
        </a>
      )}
    </main>
  );
}

function Portfolio({ language, copy }) {
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
          aria-label={copy.revealAbout}
          onClick={() => setIsOpenedSection((previous) => ({ ...previous, about: true }))}
        >
          <span>{copy.click}</span>
        </button>
      </div>

      <div className="content-section">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="photo-box">
              <img className="profile-photo" src={perfilImg} alt={copy.aboutPhoto} />
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
              <div className="badge">{copy.level}</div>
              <div className="badge">{copy.gender}</div>
              <div className="badge">{copy.softwareEngineer}</div>
            </div>

            <div className="quote-box">
              <p>{copy.favoriteHobby}</p>
            </div>

            <div className="games-row">
              <div className="game-art obra-dinn" role="img" aria-label={copy.obraDinnCover}>
                <img src={obraDinnImg} alt="" />
              </div>
              <div className="game-art half-life" role="img" aria-label={copy.halfLifeCover}>
                <img src={halfLifeImg} alt="" />
              </div>
              <div className="game-art valorant" role="img" aria-label={copy.valorantCover}>
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
            aria-label={copy.revealProjects}
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, projects: true }))}
          >
            <span>{copy.click}</span>
          </button>
        </div>
      )}

      {isOpenedSection.projects && (
          <div className="content-section projects-section fade-in">
            <div className="projects-title">
              <h2>{copy.projects}</h2>
            </div>
            <div className="projects-wrapper">
              <article className="project-card">
                <div className="project-media">
                  {youtubeVideoId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                      title={copy.videoTitle}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="project-placeholder">{copy.youtubeVideo}</div>
                  )}
                </div>
                <div className="project-details">
                  <p className="project-caption">{projects[0].translations?.[language]?.title ?? projects[0].title}</p>
                  <button type="button" onClick={() => navigate(`/projects/${projects[0].slug}`)} className="project-details-btn">{copy.details}</button>
                </div>
              </article>

              <article className="project-card">
                <div className="project-media">
                  <div className="project-placeholder project-wip" role="img" aria-label={copy.cuidaPlusAlt}>
                    <span className="project-wip-icon" aria-hidden="true">⚙</span>
                    <span>{copy.workInProgress}</span>
                  </div>
                </div>
                <div className="project-details">
                  <p className="project-caption">{projects[1].translations?.[language]?.title ?? projects[1].title}</p>
                  {projects[1].status && <span>{projects[1].translations?.[language]?.status ?? projects[1].status}</span>}
                  <button type="button" onClick={() => navigate(`/projects/${projects[1].slug}`)} className="project-details-btn">{copy.details}</button>
                </div>
              </article>
            </div>
            <button
              className="see-more"
              type="button"
              onClick={() => navigate(`/projects/${projects[0].slug}`)}
            >
              {copy.seeMore}
            </button>
          </div>
        )
      }

      {isOpenedSection.projects && !isOpenedSection.experience && (
        <div className="osu-overlay section-transition">
          <button
            className="osu-circle"
            type="button"
            aria-label={copy.revealExperience}
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, experience: true }))}
          >
            <span>{copy.click}</span>
          </button>
        </div>
      )}
      
      {isOpenedSection.experience && (
        <div className="content-section experience-section fade-in">
          <h2 className="experience-title">{copy.experience}</h2>

          <div className="experience-content">
            <p className="experience-role">
              <strong>{copy.experienceRole}</strong>
              <em> (Belo Horizonte, MG)</em>
            </p>
            <ul className="experience-list">
              {copy.experienceDescription.map((description) => <li key={description}>{description}</li>)}
            </ul>
          </div>

          <button className="see-more" type="button">
            {copy.seeMore}
          </button>
        </div>
      )}

      {isOpenedSection.experience && !isOpenedSection.contact && (
        <div className="osu-overlay section-transition">
          <button
            className="osu-circle"
            type="button"
            aria-label={copy.revealContact}
            onClick={() => setIsOpenedSection((previous) => ({ ...previous, contact: true }))}
          >
            <span>{copy.click}</span>
          </button>
        </div>
      )}

      {isOpenedSection.contact && (
        <div className="content-section contact-section fade-in">
          <h2 className="contact-title">{copy.contact}</h2>

          <div className="contact-wrapper">
            <div className="contact-links">
              <p className="contact-intro">{copy.contactIntro}</p>

              <div className="contact-socials" aria-label={copy.socialLinks}>
                <a href="https://www.linkedin.com/in/pedro-henrique-alves-ferreira-67b56626a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt={copy.linkedinIcon} />
                </a>
                <a href="https://github.com/OPedroHAF" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <img src={githubIcon} alt={copy.githubIcon} />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <img src={whatsappIcon} alt={copy.whatsappIcon} />
                </a>
              </div>
            </div>

            <form className="contact-form" action="https://formsubmit.co/evandroferreira191@gmail.com" method="POST">
              <label>
                <span>{copy.name}</span>
                <input type="text" name="name" required />
              </label>

              <label>
                <span>{copy.email}</span>
                <input type="email" name="email" required />
              </label>

              <label>
                <span>{copy.message}</span>
                <textarea name="message" rows="4" required />
              </label>

              <input type="hidden" name="_subject" value={copy.newMessage} />
              <button type="submit">{copy.send}</button>
            </form>
          </div>
        </div>
      )}

      {isOpenedSection.contact && (
        <footer className="portfolio-footer fade-in">
          <p>
            {copy.footer}
          </p>
        </footer>
      )}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(() => (
    localStorage.getItem('portfolio-language') === 'pt' ? 'pt' : 'en'
  ));
  const copy = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'pt' : 'en';
    localStorage.setItem('portfolio-language', nextLanguage);
    setLanguage(nextLanguage);
  };

  return (
    <>
      <button
        className="language-toggle"
        type="button"
        aria-label={copy.switchLanguage}
        onClick={toggleLanguage}
      >
        {language === 'en' ? 'EN' : 'PT'}
      </button>
      <Routes>
        <Route path="/" element={<Portfolio language={language} copy={copy} />} />
        <Route path="/projects/:projectSlug" element={<ProjectDetails language={language} copy={copy} />} />
      </Routes>
    </>
  );
}

export default App;