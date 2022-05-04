import { createSlice } from "@reduxjs/toolkit";

export const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    number: "__________", //["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
    count: 0,
    check: undefined,
  },
  reducers: {
    input: (state, numOnButton) => {
      if (state.count < 10) {
        state.number = state.number.replace("_", numOnButton.payload);
        // state.number.splice(state.count, 1, numOnButton.payload)
        state.count += 1;
      }
    },
    deleteLastChar: (state) => {
      if (state.count > 0) {
        state.count -= 1;
        let regexp = /\d/y; // флаг \d - любое число, флаг /y флаг говорящий с какого индекса искать
        regexp.lastIndex = state.count; // с какого места делать замену
        state.number = state.number.replace(regexp, "_");

        // state.count -= 1;
        // state.number.splice(state.count, 1, "_")
      }
    },
    // ГДЕ ПИСАТЬ ЛОГИКУ ТУТ?
    checkNumber: (state, bool) => {
      state.check = bool.payload;

      if (state.number == "0000000000") {
          state.check = false;
      } else {
          state.check = bool.payload;
      }
    }
  },
});

export const { input, deleteLastChar, checkNumber } = phoneSlice.actions;

export default phoneSlice.reducer;
