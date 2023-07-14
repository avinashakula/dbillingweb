import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar/Navbar";
import Home from "./components/home/home";

import { BillingLayout } from "./navbar/layouts/billingLayout";
import { StockLayout } from "./navbar/layouts/stockLayout";
import { CustomersLayout } from "./navbar/layouts/customersLayout";
import { ModeratorsLayout } from "./navbar/layouts/moderatorsLayout";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/billing/*" element={<BillingLayout />} />
        <Route path="/stock/*" element={<StockLayout />} />
        <Route path="/customers/*" element={<CustomersLayout />} />
        <Route path="/moderators/*" element={<ModeratorsLayout />} />
      </Routes>
    </>
  );
}

export default App;
