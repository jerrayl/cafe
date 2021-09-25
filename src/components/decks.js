const light_mage = [
  {
    title: "Portal",
    image: "portal",
    flavor: "Limited to one pair per player",
    description: "Spells and players passing through a portal emerge from its counterpart",
    tags: ["construct"],
    number: 2
  },
  {
    title: "Arcane blast",
    image: "arcane",
    flavor: "Blocked by physical objects",
    description: "Deal 4 damage to an opponent up to 3 blocks away in any direction (including diagonal).",
    tags: ["attack"],
    number: 4
  },
  {
    title: "Mirror",
    image: "mirror",
    flavor: "Reflects any light spell 90 degrees",
    description: "Places down a mirror in any spaces around the light mage",
    tags: ["construct", "physical"],
    number: 4
  },
  {
    title: "Flip mirrors",
    image: "flip_mirrors",
    flavor: "All flipping must be completed before taking the next movement/casting the next spell",
    description: "Flip all mirrors on the board to the lightmage's preferred orientation",
    tags: ["manipulation"],
    number: 3
  },
  {
    title: "Light warp",
    image: "light_warp",
    flavor: "The lightmage emerges upon encountering a physical object or the edge of the map",
    description: "Transform into light, moving in a straight line (horizontally or vertically)",
    tags: ["movement"],
    number: 5
  },
  {
    title: "Light arrow",
    image: "light_arrow",
    flavor: "Gains an additional 2 damage for each portal pair/mirror this attack interacts with.",
    description: "Fires a light projecile that moves in a straight line (horizontally or vertically), dealing 6 damage upon hitting an opponent.",
    tags: ["attack"],
    number: 8
  },
  {
    title: "Blind",
    image: "blind",
    flavor: "Like other light spells, moves in a straight line (horizontally or vertically)",
    description: "Fires a light projecile that prevents the opponent from performing attacks during their turn upon hit",
    tags: ["stall"],
    number: 4
  }
]
 
const shadow_ninja = [
  {
    title: "Portal",
    image: "portal",
    flavor: "Limited to one pair per player",
    description: "Spells and players passing through a portal emerge from its counterpart.",
    tags: ["construct"]
  },
  {
    title: "Arcane blast",
    image: "arcane",
    flavor: "Blocked by physical objects",
    description: "Deal 4 damage to an opponent up to 3 blocks away in any direction (including diagonal).",
    tags: ["attack"]
  },
  {
    title: "Kawarimi",
    image: "kawarimi",
    flavor: "The ninja re-emerges from any block around a physical object",
    description: "Disappears into the shadows, leaving a wooden log in the ninja's previous position",
    tags: ["construct", "physical", "movement"]
  },
  {
    title: "Shadowclone",
    image: "shadowclone",
    flavor: "If augmented by shadowclone, shadowstep has the range and damage of lunge",
    description: "A following attack can be casted from any physical object, without moving the shadow ninja",
    tags: ["manipulation"]
  },
  {
    title: "Lunge",
    image: "lunge",
    flavor: "Deals 3 additional damage if hitting an opponent from behind",
    description: "Lunges in any direction (horizontal or vertical) 4 blocks, dealing 5 damage upon hitting an opponent",
    tags: ["attack", "movement"]
  },
  {
    title: "Shadowstep",
    image: "shadowstep",
    flavor: "Deals 2 additional damage if hitting an opponent from behind",
    description: "Emerges from the shadow of any physical object, moving up to 2 blocks (horizontal or vertical), dealing 4 damage upon hitting an opponent",
    tags: ["attack", "movement"]
  },
  {
    title: "Cloak of darkness",
    image: "cloak_of_darkness",
    flavor: "Any damage bonuses are also negated",
    description: "Negates one instance of damage in the next turn",
    tags: ["stall"]
  }
]
 
const nature_druid = [
  {
    title: "Portal",
    image: "portal",
    flavor: "Limited to one pair per player",
    description: "Spells and players passing through a portal emerge from its counterpart.",
    tags: ["construct"]
  },
  {
    title: "Arcane blast",
    image: "arcane",
    flavor: "Blocked by physical objects",
    description: "Deal 4 damage to an opponent up to 3 blocks away in any direction (including diagonal).",
    tags: ["attack"]
  },
  {
    title: "Tree",
    image: "tree",
    flavor: "Trees don't do anything special by themself",
    description: "Places down a tree in any block around the nature druid",
    tags: ["construct", "physical"]
  },
  {
    title: "Treant",
    image: "treant",
    flavor: "All movement must be completed before starting the next character movement/spell",
    description: "Transforms a tree into a treant, allowing it to move up to 5 blocks",
    tags: ["manipulation"]
  },
  {
    title: "Concealment",
    image: "concealment",
    flavor: "This spell must be casted as the last in the turn",
    description: "Move to a tree and become untargetable for one turn, emerging from any tree at the start of the next turn",
    tags: ["movement", "stall"]
  },
  {
    title: "Vinelash",
    image: "vinelash",
    flavor: "The same tree can be connected multiple times with vinelash",
    description: "Draw a straight line (vertically or horizontally) from the druid to opponent, redirecting at either a 90 degree angle or passing straight through any tree. Deals 7 damage if it hits an opponent",
    tags: ["attack"]
  },
  {
    title: "Heal",
    image: "heal",
    flavor: "A maximum of 5 health can be healed",
    description: "Heal the nature druid for one point of health for every two trees on the board",
    tags: ["stall"]
  }
]
 
const flame_shaman = [
  {
    title: "Portal",
    image: "portal",
    flavor: "Limited to one pair per player",
    description: "Spells and players passing through a portal emerge from its counterpart.",
    tags: ["construct"]
  },
  {
    title: "Arcane blast",
    image: "arcane",
    flavor: "Blocked by physical objects",
    description: "Deal 4 damage to an opponent up to 3 blocks away in any direction (including diagonal).",
    tags: ["attack"]
  },
  {
    title: "Totem",
    image: "totem",
    flavor: "Totems conduct and amplify the flame shaman's fire spells",
    description: "Places down a totem in any block around the flame druid",
    tags: ["construct", "physical"]
  },
  {
    title: "Resonate",
    image: "resonate",
    flavor: "Cone of flames will maintain the same direction as originally casted by the flame druid",
    description: "The next spell casted by the druid will apply to all totems if it hits a totem",
    tags: ["manipulation"]
  },
  {
    title: "Flameburst",
    image: "flameburst",
    flavor: "Can be casted from any totem instead of the druid",
    description: "Deal 4 damage in all blocks around the flame druid",
    tags: ["attack"]
  },
  {
    title: "Cone of flames",
    image: "cone_of_flames",
    flavor: "Can be casted from any totem instead of the druid",
    description: "Deal 5 fire damage in one block in any direction (horizontal or vertical) and three blocks after that",
    tags: ["attack"]
  },
  {
    title: "Hotfoot",
    image: "hotfoot",
    flavor: "All movement must be completed before starting the next movement or spell",
    description: "If the opponent took fire damage earlier this turn, freely move them up to 5 blocks",
    tags: ["manipulation"]
  }
]

const decks = {
  "light_mage" : light_mage,
  "shadow_ninja": shadow_ninja,
  "nature_druid": nature_druid,
  "flame_shaman": flame_shaman
}

export default decks;
