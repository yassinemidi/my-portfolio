import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FullStack Developer", "Salesforce Developer", "Vlocity Developer", "Software engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Yassine MIDI`} <br /> <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    {/* begining */}
                    <>


                      <p>Bonjour et bienvenue sur mon portfolio ! Je suis Yassine MIDI, un développeur Salesforce passionné par la création de solutions innovantes et efficaces. Titulaire d'un diplôme d'ingénieur d'État en Génie Informatique de l'ENSA Safi, je me spécialise dans le développement Salesforce avec une solide expertise dans diverses technologies et outils associés à cette plateforme.</p>

                      <h2>À propos de moi</h2>

                      <p>Je suis certifié Salesforce Administrateur, Salesforce Développeur 1 et Salesforce associé. Actuellement en cours de préparation pour la certification Omnistudio, je suis constamment en quête d'élargir mes connaissances pour rester à la pointe des dernières avancées technologiques.</p>
                      
                    </>
                    {/* end */}


                    <HashLink to='#connect'>
                      <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span> <ArrowRightCircle size={25} /></button>
                    </HashLink>

                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  )
}
