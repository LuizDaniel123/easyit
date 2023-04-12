import styled from "styled-components";

export const CardContainer = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 7px 7px 7px 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 15rem;
    width: calc((100% - 3rem) / 4);
`;

export const ImgContainer = styled.div`
    align-items: center;
    background-color: #dedee2;
    border-radius: 7px 7px 0px 0px;
    border-bottom: 5px solid #618CFF;
    display: flex;
    justify-content: center;
    height: 45%;
    width: 100%;
`;

export const ImgContainerImg = styled.img`
    width: 80px;
    height: 80px;
`;

export const CardContainerTitle = styled.span`
    color: #000;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    margin: 0.5rem 0;
    width: 90%;
`;

export const CardContainerText = styled.p`
    color: rgba(0, 0, 0, 0.65);
    opacity: 65%;
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 800;
    font-size: 14.5px;
    line-height: 16px;
    text-align: center;
    width: 90%;
`;