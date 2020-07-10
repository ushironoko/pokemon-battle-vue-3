import { Ref, UnwrapRef } from 'vue'
export type Pokemon = {
  id: number
  name: string
  baseStatus: BaseStatus
  lv: number
  moveList: MoveList
}

export type PokemonList = Pokemon[]

export type Status = {
  hp: number
  atk: number
  def: number
  spAtk: number
  spDef: number
  sp: number
  acc?: number
  eva?: number
}

export type BaseStatus = Omit<Status, 'acc' | 'eva'>

export type Move = {
  name: string
  type: string
  power: number
  evas: number
  effect?: (args: Ref<any> | UnwrapRef<any>) => any
}

export type MoveList = Move[] | []

export type BattlePokemonStatus = {
  name: string
  status: Status
  move: MoveList
  isVictory: boolean
}

export type BattleStatus = {
  tern: number
  own: BattlePokemonStatus
  enemy: BattlePokemonStatus
}

export const pokemon: PokemonList = [
  {
    id: 145,
    name: 'ギャラドス',
    baseStatus: {
      hp: 95,
      atk: 125,
      def: 79,
      spAtk: 60,
      spDef: 100,
      sp: 81,
    },
    lv: 50,
    moveList: [
      {
        name: 'earthquake',
        type: 'ground',
        power: 100,
        evas: 100,
      },
      {
        name: 'outrage',
        type: 'dragon',
        power: 120,
        evas: 100,
      },
    ],
  },
  {
    id: 194,
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
        name: 'thunderbolt',
        type: 'electric',
        power: 90,
        evas: 100,
        effect: (enemy: BattlePokemonStatus) => enemy.status.hp - 100,
      },
      {
        name: 'drainingkiss',
        type: 'electric',
        power: 90,
        evas: 100,
      },
    ],
  },
]
