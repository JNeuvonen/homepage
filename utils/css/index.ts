export const enableBlur = () => {
  const blur: HTMLElement | null = document.getElementById('blur')
  blur!.style!.display = 'flex'
}
export const disableBlur = () => {
  const blur: HTMLElement | null = document.getElementById('blur')
  blur!.style!.display = 'none'
}

export const enableSidenav = (delay: boolean, bp850: boolean) => {
  const nav = document.getElementsByClassName('side-nav')[0] as HTMLElement
  const layout = document.getElementsByClassName('layout')[0] as HTMLElement

  nav!.style!.paddingLeft = '10px'
  nav!.style!.paddingTop = '40px'
  nav!.style!.paddingRight = '10px'
  navLinkPaddingExpand()

  if (delay) {
    nav.style.transition = '1s cubic-bezier(0.075, 0.82, 0.165, 1)'
    layout.style.transition = '1s cubic-bezier(0.075, 0.82, 0.165, 1)'
  } else {
    nav.style.transition = '0s'
    layout.style.transition = '0s'
  }
  nav.style.width = '190px'
  if (!bp850) {
    layout.style.marginLeft = '190px'
  }
  rotate180DegCounterClockWise()
}

export const disableSideNav = (
  delay: boolean,
  bp: boolean,
  manualClick: boolean
) => {
  disableBlur()
  const nav = document.getElementsByClassName('side-nav')[0] as HTMLElement
  const layout = document.getElementsByClassName('layout')[0] as HTMLElement

  if (bp) {
    if (!delay) {
      nav.style.transition = '0s'
    } else {
      nav.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'
    }
    nav.style.width = '0px'
    nav.style.padding = '0px'
  }

  if (manualClick) {
    nav.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'
    nav.style.width = '0px'
    nav.style.padding = '0px'
  }
  layout.style.marginLeft = '0px'
  rotate180DegClockWise()
}

export const shrinkNav = () => {
  const nav = document.getElementsByClassName('side-nav')[0] as HTMLElement
  const layout = document.getElementsByClassName('layout')[0] as HTMLElement

  nav.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'
  layout.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'

  nav.style.width = '55px'
  nav.style.paddingLeft = '4px'
  nav.style.paddingRight = '4px'
  layout.style.marginLeft = '55px'

  navLinkPaddingReduce()
  rotate180DegClockWise()
}

export const expandNav = () => {
  const nav = document.getElementsByClassName('side-nav')[0] as HTMLElement
  const layout = document.getElementsByClassName('layout')[0] as HTMLElement

  nav.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'
  layout.style.transition = '1s cubic-bezier(0.66, 0.89, 0.23, 1.01)'

  nav.style.width = '190px'
  nav.style.paddingLeft = '10px'
  nav.style.paddingRight = '10px'
  layout.style.marginLeft = '190px'
  navLinkPaddingExpand()
  rotate180DegCounterClockWise()
}

export const navLinkPaddingReduce = () => {
  const navLinks = document.getElementsByClassName('nav-link')
  for (let i = 0; i < navLinks.length; i++) {
    const elem = navLinks[i] as HTMLElement
    elem.style.paddingLeft = '2px'
    elem.style.paddingRight = '2px'
    elem.style.paddingTop = '10px'
    elem.style.paddingBottom = '10px'
  }
}

export const navLinkPaddingExpand = () => {
  const navLinks = document.getElementsByClassName('nav-link')
  for (let i = 0; i < navLinks.length; i++) {
    const elem = navLinks[i] as HTMLElement
    elem.style.paddingLeft = '20px'
    elem.style.paddingRight = '0px'
    elem.style.paddingTop = '13px'
    elem.style.paddingBottom = '13px'
  }
}

export const rotate180DegClockWise = () => {
  const elem = document.getElementById('chevron-left') as HTMLElement
  elem.style.transform = 'rotate(180deg)'
}

export const rotate180DegCounterClockWise = () => {
  const elem = document.getElementById('chevron-left') as HTMLElement
  elem.style.transform = 'rotate(0deg)'
}
