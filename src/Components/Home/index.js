import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import Horoscope from './Horoscope/index.js';
import '../../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aries_icon from '../../assets/aries_icon.png';
import taurus_icon from '../../assets/taurus_icon.png';
import gemeni_icon from '../../assets/gemeni_icon.png';
import cancer_icon from '../../assets/cancer_icon.png';
import leo_icon from '../../assets/leo_icon.png';
import virgo_icon from '../../assets/virgo_icon.png';
import libra_icon from '../../assets/libra_icon.png';
import scorpio_icon from '../../assets/scorpio_icon.png';
import sagittarius_icon from '../../assets/sagittarius_icon.png';
import capricorn_icon from '../../assets/capricorn_icon.png';
import aquarius_icon from '../../assets/aquarius_icon.png';
import pisces_icon from '../../assets/pisces_icon.png';

function Home() {    
    const [currentHoroscopeData, setCurrentHoroscopeData] = useState();
    const [sign, setSign] = useState('`');
    const navigate = useNavigate();
    

    useEffect( () => {
        if (sign !='') {
            fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`, {
                "method": "POST",
                "headers": {
                    "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                    "x-rapidapi-key": "c69ac320d9msh4f92145a07ef9a5p11a204jsnffcc7b05808d"
                }
            })
            .then(response => {
                console.log(sign);
                return response.json();
            })
            .then(data => {
                console.log('data', data);
                setCurrentHoroscopeData(data);
            })
            .catch(err => {
                console.error(err);
            }); 
        }
    }, [])   
      
    const handleClick = (event) => {
        setSign(event.target.id);
        console.log("click event", sign);
        updatePage();
    }
    const updatePage = () => {
        navigate('/horoscope', {currentHoroscopeData});;
    }
    
    return (
        <Container className="home-container">
            <Row>
                <Col className="h2-column">
                    <h2>Choose Your Zodiac Sign</h2>
                </Col>
            </Row>
            <Row className="sign-row">
                <Col className="sign-column" sm={6} lg={4}> 
                    Aries
                    March 21–April 19
                   
                        <button type="button" id="aries" onClick={(e) => handleClick(e)}><img src={aries_icon} alt="aries icon" />Button</button>   
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Taurus
                    April 20–May 20
                    <button type="button"><img src={taurus_icon} alt="taurus icon" /></button>
                </Col> 
                <Col className="sign-column" sm={6} lg={4}>
                    Gemeni
                    May 21–June 21
                    <button type="button"><img src={gemeni_icon} alt="gemeni icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Cancer 
                    June 22–July 22
                    <button type="button"><img src={cancer_icon} alt="cancer icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Leo
                    July 23–August 22
                    <button type="button"><img src={leo_icon} alt="leo icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Virgo
                    August 23–September 22
                    <button type="button"><img src={virgo_icon} alt="virgo icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Libra
                    September 23–October 23
                    <button type="button"><img src={libra_icon} alt="libra icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Scorpio
                    October 24–November 21
                    <button type="button"><img src={scorpio_icon} alt="scorpio icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Sagittarius
                    November 22–December 21
                    <button type="button"><img src={sagittarius_icon} alt="sagittarius icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Capricorn
                    December 22–January 19
                    <button type="button"><img src={capricorn_icon} alt="capricorn icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Aquarius
                    January 20–February 18
                    <button type="button"><img src={aquarius_icon} alt="aquarius icon" /></button>
                </Col>
                <Col className="sign-column" sm={6} lg={4}>
                    Pisces
                    February 19–March 20
                    <button type="button"><img src={pisces_icon} alt="pisces icon" /></button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;