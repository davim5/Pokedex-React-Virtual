import styled from 'styled-components';

export const Interface = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ContainerR = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #55aaaa;
  border: 20px solid #dd3a43;
  border-radius: 8px;
  padding: 5px;
  width: 400px;
  height: 600px;
  margin-top: 50px;
`;

export const Pokelist = styled.ul`
  display: grid;

  height: 600px;
  overflow: auto;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Spliter = styled.div`
  height: 500px;
  width: 28px;
  background: #c6343b;
  border-radius: 14px;
`;

export const ContainerL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dd3a43;
  border: 15px solid #dd3a43;
  border-radius: 8px;
  padding: 5px;
  width: 400px;
  height: 600px;
  margin-top: 50px;
`;
