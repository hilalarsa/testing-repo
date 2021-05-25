import { AiFillCheckCircle } from "react-icons/ai"

const Snackbar = ({ state, message = "", variant = "info" }) => {

    return (
        <>
            <div className={`snackbar flex justify-center items-center space-x-2 ${variant} ${state ? 'animate-fadein up' : 'animate-fadeout down'}`}>
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
                color:
            }
            .snackbar {
                position: fixed;
                z-index: 9999;
                min-width: 250px;
                font-weight: 500;
                background-color: #EEF8EF;
                color: #49A456;
                text-align: left;
                border-radius: 8px;
                padding: 12px;
            }
      `}</style>
        </>
    );
}
export default Snackbar