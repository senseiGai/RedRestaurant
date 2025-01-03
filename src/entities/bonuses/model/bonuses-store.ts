import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface BonusesStore {
    bonusCount: number;
    usedBonuses: boolean[];
    isModalVisible: boolean;
    inputCode: string;
    isError: boolean;
    setBonusCount: (count: number) => void;
    setModalVisible: (visible: boolean) => void;
    setInputCode: (code: string) => void;
    setError: (error: boolean) => void;
    validateCode: (code: string) => Promise<boolean>;
    incrementBonus: () => void;
    initializeBonuses: () => Promise<void>;
    resetBonuses: () => Promise<void>;
}

export const useBonusesStore = create<BonusesStore>((set, get) => ({
    bonusCount: 0,
    usedBonuses: Array(10).fill(false),
    isModalVisible: false,
    inputCode: '',
    isError: false,

    setBonusCount: async (count) => {
        await AsyncStorage.setItem('bonusCount', count.toString())
        set({ bonusCount: count })
    },

    setModalVisible: (visible) => set({ isModalVisible: visible }),
    
    setInputCode: (code) => set({ inputCode: code }),

    setError: (error) => set({ isError: error }),

    validateCode: async (code) => {
        const validCode = 'BURGER123'
        if (code === validCode) {
            const { bonusCount, usedBonuses } = get()
            const newUsedBonuses = [...usedBonuses]
            newUsedBonuses[bonusCount] = true
            
            await AsyncStorage.setItem('usedBonuses', JSON.stringify(newUsedBonuses))
            set({ usedBonuses: newUsedBonuses, isError: false })
            
            await get().incrementBonus()
            return true
        }
        set({ isError: true })
        return false
    },

    incrementBonus: async () => {
        const { bonusCount } = get()
        if (bonusCount < 5) {
            const newCount = bonusCount + 1
            await AsyncStorage.setItem('bonusCount', newCount.toString())
            set({ bonusCount: newCount })
        }
    },

    resetBonuses: async () => {
        await AsyncStorage.multiRemove(['bonusCount', 'usedBonuses'])
        set({
            bonusCount: 0,
            usedBonuses: Array(10).fill(false),
            isError: false,
            inputCode: '',
            isModalVisible: false
        })
    },

    initializeBonuses: async () => {
        try {
            const storedCount = await AsyncStorage.getItem('bonusCount')
            const storedUsedBonuses = await AsyncStorage.getItem('usedBonuses')
            
            set({
                bonusCount: storedCount ? parseInt(storedCount) : 0,
                usedBonuses: storedUsedBonuses ? JSON.parse(storedUsedBonuses) : Array(10).fill(false)
            })
        } catch (error) {
            console.error('Error initializing bonuses:', error)
        }
    }
}))
