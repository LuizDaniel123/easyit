import styled from "styled-components";

export const CardContainerBenefits = styled.div`
    display: flex;
    flex-direction: column;
    height: 15rem;
    width: calc((100% - 3rem) / 4);
`;

export const ImgContainerImgBenefits = styled.img`
    width: 60px;
    height: 60px;
`;

export const CardContainerTitleBenefits = styled.span`
    color: #000;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    margin: 1rem 0;
    width: 90%;
`;

export const CardContainerTextBenefits = styled.p`
    color: rgba(0, 0, 0, 0.65);
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 800;
    font-size: 14.5px;
    line-height: 16px;
    margin-top: 20px;
    opacity: 65%;
    width: 90%;
`;