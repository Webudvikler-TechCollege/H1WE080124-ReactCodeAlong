export const Button = ({ textValue, bgColor, clickEvent }) => {
	
  return (
	<button onClick={() => clickEvent()} style={{ color: bgColor }}>{ textValue }</button>
  )
}
