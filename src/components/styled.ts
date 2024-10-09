import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
`;

export const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Children = styled(Column)`
  margin-left: 1rem;
`;