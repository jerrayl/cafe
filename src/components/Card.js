import React, { useEffect, useState, useContext } from 'react';
import images from "./images";


function Card({cardinfo, selected, onSelect}) {
  return (
    <>
        <div className={"mb-10 m-2 shadow-lg bg-card rounded-sm w-1/6" + (selected ? " border-4 border-red-500" : "")} onClick={onSelect}>
          <div className="info-box flex p-1 bg-yellow-900 bg-opacity-50 rounded-t-sm">
            <h2 className="title text-gray-100 font-bold block text-lg pl-1">{cardinfo.title}</h2>
            <div className="w-14 h-14 m-2 bg-manaorb top-0 right-0 absolute"></div>
          </div>
          <div className="bg-yellow-900 bg-opacity-50 flex justify-center">
          <img className="w-4/5" alt="illustration" src={images[cardinfo.image]}/>
          </div>
          <div className="desc p-4 text-gray-800">
          {cardinfo.tags?.map((tag, i) => <a key={i} className="badge bg-indigo-500 text-blue-100 rounded px-2 py-1 text-xs font-bold cursor-pointer mr-2">{tag}</a>)}
            <span className="description text-md text-blue-800 font-semibold block py-2 border-gray-400 mb-2 h-28">{cardinfo.description}</span>
          </div>
          <div className="info-box text-xs flex p-1 font-semibold bg-gray-700 bg-opacity-50 rounded-b-sm">
          <span className="mr-1 p-1 px-2 font-bold text-gray-100 h-16">{cardinfo.flavor}</span>
          </div>
        </div>
    </>
  );
}

export default Card;
