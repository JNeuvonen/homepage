export interface LayoutProps {
  children: JSX.Element
  darkMode: boolean
  setDarkMode: Function
}

export interface NavLinkProps {
  text: string
  icon: JSX.Element
}

export interface SkillType {
  skill: string
  stars: number
}
