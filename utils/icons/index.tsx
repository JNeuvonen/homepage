export const HomeIcon = ({
  fill,
  width,
  height,
}: {
  fill: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" />
    </svg>
  )
}

export const MailIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <path d="M 0 7 L 0 43 L 50 43 L 50 7 Z M 46 16.273438 L 25 28.179688 L 4 16.273438 L 4 13.914063 L 25 25.820313 L 46 13.914063 Z" />
    </svg>
  )
}

export const MenuIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
    >
      <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
    </svg>
  )
}

export const ChevronLeft = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
      className="chevron-left"
      id="chevron-left"
    >
      {' '}
      <path d="M17,3h2c0.386,0,0.738,0.223,0.904,0.572s0.115,0.762-0.13,1.062L11.292,15l8.482,10.367 c0.245,0.299,0.295,0.712,0.13,1.062S19.386,27,19,27h-2c-0.3,0-0.584-0.135-0.774-0.367l-9-11c-0.301-0.369-0.301-0.898,0-1.267 l9-11C16.416,3.135,16.7,3,17,3z" />
    </svg>
  )
}

export const SourceCodeIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <path d="M 29.125 7.34375 L 17.125 41.34375 L 20.875 42.65625 L 32.875 8.65625 Z M 9.9375 13.375 L 1.25 23.71875 L 0.1875 25 L 1.25 26.28125 L 9.9375 36.65625 L 13.03125 34.09375 L 5.40625 25 L 13 15.9375 Z M 40.0625 13.375 L 37 15.9375 L 44.59375 25 L 37 34.0625 L 40.09375 36.625 L 48.71875 26.28125 L 49.78125 25 L 48.71875 23.71875 Z" />
    </svg>
  )
}

export const ResumeIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <path d="M 7 2 L 7 48 L 43 48 L 43 2 Z M 16.445313 14.929688 C 16.480469 14.53125 16.445313 14.257813 16.445313 13.894531 C 16.265625 13.796875 15.761719 13.289063 15.683594 12.71875 C 15.683594 12.71875 15.277344 12.523438 15.253906 11.914063 C 15.242188 11.589844 15.46875 11.359375 15.46875 11.359375 C 15.046875 9.730469 15.230469 8.039063 17.410156 8 C 17.953125 8 18.363281 8.261719 18.527344 8.550781 C 20.042969 8.550781 19.648438 10.664063 19.421875 11.359375 C 19.503906 11.445313 19.609375 11.679688 19.609375 11.992188 C 19.609375 12.445313 19.179688 12.71875 19.179688 12.71875 C 19.097656 13.296875 18.691406 13.773438 18.445313 13.890625 C 18.445313 14.253906 18.40625 14.53125 18.445313 14.929688 C 18.875 16.089844 21.753906 15.761719 21.890625 18 L 13 18 C 13.132813 15.761719 16.011719 16.089844 16.445313 14.929688 Z M 28 39 L 14 39 C 13.449219 39 13 38.554688 13 38 C 13 37.445313 13.449219 37 14 37 L 28 37 C 28.554688 37 29 37.445313 29 38 C 29 38.554688 28.554688 39 28 39 Z M 13 32 C 13 31.445313 13.449219 31 14 31 L 25 31 C 25.550781 31 26 31.445313 26 32 C 26 32.554688 25.550781 33 25 33 L 14 33 C 13.449219 33 13 32.554688 13 32 Z M 28 27 L 14 27 C 13.449219 27 13 26.554688 13 26 C 13 25.449219 13.449219 25 14 25 L 28 25 C 28.554688 25 29 25.449219 29 26 C 29 26.554688 28.554688 27 28 27 Z M 36 39 L 33 39 C 32.445313 39 32 38.554688 32 38 C 32 37.445313 32.445313 37 33 37 L 36 37 C 36.554688 37 37 37.445313 37 38 C 37 38.554688 36.554688 39 36 39 Z M 36 33 L 33 33 C 32.445313 33 32 32.554688 32 32 C 32 31.445313 32.445313 31 33 31 L 36 31 C 36.554688 31 37 31.445313 37 32 C 37 32.554688 36.554688 33 36 33 Z M 36 27 L 33 27 C 32.445313 27 32 26.554688 32 26 C 32 25.449219 32.445313 25 33 25 L 36 25 C 36.554688 25 37 25.449219 37 26 C 37 26.554688 36.554688 27 36 27 Z M 36 17 L 28 17 C 27.445313 17 27 16.550781 27 16 C 27 15.449219 27.445313 15 28 15 L 36 15 C 36.554688 15 37 15.449219 37 16 C 37 16.550781 36.554688 17 36 17 Z M 36 12 L 28 12 C 27.445313 12 27 11.550781 27 11 C 27 10.449219 27.445313 10 28 10 L 36 10 C 36.554688 10 37 10.449219 37 11 C 37 11.550781 36.554688 12 36 12 Z" />
    </svg>
  )
}

export const SubscribeIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
    >
      <path d="M 0 7 L 0 43 L 50 43 L 50 7 Z M 46 16.273438 L 25 28.179688 L 4 16.273438 L 4 13.914063 L 25 25.820313 L 46 13.914063 Z" />
    </svg>
  )
}

export const StarIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      {' '}
      <path d="M12,17.877L18.831,22l-1.813-7.77l6.035-5.228l-7.947-0.674L12,1L8.894,8.328L0.947,9.002l6.035,5.228L5.169,22L12,17.877z" />
    </svg>
  )
}

export const ChevronDown = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
    >
      {' '}
      <path d="M3,12v-2c0-0.386,0.223-0.738,0.572-0.904s0.762-0.115,1.062,0.13L15,17.708l10.367-8.482 c0.299-0.245,0.712-0.295,1.062-0.13C26.779,9.261,27,9.614,27,10v2c0,0.3-0.135,0.584-0.367,0.774l-11,9 c-0.369,0.301-0.898,0.301-1.267,0l-11-9C3.135,12.584,3,12.3,3,12z" />
    </svg>
  )
}

export const CancelIcon = ({
  fill,
  width,
  height,
}: {
  fill?: string
  width: number
  height: number
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M19.707,4.293a1,1,0,0,0-1.414,0L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414L13.414,12l6.293-6.293A1,1,0,0,0,19.707,4.293Z" />
    </svg>
  )
}
