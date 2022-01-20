import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Button({children, outline, className, onClick})  {

    const btnClasses = classNames('button', className, {
        'button--outline': outline
    })

    return (
        <button onClick={onClick} className={btnClasses}>{children}</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,

}

export default Button;