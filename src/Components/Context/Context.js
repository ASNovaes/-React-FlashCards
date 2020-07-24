import React, { useState, useEffect, createContext } from 'react';

export const ContextCard = createContext();

const ITEMS = [
    {
        id: 1,
        question: '',
        answer: '',
    },
];

export default function ContextProvider({ children }) {

    const [cards, setCards] = useState([]);

    return (
        <>
            <ContextCard.Provider value={{cards, setCards}}>
                {children}
            </ContextCard.Provider>
        </>
    )
} 