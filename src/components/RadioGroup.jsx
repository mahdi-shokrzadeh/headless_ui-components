import { useEffect, useState } from "react";
import RadioGroupOptoin from "./RadioGroupOption";

const RadioGroup = () => {

    const [activeOption, setActiveOption] = useState(1);

    useEffect( () => {
        console.log(activeOption)
    } , [])

    const handleClick = (id) => {
        setActiveOption(id);
        console.log(id)
    };

    return (
        <div
            id="radio-group"
            className="p-2 w-75 m-auto mt-5 shadow-lg "
            style={{ height: "400px" }}

        >   
            <div className="row mt-2 ">
                <div className="col-12">
                    <em style={{ fontWeight: "470", fontSize: "20px" , color:"gray" }}>
                    Radio Group

                    </em>
                </div>
            </div>
            <div className="options mt-4 w-100">

                <RadioGroupOptoin
                    id={1}
                    header="Startup"
                    text="12GB/6 CPUs · 160 GB SSD disk"
                />
                <RadioGroupOptoin
                    id={2}
                    header="Business"
                    text="16GB/8 CPUs · 512 GB SSD disk"
                />
                <RadioGroupOptoin
                    id={3}
                    header="Enterprise"
                    text="32GB/12 CPUs · 1024 GB SSD disk"
                />

            </div>
        </div>
    );
};

export default RadioGroup;
