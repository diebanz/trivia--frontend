import React from "react";

function Button({ title }) {
    return (
        <button className="btn" type="submit">
            {title}
        </button>
    );
}

export default Button;
