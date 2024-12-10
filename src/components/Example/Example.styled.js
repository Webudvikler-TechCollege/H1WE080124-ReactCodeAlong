import styled from 'styled-components'

/**
 * Styled Component
 * Returnerer et ul tag med styling
 */
export const ExampleStyled = styled.ul`
    border: solid 1px #F00;

    li {
        color: ${props => props.color ? props.color : 'black' };
        ba
        a {
            text-decoration: none
        }
    }
`