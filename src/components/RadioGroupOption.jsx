import { useEffect, useState } from "react";

const RadioGroupOptoin = ({ text, header }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="row shadow-lg m-auto mb-2 p-2 radio-group-option"
            id={`${isActive ? "active-option" : "option"}`}
            style={{ width: "65%" }}
        >
            <div className="col-10">
                <h5>{header}</h5>
                <p className="text-muted">{text}</p>
            </div>
            <div className="col-2 d-flex align-items-center">
                <button
                    className={`${
                        isActive ? "btn-success" : "btn-primary"
                    } btn rounded-pill `}
                    onClick={() => setIsActive(!isActive)
                        
                    }
                    style={{fontSize:"14px"}}
                >
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>
        </div>
    );
};

export default RadioGroupOptoin;
