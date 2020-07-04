import { reactive, InjectionKey, inject } from 'vue'
import { PokemonList, Pokemon, BaseStatus } from '../config/pokemon'

const IV = 31
const EV = 0
const LV = 50
const Nature = 1

export const pokemonsSymbol: InjectionKey<PokemonList> = Symbol()

export const usePokemons = () => {
  const list = inject(pokemonsSymbol)
  if (!list) {
    throw new Error('usePokemons() is called without provider.')
  }
  return list
}

export const calcHp = (hp: number) => {
  return Math.floor(((hp * 2 + IV + EV / 4) * LV) / 100 + 10 + LV)
}

export const calcABCDS = (baseStatus: number) => {
  return Math.floor(((baseStatus * 2 + IV + EV / 4) * LV) / 100 + 5 * Nature)
}

export const useStatus = (pokemon: Pokemon) => {
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
  }) as BaseStatus
}

export const useGigantaMax = (baseStatus: BaseStatus) => {
  baseStatus.hp = baseStatus.hp * 2
}
