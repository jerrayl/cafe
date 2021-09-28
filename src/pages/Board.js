import React, { useState } from 'react';
import images from '../components/images';

function Board() {

  const [items, setItems] = useState(Array(100).fill(""));
  const light_mage_images = ["light_mage", "mirror_BL_TR", "mirror_TL_BR"]
  const shadow_ninja_images = ["shadow_ninja", "kawarimi"]
  const nature_druid_images = ["nature_druid", "tree"]
  const flame_shaman_images = ["flame_shaman", "totem"]
  const general_images = ["portal_u", "portal_d", "portal_l", "portal_r"]
  const options = [...general_images, ...light_mage_images, ...shadow_ninja_images, ...nature_druid_images, ...flame_shaman_images];

  const cycle = (i) => {
    setItems(currItems => currItems.map((item, index) => (index == i) ? (item === "") ? options[0] : options.indexOf(item) === options.length + 1 ? options[0] : options[options.indexOf(item) + 1] : item));
  }

  const clear = (e, i) => {
    e.preventDefault();
    setItems(currItems => currItems.map((item, index) => (index == i) ? "" : item));
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="pl-24 pr-24 grid grid-cols-10 gap-2">
          {items.map((item, i) => <div onClick={() => cycle(i)} onContextMenu={(e) => clear(e, i)} className="w-16 h-16 border-2 border-gray-900 flex justify-center">{item && <img className="h-5/5" alt="illustration" src={images[item]} />}</div>)}
        </div>
      </div>
    </>
  );
}

export default Board;
