import styled from "styled-components";

export const ContactsListItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #9baacf;
`;

export const ContactsListButton = styled.button`
    padding: 4px;
    border: none;
    border-radius: 0.5rem;
    box-shadow: .3rem .3rem .6rem #c8d0e7, -.2rem -.2rem .5rem white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    color: #9baacf;
    &:hover {
        color: ${p => p.theme.colors.accent};
    }
    &:active {
      box-shadow: inset .2rem .2rem .5rem #c8d0e7;
    }
`;