import React from "react";
import classNames from "classnames";

function Button({children, outline, className})  {

    const btnClasses = classNames('button', className, {
        'button--outline': outline
    })

    return (
        <button className={btnClasses}>{children}</button>
    );
};

export default Button;