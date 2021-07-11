import styled from 'styled-components';


export const IdeasContainer = styled.div`
    background-color: #65544F;
    width: 100vw;
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
    min-width: 300px;
    max-width: 100%;
    box-shadow: 5px 5px #ff6f00;
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


