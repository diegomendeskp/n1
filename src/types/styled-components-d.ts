import theme from "../styles";

type Theme = typeof theme.colors

declare module 'styled-components'{
    export interface DefaultTheme extends Theme {}
}