import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Button(props) {
  const { buttonText, primary, onClick, customClass } = props;
  let btnClass = '';

  if (primary) {
    btnClass = 'bg-transparent hover:bg-blue-500 text-indigo-100 font-semibold hover:text-white py-2 px-4 border border-indigo-100 hover:border-transparent rounded';
  }

  return (
    <button 
      type="button" 
      className={cx(btnClass, customClass)}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

/**
 * Prop Validation
 */

Button.propTypes = {
  /**
   * @buttonText Text of a button.
   */

  buttonText: PropTypes.string.isRequired,

  /**
   * @primary Enable primary button.
   */

  primary: PropTypes.bool,

  /**
   * @onClick OnClick event listener
   */
  onClick: PropTypes.func,
  /**
   * @customClass Add custom tailwind classes to button
   */
  customClass: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  onClick: () => false,
  customClass: '',
};


export default Button;
