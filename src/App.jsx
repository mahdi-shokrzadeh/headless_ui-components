import "./App.css";

import Combobox from "./components/Combobox ";
import DropDownMenu from "./components/DropDownMenu";
import ListBox from "./components/ListBox";
import Disclosures from "./components/Disclosures";
import Dialog from "./components/Dialog";
import RadioGroup from "./components/RadioGroup";
import Tasbs from "./components/Tabs";

const App = () => {

    return (
        <>
            <div className="container">
              
                <DropDownMenu />
                <ListBox />
                <Dialog />
                <Combobox />
                <Disclosures />
                <RadioGroup />
                <Tasbs />
              
            </div>
        </>
    );
}

export default App;
