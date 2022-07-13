import styled from "styled-components";

export const Input = styled.input`
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    font-family: inherit;
    border: none;
    outline: none;
    border-radius: .5rem;
    box-shadow: inset .2rem .2rem .5rem ${p => p.theme.colors.shade2};
    background: none;
    color: ${p => p.theme.colors.accent};

    ::placeholder { 
        color: ${p => p.theme.colors.shade3}; 
    }
    
    :focus { 
        outline: none; 
        box-shadow: .3rem .3rem .6rem ${p => p.theme.colors.shade2},  -.2rem -.2rem .5rem ${p => p.theme.colors.white}; 
    }
`;