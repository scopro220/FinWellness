import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import MetricsPage from "./pages/MetricsPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [txnData, setTxnData] = useState([]);
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/:googleId" exact>
          <UserPage
            txnData={txnData}
            setTxnData={setTxnData}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            category={category}
            setCategory={setCategory}
            amount={amount}
            setAmount={setAmount}
            date={date}
            setDate={setDate}
          />
        </Route>
        <Route path="/:googleId/metrics" exact>
          <MetricsPage txnData={txnData} setTxnData={setTxnData} />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
