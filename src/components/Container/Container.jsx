import { ContainerStyle } from "./Container.styled"

/**
 * Container Component med styled component
 * Dette komponent kan bruges til centrede div containers i forskellige længder
 * Hvis ikke width og bgcolor er angivet sættes det til max bredde på 1024px og transparent
 * @param {object} props 
 * @returns div element
 */

export const Container = ({ children, width, bgcolor }) => {
  return (
	<ContainerStyle width={width} $bgcolor={bgcolor}>
		{children}
	</ContainerStyle>
  )
}
