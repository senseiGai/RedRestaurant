import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface BonusesStore {
    bonusCount: number;
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
}

export const useBonusesStore = create<BonusesStore>((set, get) => ({
    bonusCount: 0,
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
        const isValid = code === validCode

        if (isValid) {
            const currentCount = get().bonusCount
            await get().setBonusCount(currentCount + 1)
            set({ isError: false, isModalVisible: false, inputCode: '' })
        } else {
            set({ isError: true })
        }

        return isValid
    },

    incrementBonus: () => {
        const currentCount = get().bonusCount
        get().setBonusCount(currentCount + 1)
    },

    initializeBonuses: async () => {
        try {
            const storedCount = await AsyncStorage.getItem('bonusCount')
            if (storedCount !== null) {
                set({ bonusCount: parseInt(storedCount) })
            }
        } catch (error) {
            console.error('Error loading bonus count:', error)
        }
    },
}))
