import styled from 'styled-components';
import { Link} from 'react-router-dom';
import ImgBg from '../../Assist/back.jpg';


export const HeroContainer = styled.div `
    background: linear-gradient(to right, rgba( 0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    position: absolute;
    mix-blend-mode: multiply;
    opacity: 1;
    transform: translateZ(0);
    object-fit: cover;
    min-height: 100vh;
    background-size: cover;
    position: fixed;
    z-index: -1;
    left:0;
    top:0;
    display: block;
`

export const HeroContent = styled.div `
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`


export const HeroItems = styled.div `
margin-left:100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;


    @media screen and (max-width: 650px) {
        width: 100%;

    }
`


export const HeroH1 = styled.h1 `
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 4px #8507a8;
    letter-spacing: 3px;
`


export const HeroP = styled.p `
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`

export const HeroButton = styled(Link) `
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #8507a8;
    color: #fff;
    text-decoration: none;
    transition: 0.2s ease-out;


    &:hover {
        background: #afafaf;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`