import { createSlice } from "@reduxjs/toolkit";

export const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    number: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"], //"(___)___-__-__",
    count: 0,
  },
  reducers: {
    input: (state, numOnButton) => {
      if (state.count < 10) {
        // state.number = state.number.replace("_", numOnButton.payload);
        state.number.splice(state.count, 1, numOnButton.payload)
        state.count += 1;
        console.log(state.count);
      }
    },
    deleteLastChar: (state) => {
      if (state.count > 0) {
        // let regexp = /\d/y; // флаг \d - любое число, флаг /y флаг говорящий с какого индекса искать
        // regexp.lastIndex = state.count; // с какого места делать замену
        // state.number = state.number.replace(regexp, "_");
        state.count -= 1;
        state.number.splice(state.count, 1, "_")
        console.log(state.count);
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { input, deleteLastChar, incrementByAmount } = phoneSlice.actions;

export default phoneSlice.reducer;
