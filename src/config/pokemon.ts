export type Pokemon = {
  name: string
  baseStatus: BaseStatus
  lv: number
  moveList: MoveList
}

export type PokemonList = Pokemon[]

export type BaseStatus = {
  hp: number
  atk: number
  def: number
  spAtk: number
  spDef: number
  sp: number
}

export type Move = {
  [k: string]: {
    type: string
    power: number
  }
}

export type MoveList = Move[]

export const pokemon: PokemonList = [
  {
    name: 'ガブリアス',
    baseStatus: {
      hp: 108,
      atk: 130,
      def: 95,
      spAtk: 80,
      spDef: 85,
      sp: 102,
    },
    lv: 50,
    moveList: [
      {
        earthQuake: {
          type: 'ground',
          power: 100,
        },
        outrage: {
          type: 'dragon',
          power: 120,
        },
      },
    ],
  },
  {
    name: 'ピカチュウ',
    baseStatus: {
      hp: 35,
      atk: 55,
      def: 40,
      spAtk: 50,
      spDef: 55,
      sp: 90,
    },
    lv: 50,
    moveList: [
      {
        thunderBolt: {
          type: 'electric',
          power: 90,
        },
        drainingKiss: {
          type: 'electric',
          power: 90,
        },
      },
    ],
  },
]
