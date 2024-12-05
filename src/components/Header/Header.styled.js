import styled from 'styled-components'
import { Margin } from '../../styled/Mixins.style'

/**
 * Styled Component for Header tag
 * Bruger Mixin fra styled mappen
 */

export const HeaderStyle = styled.header`
	${Margin};
	color: ${props => props.color};
	border-bottom: solid 1px #000;

	h1 {
		font-family: 'Titillium Web';
	}
`