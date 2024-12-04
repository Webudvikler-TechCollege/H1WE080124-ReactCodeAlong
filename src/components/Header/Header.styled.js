import styled from 'styled-components'
import { Margin } from '../../styled/Mixins.style'

export const HeaderStyle = styled.header`
	${Margin};
	color: ${props => props.color};
	width: ${props => props.width ? props.width : 1200}px;
	border-bottom: solid 1px #000;

	h1 {
		font-family: 'Titillium Web';
	}
`