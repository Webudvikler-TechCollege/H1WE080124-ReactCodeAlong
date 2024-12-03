import styled from 'styled-components'

export const HeaderStyle = styled.header`
	background-color: ${props => props.bgcolor ? props.bgcolor : 'grey'};
	color: ${props => props.color};
	width: ${props => props.width ? props.width : 1200}px;
`