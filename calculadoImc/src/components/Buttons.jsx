import "./Buttons.css"

const Buttons = ({id, text, action}) => {
  return <button id={id} onClick={action}>
    {text}
  </button> ;
}

export default Buttons