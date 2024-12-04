import { ButtonStyle } from "./Button.styled"

export const Button = ({textValue, size, theme}) => {

	return (
		<ButtonStyle className={`${theme} ${size}`}>
			{textValue}
		</ButtonStyle>
		
	)
}