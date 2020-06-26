import { Pokemon, BaseStatus } from '../config/pokemon'

const IV = 31
const EV = 0
const LV = 50
const Nature = 1

export const useHp = (hp: number): number => {
  return Math.floor(((hp * 2 + IV + EV / 4) * LV) / 100 + 10 + LV)
}

export const useABCDS = (baseStatus: number): number => {
  return Math.floor(((baseStatus * 2 + IV + EV / 4) * LV) / 100 + 5 * Nature)
}

export const useStatus = (pokemon: Pokemon): BaseStatus => {
  const hp = useHp(pokemon.baseStatus.hp)
  const atk = useABCDS(pokemon.baseStatus.atk)
  const def = useABCDS(pokemon.baseStatus.def)
  const spAtk = useABCDS(pokemon.baseStatus.spAtk)
  const spDef = useABCDS(pokemon.baseStatus.spDef)
  const sp = useABCDS(pokemon.baseStatus.sp)
  const status = {
    hp,
    atk,
    def,
    spAtk,
    spDef,
    sp,
  } as BaseStatus

  return status
}
