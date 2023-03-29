import "./App.css";
import { React } from "react";
import Header from "./Components/Header";
import Information from "./Components/Information";
import InformationOnHowToPay from "./Components/Information-on-how-to-pay";

const App = () => {
    return (
        <>
            <Header/>
            <Information/>
            <InformationOnHowToPay title='Como parcelar?' caption='Em poucos passos você pode parcelar sua compra sem cartão de crédito.'/>
        </>
    )
}

export default App;