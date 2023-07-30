import { useEffect, useRef, useState } from "react";
import { getAllElements } from "../service/combobox";

const ListBox = () => {

    const [showMenu , setShowMenu] = useState(true);
    const [elements, setElements] = useState([]);
    const [button , setButton] = useState("");
    const inputRef = useRef();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data: elements } = await getAllElements();

                setElements(elements);
            } catch (err) {}
        };
        fetchData();
    }, []);



    const handleClick = (e) => {
        inputRef.current.value = e.target.innerHTML;

        setButton(e.target.innerHTML);
        setShowMenu(!showMenu)
    }


    return (
        <div
            className="p-2 w-75 m-auto mt-5 shadow-lg"
            id="list-box"
            style={{ height: "400px" }}
        >
            <div className="row mt-4 ">
                <div className="col-12">
                    <em style={{ fontWeight: "470", fontSize: "20px" }}>
                        Listbox
                    </em>
                </div>
            </div>
            <div className="justify-content-center w-full p-3">
                <div
                    className="m-auto align-items-center input-group"
                    style={{ width: "35%" }}
                >
                    <input
                        className="form-control"
                        type="text"
                        onChange={() => 2}
                        style={{ height: "10px !important", color: "#2F2F2F" , backgroundColor : "white"
                        , cursor : "default"
                    }}
                        disabled={true}
                        ref={inputRef}
                        
                    />
                    <button
                        className="btn"
                        style={{
                            backgroundColor: "white",
                            color: "#9CA3AF",
                        }}
                        type="submit"
                        onClick={() => {
                            setShowMenu(!showMenu);
                            
                        }}
                    >
                        <i className="fa-solid fa-chevron-down" style={{fontSize:"15px"}} />
                    </button>
                </div>
                <div className="flex-col mt-2 ">
                    {showMenu
                        ? elements.map((e) => {
                              return (
                                  <div
                                      className="row m-auto shadow-lg"
                                      key={e.id}
                                      style={{ width: "35%" }}
                                  >
                                      {button === e.text ? (
                                        
                                          <button
                                              className={`rounded-0 ${
                                                  e.id === 1
                                                      ? "rounded-top"
                                                      : ""
                                              } btn w-full  ${
                                                  e.id === 6
                                                      ? "rounded-bottom"
                                                      : ""
                                              }`}
                                              id="list-box-active-button"
                                              onClick={handleClick}
                                              disabled={true}
                                              style={{cursor:"default"}}
                                          >
                                              <i className="fa-solid fa-check" style={{color : "#D97706"}}></i>{" "}
                                              <span className="">
                                                  {e.text}
                                              </span>
                                          </button>
                                      ) : (
                                          <button
                                              className={`rounded-0 ${
                                                  e.id === 1
                                                      ? "rounded-top"
                                                      : ""
                                              } btn w-full ${
                                                  e.id === 6
                                                      ? "rounded-bottom"
                                                      : ""
                                              }`}
                                              id="list-box-n-active-button"
                                              style={{
                                                  backgroundColor: "white",
                                                  cursor: "default"
                                              }}
                                              onClick={handleClick}
                                          >
                                              {e.text}
                                          </button>
                                      )}
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default ListBox;
