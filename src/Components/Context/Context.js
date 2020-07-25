import React, { useState, useEffect, createContext } from 'react';

export const ContextCard = createContext();

export default function ContextProvider({ children }) {

    const [cards, setCards] = useState([]);
    const [listName, setListName] = useState({ cod: '', listTitle: '', listDescription: '' });
    const [listsCards, setListsCards] = useState(); //TEMP

    useEffect(() => {
        setListsCards([listName, ...cards])

    }, [cards, listName]);

    return (
        <>
            <ContextCard.Provider value={{ cards, setCards, listName, setListName, listsCards }}>
                {children}
            </ContextCard.Provider>
        </>
    );
} 