import styled from "styled-components";

export const ThemeTitle = styled.h3`
  font-size: 18px;
  line-height: 1.3;
  color: var(${(props) => props.color});
`;

export const ThemeParagraphy = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(${(props) => props.color});
`;

export const ThemeSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(${(props) => props.color});
`;
