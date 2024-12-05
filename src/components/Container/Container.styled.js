import styled from 'styled-components'

export const ContainerStyle = styled.div`
	border: solid 1px #000;
	height: 100vh;
	margin: 0 auto;
	width: 100%;
	max-width: ${props => props.width ? props.width : 1024}px;
	background-color: ${props => props.$bgcolor ? props.$bgcolor : 'transparent' }
`