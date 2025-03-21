import { Button } from "react-bootstrap"
import PropTypes from "prop-types"
import classNames from "classnames"

const CustomButton = ({
  text,
  classnames,
  outline = true,
  type = 'light',
  buttonType = 'button',
  onClick
}) => {
  return (
    <Button 
      className={classNames(`btn-send ${classnames}`)} 
      // variant="outline-light" 
      variant={outline ? `outline-${type}` : type}
      size="sm"
      type={buttonType} /* 'submit'; 'button'; 'reset'.    -> https://www.w3schools.com/tags/att_button_type.asp */
      onClick={onClick ? onClick : null}
    >
      {text}
    </Button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string,
  classnames: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.string,
  buttonType: PropTypes.string,
  onClick: PropTypes.func
}

export default CustomButton