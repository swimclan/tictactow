import styled from "styled-components";

export const GameContainer = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
  text-align: center;
  border: 8px solid #333;
  border-radius: 10%;
`;

export const GameHeader = styled.header`
  font-weight: 600;
  font-size: 5em;
`;

export const GameSubHead = styled.h3`
  font-weight: 500;
  font-size: 2em;
  color: #77a;
`;

export const GameBoard = styled.section`
  display: grid;
  grid-gap: 4px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const BoardCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  height: 25vh;
`;

export const CellButton = styled.button<{ $highlight?: boolean }>`
  outline: none;
  border: none;
  background-color: ${(props) => (props.$highlight ? "#aaddaa" : "#fff")};
  font-size: 8em;
  font-weight: 800;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: ${(props) => (props.$highlight ? "#aaddaa" : "#fff")};
  }
`;
