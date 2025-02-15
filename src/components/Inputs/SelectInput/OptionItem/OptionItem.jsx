import PropTypes from "prop-types";

function OptionItem({
  text
}) {
  return (
      <option value="1">{text}</option>
  );
}

OptionItem.propTypes = {
  text: PropTypes.string
}

export default OptionItem;