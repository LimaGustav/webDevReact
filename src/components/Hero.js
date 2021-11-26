import React from 'react'
import { Button } from './Button';
import './Hero.css'
import '../App.css';
import videoBackground from '../videos/video-2.mp4'

function Hero() {
    return (
        <div className='hero_container'>
            <video src={videoBackground} autoPlay loop muted/>
            <h1>adventure awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero_btns">
                <Button className="btns" 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                        >
                Get Started
                </Button>
                <Button className="btns" 
                        buttonStyle='btn--primary' 
                        buttonSize='btn--large'
                        >
                watch trailer <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default Hero
