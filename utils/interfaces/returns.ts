export interface LayoutProps {
  children: JSX.Element
  darkMode: boolean
  setDarkMode: Function
  infoMessage: string | null
  infoMessageTimeout: number | null
  setInfoMessageTimeout: Function
  setInfoMessage: Function
  infoMessageType: string
  updateInfoMessage: Function
}

export interface ComponentPropTypes {
  darkMode: string
  updateInfoMessage: Function
  emailService: string
  emailTemplate: string
  emailSecret: string
}

export interface NavLinkProps {
  text: string
  icon: JSX.Element
}

export interface SkillType {
  skill: string
  stars: number
}
