import { useEffect, useState } from "react";
import { getAllDisclosures } from "../service/disclosure";
import Disclosure from "./Disclosure";

const Disclosures = () => {
    const [alldisclosures, setAllDisclosures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: disclosures } = await getAllDisclosures();
                setAllDisclosures(disclosures);
            } catch (err) {}
        };
        fetchData();
    }, []);

    return (
        <div
            className="p-2 w-75 m-auto mt-5 shadow-lg"
            id="disclosures"
            style={{ height: "400px" }}
        >
            <div className="row mt-4 mb-3 ">
                <div className="col-12">
                    <em style={{ fontWeight: "470", fontSize: "20px" , color:"wheat"}}>
                        Disclosure
                    </em>
                </div>
            </div>
            <div className="justify-content-center w-full p-3">
                <div
                    className="bg-white m-auto p-2"
                    id="disclosure-div"
                    style={{ borderRadius: "16px" , width : "60%"}}
                >
                    {alldisclosures.map((item) => {
                        return (
                            <Disclosure
                                q={item.question}
                                a={item.answer}
                                key={item.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Disclosures;
