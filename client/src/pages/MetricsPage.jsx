import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import LineData from "../components/LineData";
import DoughnutData from "../components/DoughnutData";
import { Tooltip } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const MetricsPage = ({ txnData, setTxnData }) => {
  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((response) => setTxnData(response.data))
      .catch((err) => console.log(`Error: ${err}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalIncome = txnData
    .filter((item) => item.transactionType === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expensesList = txnData
    .filter((item) => item.transactionType === "Expense")
    .map((item) => {
      const temp = {};
      temp[item.category] = item.amount;
      return temp;
    });

  console.log(expensesList);
  const incData = txnData.filter((item) => item.transactionType === "Income");
  const expData = txnData.filter((item) => item.transactionType === "Expense");

  return (
    <div className="metrics-page">
      <section className="mp-wrapper">
        <div className="mp-main-line">
          <LineData />
        </div>
        <div className="mp-bottom">
          <div className="mp-txn-list">
            <ListIcon />
            <Link to="/:googleId">Transactions</Link>
          </div>
          <div className="mp-main-pie">
            <DoughnutData type="Income" data={incData} />
            <DoughnutData type="Expense" data={expData} />
          </div>
          <div className="mp-cat-breakdown">
            <h2>
              Expense Breakdown:{" "}
              <Tooltip
                title="Expenses as a percentage of Income"
                placement="right"
              >
                <HelpOutlineIcon />
              </Tooltip>
            </h2>
            <ul>
              {expensesList.map((item, index) => (
                <li key={Object.keys(item) + index}>
                  {Object.keys(item)} -{" "}
                  {((Number(Object.values(item)) / totalIncome) * 100).toFixed(
                    1
                  )}
                  %
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetricsPage;
