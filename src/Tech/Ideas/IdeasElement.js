import styled from 'styled-components';
import ImgBg from '../../Assist/tech5.jpg';

export const IdeasContainer = styled.div`
    background: linear-gradient(to right, rgba( 0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    min-height: 165vh;
    background-position: center;
    background-size: cover;
`


export const IdeasWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    margin-left: 60px;
`


export const IdeaCard = styled.div`
    margin: 0 2rem;
    line-hight: 2;
    width: 500px
`


export const IdeaImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 5px 5px #69a2ff;
`


export const IdeasHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`


export const IdeaName = styled.h2`
    font-weight: 400px;
    font-size: 1.5rem;
`


export const IdeaInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align:center;
`


export const IdeaBio = styled.p`
    margin-bottom: 1rem;
`


export const IdeaNotice = styled.p`
    margin-bottom: 1rem;
`


