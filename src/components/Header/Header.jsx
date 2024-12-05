import { NavBar } from "../NavBar/NavBar"
import { HeaderStyle } from "./Header.styled"

/**
 * Header komponent med Styled Component og NavBar
 * @returns header html element
 */

export const Header = () => {
	return (
		<HeaderStyle color="red">
			<h1>MY FIRST REACT</h1>
			<NavBar />
		</HeaderStyle>
	)
}