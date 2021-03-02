export const barData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132,1)",
      borderWidth: 1,
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235,0.3)",
      borderColor: "rgba(54, 162, 235,1)",
      borderWidth: 1,
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(25, 177, 31,0.3)",
      borderColor: "rgba(25, 177, 31,1)",
      borderWidth: 1,
    },
  ],
};
export const lineData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132,1)",
      borderWidth: 1,
      yAxisID: "y-axis-1",
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235,0.3)",
      borderColor: "rgba(54, 162, 235,1)",
      borderWidth: 1,
      yAxisID: "y-axis-2",
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(25, 177, 31,0.3)",
      borderColor: "rgba(25, 177, 31,1)",
      borderWidth: 1,
      yAxisID: "y-axis-3",
    },
  ],
};
export const doughnutData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 99, 132, 0.3)",
        "rgb(54, 162, 235,0.3)",
        "rgba(255, 206, 86, 0.3)",
        "rgb(25, 177, 31,0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgba(255, 159, 64, 0.3)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(25, 177, 31, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const radarData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};
