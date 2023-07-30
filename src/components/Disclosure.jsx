import { useEffect, useState } from "react";

const Disclosure = ({ q, a }) => {

    const [showAnswer, setShowAnswer] = useState(false);
    useEffect( () => {
        
    }, [])


    return (
        <div className="disclosure mb-2 mt-1">
            <button
            className="btn d-flex justify-content-between"
            
            onClick={() => {
                setShowAnswer(!showAnswer)
            }}
            >
                {q}
                <i className="fa-solid fa-chevron-down mt-1" style={{fontSize:"15px" , color:"#A855F7"}}>

                </i>
                </button>
            {showAnswer ? (
                <div className="p-2 mt-2">
                    <p
                    className="ml-2"
                    style={{fontSize : "14.5px" , color:"#7C828E"}}
                    >{a}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Disclosure;
