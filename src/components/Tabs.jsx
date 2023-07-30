import { useState } from "react";

const Tasbs = () => {
    const [activeTabId, setActiveTabId] = useState(1);

    return (
        <div
            className="p-2 w-75 m-auto mt-5 shadow-lg d-flex align-items-center justify-content-center "
            style={{ height: "400px" }}
            id="tabs"
        >
            <div className="mb-5" id="tabs-section">
                <div className="row mb-1 p-1" id="tab-headers">
                    <div className="col">
                        <button
                            className="w-100"
                            onClick={() => setActiveTabId(1)}
                            id={activeTabId === 1 ? "active-btn" : ""}
                        >
                            Recent
                        </button>
                    </div>
                    <div className="col">
                        <button
                            className="w-100"
                            onClick={() => setActiveTabId(2)}
                            id={activeTabId === 2 ? "active-btn" : ""}
                        >
                            Popular
                        </button>
                    </div>
                    <div className="col">
                        <button
                            className="w-100"
                            onClick={() => setActiveTabId(3)}
                            id={activeTabId === 3 ? "active-btn" : ""}
                        >
                            Trending
                        </button>
                    </div>
                </div>
                <div className="tabs mt-2 bg-white p-2 w-full ">
                    {activeTabId === 1 ? (
                        <>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    Does drinking coffee makes you smarter ?
                                </h5>
                                <span className="text-muted">
                                    5h ago . 5 comments . 2 shares
                                </span>
                            </div>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    So you've bought coffee... now what?
                                </h5>
                                <span className="text-muted">
                                    2h ago . 3 comments . 2 shares
                                </span>
                            </div>
                        </>
                    ) : null}

                    {activeTabId === 2 ? (
                        <>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    Is tech making coffee better or worse?
                                </h5>
                                <span className="text-muted">
                                    Jan 7 . 29 comments . 16 shares
                                </span>
                            </div>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    The most innovative things happening in coffee
                                </h5>
                                <span className="text-muted">
                                    Mar 19 . 24 comments . 12 shares
                                </span>
                            </div>
                        </>
                    ) : null}
                    {activeTabId === 3 ? (
                        <>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    Ask Me Anythong: 10 answers to your questions about coffee 
                                </h5>
                                <span className="text-muted">
                                    2d ago . 9 comments . 5 shares
                                </span>
                            </div>
                            <div className="m-1 p-2" id="tab-item">
                                <h5 className="m-0">
                                    The worst advice we've ever heard about coffee 
                                </h5>
                                <span className="text-muted">
                                    4d ago . 1 comments . 2 shares
                                </span>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Tasbs;
