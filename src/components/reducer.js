export const initialState = {
  piedata: [12, 19, 3, 5, 2, 3],
  doughnutdata: [12, 19, 3, 5, 2, 3],
  radardata: [2, 9, 3, 5, 2, 3],
  data1: [12, 19, 3, 5, 2, 3],
  data2: [2, 3, 20, 5, 1, 4],
  data3: [3, 10, 13, 15, 22, 30],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        piedata: action.piedata,
        doughnutdata: action.doughnutdata,
        radardata: action.radardata,
        data1: action.data1,
        data2: action.data2,
        data3: action.data3,
      };
    default:
      return state;
  }
};

export default reducer;
