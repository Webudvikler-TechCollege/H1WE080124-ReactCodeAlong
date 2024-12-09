/**
 * Function Component
 */
import { ExampleStyled } from './Example.styled'

export const Example = ({color}) => {    
    return (
        <ExampleStyled color={color}>
            <li><a href="#">Max</a></li>
            <li>Morten</li>
            <li><ul>
                <li>Benjamin</li>
            </ul></li>
        </ExampleStyled>
    )
}