import styled from "styled-components";
import { Form, Field } from 'formik';
import { TiContacts } from "react-icons/ti";

export const ContactForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactLabel = styled.label`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.shade4};
`;

export const ContactField = styled(Field)`
  box-sizing: border-box;
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: .5rem;
  box-shadow: inset .2rem .2rem .5rem #c8d0e7;
  background: none;
  color: ${p => p.theme.colors.accent};

  :focus { 
      outline: none; 
      box-shadow: .3rem .3rem .6rem ${p => p.theme.colors.shade2},  -.2rem -.2rem .5rem ${p => p.theme.colors.white}; 
  }
`;

export const ErrorText = styled.p`
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 14px;
  color: red;
`;

export const PrimaryButton = styled.button`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${p => p.theme.colors.shade};
  box-shadow: inset .2rem .2rem 1rem #8abdff, inset -.2rem -.2rem 1rem #5b0eeb, .3rem .3rem .6rem #c8d0e7, 
  -.2rem -.2rem .5rem white;
    &:hover {
        color: ${p => p.theme.colors.white};
    }
    &:active {
      box-shadow:inset .2rem .2rem 1rem #5b0eeb, inset -.2rem -.2rem 1rem #8abdff;
    }
`;

export const PrimaryButtonIcon = styled(TiContacts)`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;