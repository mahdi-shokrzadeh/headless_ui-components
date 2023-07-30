import { useState } from "react";

const Dialog = () => {
    const [ShowDialog, setShowDialog] = useState(false);

    return (
        <div
            id="dialog"
            className="p-2 w-75 m-auto mt-5 shadow-lg d-flex align-items-center justify-content-center "
            style={{ height: "400px" }}
        >   
    
            
            <div className="align-items-center">
                {ShowDialog ? (
                    <div className="w-75 m-auto p-3 shadow-lg " id="dialog-modal">
                        <h5 className="mb-2">Payment successful</h5>
                        <p className="text-muted" style={{fontSize:"14px"}}>
                            Your payment has been successfully submitted. We have
                            sent you an email with all of the details of your
                            order.
                        </p>
                        <button 
                        onClick={()=> setShowDialog(!ShowDialog)}
                        className="btn btn-primary"
                        id="close-dialog-btn"
                        >
                            Got it, thanks!
                        </button>
                    </div>
                ) : (
                    <button 
                    onClick={() => setShowDialog(!ShowDialog)}
                    className="btn"
                    id="open-dialog-modal-btn"
                    >open dialog</button>
                )}
            </div>
        </div>
    );
};

export default Dialog;
