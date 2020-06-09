import React from "react";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */
type Props = {
  success?: boolean;
};
export default (props: Props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};