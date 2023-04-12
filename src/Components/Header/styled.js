import styled from "styled-components";

export const Container = styled.header`
    align-items: center;
    display: flex;
    height: 15vh;
    justify-content: space-between;
    padding: 0 5rem;
    width: calc(100vw - 10rem);
`;

export const Logo = styled.h1`
    color: #618CFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 35px;
    line-height: 42px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 30vw;
`;

export const Link = styled.a`
    color: #000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20vw;
`;
