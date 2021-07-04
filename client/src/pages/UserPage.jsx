import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TransactionItem from "../components/TransactionItem";

const UserPage = ({
  txnData,
  setTxnData,
  transactionType,
  setTransactionType,
  category,
  setCategory,
  amount,
  setAmount,
  date,
  setDate,
}) => {
  const txnTypes = ["", "Income", "Expense"];
  const incomeCategories = [
    "",
    "Salary",
    "Investments",
    "Rental Income",
    "Side Hustle",
    "Lottery",
    "Gifts",
    "Other",
  ];
  const expenseCategories = [
    "",
    "Home",
    "Entertainment",
    "Phone",
    "Utilities",
    "Insurance",
    "Food",
    "Shopping",
    "Travel",
    "Car",
    "Pets",
    "Other",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transactions")
      .then((response) => setTxnData(response.data))
      .catch((err) => console.log(`Error: ${err}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txnData]);

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      transactionType,
      category,
      amount,
      date,
    };
    axios
      .post("http://localhost:5000/api/transactions/add", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(`Error: ${err}`));

    axios
      .get("http://localhost:5000/api/transactions")
      .then((response) => setTxnData(response.data));

    setTransactionType("");
    setCategory("");
    setAmount(0);
    setDate("");
  };

  return (
    <div className="user-page">
      <section className="up-wrapper">
        <div className="up-transaction-form-wrapper">
          <form className="transaction-form">
            <select required onChange={handleTransactionTypeChange}>
              {txnTypes.map((txnType) => {
                return (
                  <option key={txnType} value={txnType}>
                    {txnType}
                  </option>
                );
              })}
            </select>
            <select required onChange={handleCategoryChange}>
              {transactionType === "Income" &&
                incomeCategories.map((cat) => {
                  return (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  );
                })}
              {transactionType === "Expense" &&
                expenseCategories.map((cat) => {
                  return (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  );
                })}
            </select>
            <input
              type="number"
              value={amount}
              required
              onChange={handleAmountChange}
            />
            <input
              type="date"
              value={date}
              required
              onChange={handleDateChange}
            />
            <button onClick={handleSubmit}>Add Transaction</button>
          </form>
          <div className="up-viz">
            <AssessmentIcon />
            <Link to="/:googleId/metrics">Visualizations</Link>
          </div>
        </div>
        <div className="up-transactions">
          <div className="up-txn-list">
            {txnData.map((item) => (
              <TransactionItem
                setTxnData={setTxnData}
                txnData={txnData}
                key={item._id}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
