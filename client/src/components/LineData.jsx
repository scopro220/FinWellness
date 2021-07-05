import React from "react";
import { Line } from "react-chartjs-2";

const LineData = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Income",
              data: [
                1234, 1654, 1544, 1234, 1654, 1544, 1234, 1654, 1544, 1234,
                1654, 1544,
              ],
              backgroundColor: "#2dc02d",
              borderColor: "#2dc02d",
            },
            {
              label: "Expense",
              data: [
                1134, 1154, 1144, 1134, 954, 1744, 634, 654, 544, 834, 1054,
                1444,
              ],
              backgroundColor: "#e94444",
              borderColor: "#e94444",
            },
          ],
        }}
        width={"1280px"}
        height={"400px"}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default LineData;
