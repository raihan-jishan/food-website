/* eslint-disable jsx-a11y/anchor-is-valid */
 import "../css/button.css";
export default function Button ({children, props}) {
    return(
        <a href={props} className="btn">
            {children}
        </a>
    )
}
