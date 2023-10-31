import React from 'react'
import './hero.css'
import hero from '../assests/image-web-3-desktop.jpg'

const Hero = () => {
    return (
        <section className='hero-section container m-auto max-lg:px-5 lg:flex pt-16'>
            <div className="hero-left lg:pr-5 lg:w-8/12">
                <div className="hero-left-img">
                    <img src={hero} alt="" />
                </div>
                <div className="hero-left-details lg:flex justify-between items-center mt-5">
                    <h1 className='lg:w-full'>The Bright Future of Web 3.0</h1>
                    <div className='lg:w-full'>
                        <p>We dive into the next evolution of the web thats claims to put the power of the platforms back into the hands of the people. But is it really fullfilling the promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="hero-right lg:w-4/12 lg:pl-5 mt-10 lg:m-0">
                <div className="hero-right-box">
                    <h2>New</h2>
                    <h5>Hydrogen VS Electric Cars</h5>
                    <p>Will hydrogen fueled cars ever catch up to EVs?</p>
                    <hr />
                    <h5>The Downsides of AI Artistry</h5>
                    <p>What are the possible adverse effects of on-demand Ai image generation?</p>
                    <hr />
                    <h5>Is VC Funding Drying Up</h5>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means?</p>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default Hero
