import { ButtonStyle } from "./Button.styled"

/**
 * Button Komponentet sender js vars som size og theme 
 * direkte til sit styled component. 
 * Det betyder at vi kan sende css klassenavne med (small, medium, dark osv) 
 * og bruge dem i vores styled component.
 * @param {*} param0 
 * @returns 
 */

export const Button = ({textValue, theme, size}) => {
	return (
		<ButtonStyle className={`${theme} ${size}`}>
			{textValue}
		</ButtonStyle>
		
	)
}