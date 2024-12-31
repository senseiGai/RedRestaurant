import { create } from 'zustand';

interface IMenuButtonStoreProps {
    active: string;
    setActive: (category: string) => void;
}

export const useMenuButtonStore = create<IMenuButtonStoreProps>((set) => ({
    active: 'Dish',
    setActive: (category: string) => set({ active: category })
}))