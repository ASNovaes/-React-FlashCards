import React, { useState, useEffect, createContext } from 'react';


export const ContextCard = createContext();

export default function ContextProvider({ children }) {

    const [listName, setListName] = useState({ codTopic: new Date().getTime(), listTitle: '', listDescription: '' });
    const [cards, setCards] = useState([]);
//{ id: new Date().getTime(), question: '', defintion: '' }
    return (
        <>
            <ContextCard.Provider value={{ cards, setCards, listName, setListName }}>
                {children}
            </ContextCard.Provider>
        </>
    );
}
