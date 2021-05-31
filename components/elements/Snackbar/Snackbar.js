import { AiFillCheckCircle } from "react-icons/ai"
import PropTypes from "prop-types"
import { useState, useEffect } from "react";
const Snackbar = ({ state = "", message = "", variant = "info" }) => {

    const [animation, setAnimation] = useState({})
    useEffect(() => {
        if(state == true){
            setAnimation("animate-fadein up")
        }else if(state == false){
            setAnimation("animate-fadeout down")
        }
    },[state])

    return (
        <>
            <div className={`snackbar flex justify-center items-center space-x-2 ${variant} ${animation}`}>
                <AiFillCheckCircle size={20} />
                <div>
                    {message}
                </div>
            </div>
            <style jsx>{`
            .up{
                top: 30px;
            }
            .down{
                top: -300px;
            }
            .info{
                color: #49A456;
                background-color: #EEF8EF;
            }
            .snackbar {
                position: fixed;
                z-index: 9999;
                min-width: 250px;
                font-weight: 500;
                text-align: left;
                border-radius: 8px;
                padding: 12px;
            }
      `}</style>
        </>
    );
}

Snackbar.propTypes = {
    message: PropTypes.bool.isRequired, //* component rendered inside Snackbar
    state: PropTypes.string.isRequired, //* header text on clickable section of Snackbar 
    variant: PropTypes.string
}

Snackbar.defaultProps = {
    state: true,
    message: "",
    variant: "info",
};
export default Snackbar