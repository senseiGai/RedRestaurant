import { create } from 'zustand';

interface ITableStore {
    table: number | string
    setTable: (table: number | string) => void
}

export const useTableStore = create<ITableStore>((set) => ({
    table: '-',
    setTable: (table) => set({ table: table })
}))