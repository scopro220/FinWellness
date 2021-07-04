import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const TransactionItem = ({ item, txnData, setTxnData }) => {
  const handleDelete = (id) => {
    axios
      .delete("/api/transaction/" + item._id)
      .then((response) => console.log(response.data));

    setTxnData(txnData.filter((el) => el._id !== id));
  };

  return (
    <div className="up-txn-item">
      <div className="up-txn-item-text">
        <h2>Type: {item.transactionType}</h2>
        <h4>Category: {item.category}</h4>
        <h4>Amount: ${item.amount}</h4>
        <h6>Date: {item.date.slice(0, 10)}</h6>
      </div>
      <div
        className="up-txn-item-delete"
        onClick={() => {
          handleDelete(item._id);
        }}
      >
        <DeleteIcon fontSize="large" />
      </div>
    </div>
  );
};

export default TransactionItem;
