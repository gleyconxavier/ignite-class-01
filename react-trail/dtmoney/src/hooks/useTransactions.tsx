import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

// Creating a new type based on a pre existent type minus some fields
// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// Creating a new type based on a pre existent type picking only some fields
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(res => setTransactions(res.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionsContext);
}
