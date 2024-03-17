import styled from "styled-components";

interface headerProps {
  bgImg: string;
}

export const HeaderContainer = styled.header<headerProps>`
  background: ${(props) => props.theme["gray-900"]};
  background-image: url(${(props) => props.bgImg});
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
`;
