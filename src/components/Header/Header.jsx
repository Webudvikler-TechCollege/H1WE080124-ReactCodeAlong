import { NavBar } from "../NavBar/NavBar"
import { HeaderStyle } from "./Header.styled"

export const Header = () => {
	return (
		<HeaderStyle color="red" $bgcolor="blue">
			<h1>MY FIRST REACT</h1>
			<NavBar />
		</HeaderStyle>
	)
}