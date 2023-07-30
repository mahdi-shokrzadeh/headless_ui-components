import { useEffect, useRef, useState } from "react";
import { getAllElements } from "../service/combobox";

const Combobox = () => {
    const [elements, setElements] = useState([]);
    const [showMenu, setShowMenu] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [allElements, setAllElements] = useState([]);
    const [button, setButton] = useState("");

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        const fetchData = async () => {
            try {
                const { data: elements } = await getAllElements();

                setElements(elements);
                setAllElements(elements);
            } catch (err) {}
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setShowMenu(true);
        const s = e.target.value;
        setSearchQuery(s);

        if (e.target.value === "") {
            setElements(allElements);
        } else {
            const filteredElements = allElements.filter((item) =>
                item.text.toLowerCase().startsWith(s.toLowerCase())
            );
            setElements(filteredElements);
        }
    };

    const handleClick = (e) => {
        inputRef.current.value = e.target.innerHTML;
        setButton(e.target.innerHTML);
        setShowMenu(false);
    };

    return (
        <div
            className="p-2 w-75 m-auto shadow-lg mt-5"
            id="combobox"
            style={{ height: "400px" }}
        >
            <div className="row mt-4 ">
                <div className="col-12">
                    <em style={{ fontWeight: "470", fontSize: "20px" }}>
                        Combobox
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
                        ref={inputRef}
                        type="text"
                        style={{ height: "10px !important", color: "black" }}
                        onChange={handleSearch}
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
                        <i className="fa-solid fa-chevron-down" />
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
                                              id="combobox-active-button"
                                              onClick={handleClick}
                                          >
                                              <i className="fa-solid fa-check"></i>{" "}
                                              <strong className="">
                                                  {e.text}
                                              </strong>
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
                                              id="combobox-n-active-button"
                                              style={{
                                                  backgroundColor: "white",
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

export default Combobox;
