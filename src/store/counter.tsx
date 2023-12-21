import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
};

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  fetchUsers: () => Promise<void>;
  users: User[];
  incrementByAmount: (amount: number) => void;
  decrementByAmount: (amount: number) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  users: [],
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  fetchUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    if (response.ok) {
      set({ users: result });
    }
  },
  incrementByAmount: (amount: number) => {
    set((state) => ({ count: state.count + amount }));
  },
  decrementByAmount: (amount: number) => {
    set((state) => ({ count: state.count - amount }));
  },
}));
