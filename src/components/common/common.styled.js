import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: ${props => props.theme.colors.shade};
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.normal};
    color: ${p => p.theme.colors.accent};
`;


