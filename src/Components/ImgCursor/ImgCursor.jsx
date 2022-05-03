import React from "react";
// style
import ImgCursorContainer from "./ImgCursorStyle";

const ImgCursor = ({className, src}) => {
    return(
        <ImgCursorContainer
        className={className}
        src={src}
        />
    )
}

export default ImgCursor;