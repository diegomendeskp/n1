import theme from "../styles";
type Theme = typeof theme

declare module 'styled-components'{
    export interface DefaultTheme extends Theme {}
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      custom?: string;
    }
  }
  
