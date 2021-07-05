import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutData = ({ type, data }) => {
  const dataAmounts = data.map((item) => item.amount);
  const dataCategories = data.map((item) => item.category);
  // console.log(data);
  const colors =
    type === "Income"
      ? [
          "#0eaa0e",
          "#10c210",
          "#12da12",
          "#19ec19",
          "#48f048",
          "#60f260",
          "#d1fbd1",
        ]
      : [
          "#aa0e0e",
          "#c21010",
          "#da1212",
          "#ec1919",
          "#ee3131",
          "#f04848",
          "#f26060",
          "#f68f8f",
          "#f8a7a7",
        ];

  return (
    <div className="pie-wrapper">
      <Doughnut
        data={{
          labels: dataCategories,
          datasets: [
            {
              data: dataAmounts,
              backgroundColor: colors,
            },
          ],
        }}
        height={"300px"}
        width={"300px"}
        options={{ maintainAspectRation: true }}
      />
    </div>
  );
};

export default DoughnutData;
