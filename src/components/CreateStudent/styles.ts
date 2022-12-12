import styled from 'styled-components';

export const Container = styled.div`
   form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    input {
        margin-top: 10px;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border: none;
    }

    label {
        color: #80cadf;
    }

    button {
        width: 100%;
        height: 50px;
        background: #80cadf;
        border-radius: 10px;
        border: none;
        margin-top: 15px; 
    }
   }
`;
