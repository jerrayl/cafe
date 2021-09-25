import React, { useEffect, useState, useContext } from 'react';
import decks from '../components/decks';
import Card from '../components/Card';


function Game() {

  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [discard, setDiscard] = useState([]);
  const [selected, setSelected] = useState([]);

  const shuffle = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  useEffect(() => {
    const initial_deck = shuffle(
      decks.light_mage.reduce(
        (arr, card_prototype) => arr.concat(Array(card_prototype.number).fill(card_prototype)), [])
    );
    setDeck(initial_deck.slice(5));
    setHand(initial_deck.slice(0, 5));
  }, []);

  const select = (i) => {
    if (selected.includes(i)){
      setSelected(selected.filter(index => index != i));
    } else {
      setSelected(currSelected => [...currSelected, i]);
    }
  }

  const endTurn = () => {
    if (deck.length < selected.length){
      const temp_deck = shuffle([...discard, ...hand.filter((card, i) => selected.includes(i))]);
      setHand(currHand => [...currHand.filter((card, i) => !selected.includes(i)), ...deck, ...temp_deck.slice(0, selected.length-deck.length)]);
      setDeck(temp_deck.slice(selected.length-deck.length));
      setDiscard([]);
    } else {
      setDiscard(currDiscarded => [...currDiscarded, ...hand.filter((card, i) => selected.includes(i))]); 
      setHand(currHand => [...currHand.filter((card, i) => !selected.includes(i)), ...deck.slice(0, selected.length)]);
      setDeck(currDeck => currDeck.slice(selected.length));  
    }
    setSelected([]);    
  }

  return (
    <>
      <div className="flex justify-center mt-10 items-center">
        {hand.map((cardinfo, i) => <Card key={i} cardinfo={cardinfo} selected={selected.includes(i)} onSelect={() => select(i)}/>)}
      </div>
      <div className="flex justify-around ml-10 mr-10 mb-20">
        <div className="w-24 h-24 text-black font-bold pt-8 pb-10 px-10 rounded bg-discard bg-contain">{discard.length}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={endTurn}>End Turn</button>
        <div className="w-24 h-24 text-black font-bold pt-7 px-10 bg-deck bg-contain">{deck.length}</div>
      </div>
    </>
  );
}

export default Game;
