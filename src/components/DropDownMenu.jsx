import { useEffect, useState } from "react";

const DropDownMenu = () => {
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        setShowMenu(true);
    }, []);
    return (
        <div
            className="p-2 w-75 m-auto shadow-lg mb-5"
            id="dropdown-menu"
            style={{ height: "400px" }}
        >
            <div className="row mt-4 ">
                <div className="col-12">
                    <em
                        style={{
                            fontWeight: "470",
                            fontSize: "20px",
                            color: "wheat",
                        }}
                    >
                        Dropdown Menu
                    </em>
                </div>
            </div>

            <div className="w-full p-3">
                <div
                    className="m-auto mt-4 align-items-center input-group"
                    style={{ width: "35%" }}
                >
                    <button
                        className="btn btn-primary m-auto border-0"
                        id="dropdown-btn"
                        style={{
                            backgroundColor: "#5A4FC2",
                        }}
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                    >
                        <span>Options</span>{" "}
                        <i
                            className="fa-solid fa-chevron-down "
                            style={{ fontSize: "12px" }}
                        />
                    </button>
                </div>

                <div className="flex-col mt-2">
                    {showMenu ? (
                        <div
                            className="row m-auto shadow-lg text-left p-1 rounded"
                            style={{ width: "35%" ,
                            backgroundColor: "white"
                        }}
                        >
                            <button
                                onClick={() => setShowMenu(false)}
                                className="btn rounded"
                                id="dropdown-menu-btn"
                            >
                                <i className="fa-solid fa-pencil mr-4" />
                                <span>Edit</span>
                            </button>
                            <button
                                onClick={() => setShowMenu(false)}
                                className="btn rounded"
                                id="dropdown-menu-btn"
                            >
                                <i className="fa-regular fa-copy" />
                                <span>Duplicate</span>
                            </button>
                          
                            <button
                                className="btn rounded"
                                id="dropdown-menu-btn"
                                onClick={() => setShowMenu(false)}
                            >
                                <i className="fa-solid fa-box-archive" />
                                <span>Archive</span>
                            </button>
                            <button
                                onClick={() => setShowMenu(false)}
                                className="btn rounded"
                                id="dropdown-menu-btn"
                            >
                                <i className="fa-solid fa-right-from-bracket" />
                                <span>Move</span>
                            </button>
                            <button
                                onClick={() => setShowMenu(false)}
                                className="btn rounded"
                                id="dropdown-menu-btn"
                            >
                                <i className="fa-solid fa-trash" />
                                <span>Trash</span>
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
