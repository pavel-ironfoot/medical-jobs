import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allData } from "../commons/data";

interface cardsState {
    cards: { id: number, title: string, company: string, text: string, image: any, type: string, city: string, timeLeft: string, salary: number }[];
    
    searchCards: { id: number, title: string, company: string, text: string, image: any, type: string, city: string, timeLeft: string, salary: number }[];
    
    katalogSearchCards: { id: number, title: string, company: string, text: string, image: any, type: string, city: string, timeLeft: string, salary: number }[];
    
    katalogFilterCards: { id: number, title: string, company: string, text: string, image: any, type: string, city: string, timeLeft: string, salary: number }[];

}

const initialState: cardsState = {
    cards: allData,
    searchCards: allData,
    katalogSearchCards: allData,
    katalogFilterCards: allData,
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        updateCards(state, action) {
            state.searchCards = action.payload;
        },
        updateKatalogSearchCards(state, action) {
            state.katalogSearchCards = action.payload;
        },
        updateKatalogFilterCards(state, action) {
            state.katalogFilterCards = action.payload;
        },
    }
});

export default cardsSlice.reducer;
export const { updateCards,updateKatalogSearchCards,updateKatalogFilterCards } = cardsSlice.actions;