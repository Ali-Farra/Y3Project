import styled from 'styled-components';


export const IdeasContainer = styled.div`
    width: 100vw;
    background: #FCCC34;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    color: #fff;
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
    width: 500px;
`


export const IdeaImg = styled.img`
    height: 300px;
    min-width: 550px;
    max-width: 100%;
    box-shadow: 5px 5px #000;
`


export const IdeasHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`


export const IdeaName = styled.h2`
    font-weight: 400px;
    font-size: 1.5rem;
    color: #000;
`


export const IdeaInfo = styled.div`
    display: flex;
    color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align:center;
`


export const IdeaBio = styled.p`
    margin-bottom: 1rem;
    color: #000;
`


export const IdeaNotice = styled.p`
    margin-bottom: 1rem;
    color: #000;
`


