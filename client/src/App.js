import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import MetricsPage from "./pages/MetricsPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { myContext } from "./Context";

function App() {
  const [txnData, setTxnData] = useState([]);
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const userObject = useContext(myContext);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          {!userObject ? (
            <LandingPage />
          ) : (
            <Route path="/visualizations" exact>
              <MetricsPage txnData={txnData} setTxnData={setTxnData} />
            </Route>
          )}
          {!userObject ? (
            <LandingPage />
          ) : (
            <Route path="/transactions">
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
          )}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
