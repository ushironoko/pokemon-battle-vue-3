import {
  PokemonList,
  Status,
  BaseStatus,
  BattleStatus,
  BattlePokemonStatus,
  MoveList,
} from '../config/pokemon'
import { reactive, InjectionKey, inject, readonly } from 'vue'

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

export const createBattlePokemon = (name = '', s?: Status, m?: MoveList) => {
  const battlePoke: BattlePokemonStatus = {
    name,
    status: s || createEmptyStatus(),
    move: m || [],
    isVictory: false,
  }
  return battlePoke
}

export const createBattleStatus = () => {
  const battleStatus: BattleStatus = {
    tern: 0,
    own: createBattlePokemon(),
    enemy: createBattlePokemon(),
  }
  return reactive<BattleStatus>(battleStatus)
}

export const useBattel = () => {
  const battleStatus = inject(battleStatusSymbol)
  if (!battleStatus) {
    throw new Error('useBattel() is called without provider.')
  }
  const readOnlyBattleStatus = readonly<BattleStatus>(battleStatus)
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

function createEmptyStatus() {
  const emptyBaseStatus: BaseStatus = {
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    sp: 0,
  }
  return useStatus(emptyBaseStatus)
}

export const useStatus = (baseStatus: BaseStatus) => {
  const hp = calcHp(baseStatus.hp)
  const atk = calcABCDS(baseStatus.atk)
  const def = calcABCDS(baseStatus.def)
  const spAtk = calcABCDS(baseStatus.spAtk)
  const spDef = calcABCDS(baseStatus.spDef)
  const sp = calcABCDS(baseStatus.sp)
  const acc = 100
  const eva = 100
  return reactive<Status>({
    hp,
    atk,
    def,
    spAtk,
    spDef,
    sp,
    acc,
    eva,
  })
}
