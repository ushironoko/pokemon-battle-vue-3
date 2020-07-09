import { reactive, InjectionKey, inject, readonly } from 'vue'
import {
  PokemonList,
  Pokemon,
  Status,
  BattleStatus,
  BattlePokemonStatus,
  MoveList,
} from '../config/pokemon'

const IV = 31
const EV = 0
const LV = 50
const Nature = 1

export declare type SetOwnEnemy = (
  battlepokemonStatus: BattlePokemonStatus,
) => BattlePokemonStatus

export const pokemonsSymbol: InjectionKey<PokemonList> = Symbol()
export const battleStatusSymbol: InjectionKey<BattleStatus> = Symbol()

export const usePokemons = () => {
  const list = inject(pokemonsSymbol)
  if (!list) {
    throw new Error('usePokemons() is called without provider.')
  }
  return list
}

export const createBattlePokemon = (n?: string, s?: Status, m?: MoveList) => {
  const battlePoke: BattlePokemonStatus = {
    name: n || '',
    status: s || null,
    move: m || [],
    isVictory: false,
  }
  return battlePoke
}

export const createBattleStatus = (): BattleStatus => {
  const battleStatus: BattleStatus = {
    tern: 0,
    own: createBattlePokemon(),
    enemy: createBattlePokemon(),
  }
  return reactive(battleStatus)
}

export const useBattel = () => {
  const battleStatus = inject(battleStatusSymbol)
  if (!battleStatus) {
    throw new Error('useBattel() is called without provider.')
  }
  const readOnlyBattleStatus = readonly(battleStatus)
  const setOwn = (own: BattlePokemonStatus) => (battleStatus.own = own)
  const setEnemy = (enemy: BattlePokemonStatus) => (battleStatus.enemy = enemy)
  const countUpTern = () => battleStatus.tern++
  return { readOnlyBattleStatus, setOwn, setEnemy, countUpTern }
}

export const calcHp = (hp: number) => {
  return Math.floor(((hp * 2 + IV + EV / 4) * LV) / 100 + 10 + LV)
}

export const calcABCDS = (baseStatus: number) => {
  return Math.floor(((baseStatus * 2 + IV + EV / 4) * LV) / 100 + 5 * Nature)
}

export const useStatus = (pokemon: Pokemon): Status => {
  const hp = calcHp(pokemon.baseStatus.hp)
  const atk = calcABCDS(pokemon.baseStatus.atk)
  const def = calcABCDS(pokemon.baseStatus.def)
  const spAtk = calcABCDS(pokemon.baseStatus.spAtk)
  const spDef = calcABCDS(pokemon.baseStatus.spDef)
  const sp = calcABCDS(pokemon.baseStatus.sp)
  return reactive({
    hp,
    atk,
    def,
    spAtk,
    spDef,
    sp,
  })
}
