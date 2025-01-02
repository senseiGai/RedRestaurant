import { create } from 'zustand'

export interface CartItem {
    id: number;
    image: any;
    title: string;
    subtitle: string;
    price: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'quantity' | 'id'>) => void;
    removeItem: (id: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    getSubtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    addItem: (item) => {
        set((state) => {
            const existingItem = state.items.find(
                (i) => i.title === item.title && i.subtitle === item.subtitle
            );

            if (existingItem) {
                return {
                    items: state.items.map((i) =>
                        i.id === existingItem.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }

            return {
                items: [
                    ...state.items,
                    {
                        ...item,
                        id: Date.now(),
                        quantity: 1,
                    },
                ],
            };
        });
    },
    removeItem: (id) => {
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        }));
    },
    incrementQuantity: (id) => {
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        }));
    },
    decrementQuantity: (id) => {
        set((state) => {
            const item = state.items.find((i) => i.id === id);
            if (item && item.quantity === 1) {
                return {
                    items: state.items.filter((i) => i.id !== id),
                };
            }
            return {
                items: state.items.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        });
    },
    getSubtotal: () => {
        return get().items.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price * item.quantity;
        }, 0);
    },
}));
