
import React, {useState} from 'react';
// import NavBar from '../Nav';
// import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroButton} from './HeroElement';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const drag =()=> {
        setIsOpen(!isOpen)
    }



    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>TECHNOLOGY!</HeroH1>
                    <HeroP>Let's go creative!</HeroP>
                    <HeroButton to="/tech/Ideas" >Ideas</HeroButton>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
