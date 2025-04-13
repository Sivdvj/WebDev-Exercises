import React from "react";
import propTypes from "prop-types";
function Q11child({n}){
    return(
        <h2>Hi {n}!!</h2>
    );
}

Q11child.propTypes={
    n: propTypes.string.isRequired
}

export default Q11child;