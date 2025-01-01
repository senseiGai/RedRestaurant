import { create } from 'zustand';

interface IGuestsStore {
    guests: number;
    increment: () => void;
    decrement: () => void;
}

export const useGuestsStore = create<IGuestsStore>((set) => ({
    guests: 0,
    increment: () => set((state) => ({ guests: state.guests + 1 })),
    decrement: () => set((state) => ({ guests: state.guests - 1 })),
}))