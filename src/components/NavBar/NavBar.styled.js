import styled from 'styled-components'

export const NavBarStyled = styled.nav`
	width: 100%;


	ul {
		box-sizing: border-box;
		list-style-type: none;
		display: inline-flex;
		margin: 0px;
		padding: 0px;

		li {
			display: inline-block;
			margin-right: 1rem;

			a {
				display: block;
				padding: 0.8rem;
				text-decoration: none;
				color: #000;
			}
		}
	}
`