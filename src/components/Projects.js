import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import windy from "../assets/img/windy.png";
import payementJee from "../assets/img/jee-payment.png";
import laravel from "../assets/img/laravel.png";
import dotnet from "../assets/img/net.png";
import php from "../assets/img/php.png";
import javasw from "../assets/img/swing.png";
import android from "../assets/img/bookApp.png";


// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsFullStack = [
    {
      "title": "Gestion de projets Scrum",
      "description": "Extension Google Chrome pour la collaboration Jira avec vue Kanban. Intégration du chat GPT pour améliorer les descriptions techniques et autres fonctionnalités.",
      "imgUrl": windy,
      "githubLink" : "https://github.com/chantirwadie/hackathon_app"
    },
    {
      "title": "Site Web de paiement JEE",
      "description": "Plateforme de gestion des paiements synchronisée avec l'utilisation des threads.",
      "imgUrl": payementJee,
      "githubLink" : "https://github.com/yassinemidi/JEE-Payment-App"
    },
    {
      "title": "Site Web E-commerce",
      "description": "Annonces de vente en ligne avec Laravel et Vue.js.",
      "imgUrl": laravel,
      "githubLink" : "https://github.com/yassinemidi/Sales-Website-with-Laravel-VueJS"
    },
    {
      "title": "Gestion des employés",
      "description": "Application .Net pour la gestion des employés.",
      "imgUrl": dotnet,
      "githubLink" : "https://github.com/MahmoudLiTo/GestionEmploye"
    },
    {
      "title": "Partage de photos",
      "description": "Plateforme sociale pour le partage de photos.",
      "imgUrl": php,
      "githubLink" : "https://github.com/yassinemidi/picturesappweb"
    },
    {
      "title": "Gestion scolaire",
      "description": "Application .Net pour la gestion des étudiants (absences, notes, etc.).",
      "imgUrl": dotnet,
      "githubLink" : "https://github.com/yassinemidi/Gestion-de-Scolarit---.NET-WF-SQLSERVER-"
    },
    {
      "title": "Application de dessin Paint",
      "description": "Application Java Swing pour le dessin.",
      "imgUrl": javasw,
      "githubLink" : "https://github.com/yassinemidi/Mini-Paint-with-JAVA-Swing"
    },
    {
      "title": "Application Android de livres",
      "description": "Application Android pour la lecture de livres à partir d'une API.",
      "imgUrl": android,
      "githubLink" : "https://github.com/yassinemidi/Android-App-Book-Library"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Salesforce</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FullStack Projects</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <p>Soonly accessible...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsFullStack.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
