import styled from "styled-components";


export const FormWrapper = styled.form`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.babyBlue};
    border-radius: 15px; 
    border-style:  solid;
    border-color: ${({ theme }) => theme.color.darksLateGray};
`;

export const Label = styled.label`
    display: grid;
    grid-gap: 10px;
    margin: 0 10px;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Span = styled.span`
    align-self: center;
    height: 30px;
    margin: 5px 10px;
    font-size: 17px;
    font-weight: bold;
`;

export const Select = styled.select`
    align-self: center;
    padding-left: 10px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darksLateGray};
`;

export const Option = styled.option`
    background-color: ${({ theme }) => theme.color.darksLateGray};
`;

export const Cash = styled.input`
    align-self: center;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.darksLateGray};
`;
