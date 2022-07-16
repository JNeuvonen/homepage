import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//@ts-ignore
import { Link } from '../../routes'
import {
  COLOR_BODY,
  NAV_LINK_ACTIVATED,
  NAV_LINK_COLOR,
} from '../../utils/constants'
import {
  disableBlur,
  disableSideNav,
  enableBlur,
  enableSidenav,
  expandNav,
  shrinkNav,
} from '../../utils/css'
import {
  ChevronLeft,
  HomeIcon,
  MailIcon,
  MenuIcon,
  NotificationIcon,
  ResumeIcon,
  SourceCodeIcon,
  SubscribeIcon,
} from '../../utils/icons'

interface LinkTypes {
  text: string
  icon: JSX.Element
  route: string
}

const Nav = () => {
  const bp850 = useMediaQuery('(max-width:850px)')
  const router = useRouter().pathname
  const [navShrinked, setNavShrinked] = useState(false)

  const headers = [
    {
      text: 'Home',
      icon: <HomeIcon fill={NAV_LINK_COLOR} width={18} height={18} />,
      route: '/',
    },
    {
      text: 'Contact',
      icon: <MailIcon fill={NAV_LINK_COLOR} width={18} height={18} />,
      route: '/contact',
    },
    {
      text: 'Projects',
      icon: <SourceCodeIcon fill={NAV_LINK_COLOR} width={18} height={18} />,
      route: '/projects',
    },
    {
      text: 'Resume',
      icon: <ResumeIcon fill={NAV_LINK_COLOR} width={18} height={18} />,
      route: '/resume',
    },
    {
      text: 'Subscribe',
      icon: <NotificationIcon fill={NAV_LINK_COLOR} width={18} height={18} />,
      route: '/subscribe',
    },
  ]

  useEffect(() => {
    const blur: HTMLElement | null = document.getElementById('blur')
    blur!.addEventListener('click', (e) => {
      disableBlur()
      disableSideNav(true, bp850, true)
    })
  }, [])

  useEffect(() => {
    if (bp850) {
      disableBlur()
      disableSideNav(false, bp850, false)
      setNavShrinked(false)
    } else {
      disableBlur()
      enableSidenav(false, bp850)
      setNavShrinked(false)
    }
  }, [bp850])

  useEffect(() => {
    if (bp850) {
      disableSideNav(true, bp850, true)
      disableBlur()
    }
  }, [router])

  const enableNav = () => {
    enableBlur()
    enableSidenav(true, bp850)
  }

  const closeNavClick = () => {
    if (!bp850) {
      if (navShrinked) {
        expandNav()
        setNavShrinked(false)
      } else {
        shrinkNav()
        setNavShrinked(true)
      }
    } else {
      disableSideNav(true, bp850, true)
      disableBlur()
    }
  }

  const renderLink = ({ linkItem }: { linkItem: LinkTypes }) => {
    const activatedStyles = linkItem.route === router ? true : false
    return (
      <Link route={linkItem.route} key={linkItem.text}>
        <div
          className="nav-link"
          style={{
            backgroundColor: activatedStyles ? NAV_LINK_ACTIVATED : undefined,
          }}
        >
          <div
            className={
              !navShrinked
                ? 'flex-box align-items-center'
                : 'flex-box align-items-center content-center'
            }
            style={{
              columnGap: 13,
            }}
          >
            {linkItem.icon}

            {!navShrinked && <span>{linkItem.text}</span>}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <>
      {bp850 && (
        <button
          className="flex-box align-items-center column-gap lg-icon-button left-corner cursor-pointer"
          style={{ padding: '7px', left: 20, top: 20, zIndex: 5 }}
          onClick={enableNav}
        >
          <MenuIcon width={20} height={20} fill={COLOR_BODY} />
          <span
            style={{
              fontSize: 17,
              marginBottom: -2,
              color: COLOR_BODY,
              fontWeight: 600,
            }}
          >
            Menu
          </span>
        </button>
      )}

      <nav
        className="side-nav flex-box flex-direction-column"
        id="side-nav"
        style={{ rowGap: 15 }}
      >
        {headers.map((item: LinkTypes) => {
          return renderLink({ linkItem: item })
        })}

        <div
          className="side-nav__close-div flex-box align-items-center"
          onClick={closeNavClick}
        >
          <div
            className="side-nav-close"
            style={{
              width: 'max-content',
              height: 'max-content',
              right: 7,
              position: 'absolute',
            }}
          >
            <ChevronLeft width={21} height={21} />
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav
