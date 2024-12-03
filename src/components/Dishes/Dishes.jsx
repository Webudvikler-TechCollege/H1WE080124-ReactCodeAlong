import { DishesStyle } from "./Dishes.styled"

export const Dishes = () => {

  const arrDishes = [
	'Spaghetti & Kødsovs',
	'Bøf med løg',
	'Burger med fritter',
	'Kartoffelsuppe',
	'Tarteletter'
  ]

  return (
	<DishesStyle>
		{arrDishes.map((dish, key) => {
			return (
				<li key={key}>{dish}</li>
			)
		})}
	</DishesStyle>
  )
}
