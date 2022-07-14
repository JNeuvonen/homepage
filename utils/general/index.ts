import { SkillType } from '../interfaces/returns'

export const sortListOfObject = (list: SkillType[], reverse: boolean) => {
  let arrayForSort = [...list]
  if (reverse) {
    return arrayForSort.reverse()
  }
  return arrayForSort
}
