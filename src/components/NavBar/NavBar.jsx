import { NavBarStyled } from "./NavBar.styled"

export const NavBar = () => {
  return (
	<NavBarStyled>
		<ul>
			<li><a href="#">Forside</a></li>
			<li><a href="#">Om os</a></li>
			<li><a href="#">Produkter</a></li>
		</ul>
	</NavBarStyled>
  )
}
