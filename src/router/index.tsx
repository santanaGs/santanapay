import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Account from "../pages/Account";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";



const RouterS : React.FC = () => {
    return(
        <Router >
          <Routes >
            <Route path="/" element={<Account/>} />
            <Route path="/shipping" element={<Shipping/>} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
      </Router>
    )
}

export default RouterS;
