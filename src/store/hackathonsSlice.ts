import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { find, isEmpty } from "lodash";
import { Hackathon } from "../types/types";
import { hackathons } from "../mock/hackathons";

interface HackathonState {
  hackathons: Hackathon[];
}

const initialState: HackathonState = {
  hackathons: hackathons,
};

export const hackathonsSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {
    addHackathon: (state, action: PayloadAction<Hackathon>) => {
      state.hackathons.push(action.payload);
    },
    editHackathon: (state, action: PayloadAction<Hackathon>) => {
      const hackathon = find(state.hackathons, { id: action.payload.id });
      if (!isEmpty(hackathon)) {
        const index = state.hackathons.indexOf(hackathon as Hackathon);
        state.hackathons[index] = action.payload as Hackathon;
        state.hackathons = [...state.hackathons];
      }
    },
    deleteHackathon: (state, action: PayloadAction<Hackathon>) => {
      const hackathon = state.hackathons.find(
        (hackathon) => hackathon.id === action.payload.id,
      );
      if (hackathon) {
        const index = state.hackathons.indexOf(hackathon);
        state.hackathons.splice(index, 1);
      }
    },
  },
});

export const { addHackathon, editHackathon, deleteHackathon } =
  hackathonsSlice.actions;

export default hackathonsSlice.reducer;
