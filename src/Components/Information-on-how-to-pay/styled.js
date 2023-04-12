import styled from "styled-components";

export const ContainerContent = styled.div`
    background-color: #EAEAEE;
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem 4rem;
    width: calc(100vw - 10rem);
`;

export const ContainerContentBenefits = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem 4rem;
    width: calc(100vw - 10rem);
`;

export const ContainerContentTitle = styled.h1`
    color: #263238;   
    font-family: 'Gilroy-ExtraBold';
    font-size: 36px;
    line-height: 42px;
`;

export const ContainerContentText = styled.p`
    color: #7D7D7D;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    margin-top: 20px;
`;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    width: 100%;
`;