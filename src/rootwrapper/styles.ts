import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0 20px 0;
    box-sizing: border-box;
    div {
        box-sizing: border-box;
    }
    background-color: whitesmoke;
`;

export const Header = styled.div`
    height: 40px;
    width: 100%;
    background-color: dodgerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    border-radius: 0 0 4px 4px;
`;

export const Content = styled.div`
    height: calc(100% - 40px);
    width: 100%;
`;