import { MainStyle } from "./Main.styled"

/**
 * Main Komponent med en destructure på props.children
 * Children er en standard property på props objektet og 
 * refererer til den kode som bliver skrevet inde i 
 * komponentet - på samme måde som i et html tag.
 * @param {object} props.children 
 * @returns main html element
 */

export const Main = ({ children }) => {
  return (
    <MainStyle>
      {children}
    </MainStyle>
  )
}
