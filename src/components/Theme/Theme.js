import { createGlobalStyle } from 'styled-components';
export const darkTheme = {
  body: '#000',
  textColor: '#fff',
  header: '#000',
};

export const lightTheme = {
  body: '#fff',
  textColor: '#000',
  header: 'transparent',
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
 header {
  background: ${(props) => props.theme.header}
 }
`;
