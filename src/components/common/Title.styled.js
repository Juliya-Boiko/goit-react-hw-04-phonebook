import styled from "styled-components";

export const Title = styled.h2`
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeight.normal};
    color: ${p => p.theme.colors.accent};
`;
