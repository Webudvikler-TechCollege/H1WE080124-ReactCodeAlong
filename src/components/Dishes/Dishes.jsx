import { DishesStyle } from "./Dishes.styled"

/**
 * Dishes tager et data array via props og mapper det
 * Arrayet bygges altså der hvor komponentet kaldes.
 * App.jsx i dette tilfælde
 * @returns 
 */

export const Dishes = props => {
  return (
	<DishesStyle>
		{props.data.map((dish, key) => {
			return (
				<li key={key}>{dish}</li>
			)
		})}
	</DishesStyle>
  )
}
