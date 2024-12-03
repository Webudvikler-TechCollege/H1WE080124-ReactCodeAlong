export const Button = ({ textValue, bgColor, clickEvent }) => {
	
  return (
  	<button style={{ color: bgColor }} onClick={() => clickEvent()}>{ textValue }</button>
  )
}
