import { create } from 'zustand'

interface ITabButtonStoreProps {
    active: string
    setActive: (active: string) => void
}

export const useTabButtonStore = create<ITabButtonStoreProps>((set) => ({
    active: 'Menu',
    setActive: (active: string) => set({ active })
}))