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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
    >
      <linearGradient
        id="q0c2dLEp_4LHk~8cW2fATa"
        x1="9.009"
        x2="38.092"
        y1="6.36"
        y2="45.266"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffda1c" />
        <stop offset="1" stopColor="#feb705" />
      </linearGradient>
      <path
        fill="url(#q0c2dLEp_4LHk~8cW2fATa)"
        d="M24.913,5.186l5.478,12.288l13.378,1.413c0.861,0.091,1.207,1.158,0.564,1.737l-9.993,9.005	l2.791,13.161c0.18,0.847-0.728,1.506-1.478,1.074L24,37.141l-11.653,6.722c-0.75,0.432-1.657-0.227-1.478-1.074l2.791-13.161	l-9.993-9.005c-0.643-0.579-0.296-1.646,0.564-1.737l13.378-1.413l5.478-12.288C23.439,4.395,24.561,4.395,24.913,5.186z"
      />
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

export const GithubIcon = ({
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
      viewBox="0 0 48 48"
      width={width}
      height={height}
    >
      <linearGradient
        id="rL2wppHyxHVbobwndsT6Ca"
        x1="4"
        x2="44"
        y1="23.508"
        y2="23.508"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4c4c4c" />
        <stop offset="1" stopColor="#343434" />
      </linearGradient>
      <path
        fill="url(#rL2wppHyxHVbobwndsT6Ca)"
        d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
      />
      <path
        d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z"
        opacity=".05"
      />
      <path
        d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"
      />
    </svg>
  )
}

export const LinkIcon = ({
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
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}

export const NotificationIcon = ({
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
      <path d="M 25 0 C 22.792969 0 21 1.792969 21 4 C 21 6.207031 22.792969 8 25 8 C 27.207031 8 29 6.207031 29 4 C 29 1.792969 27.207031 0 25 0 Z M 19.375 6.09375 C 14.804688 8.050781 12 12.457031 12 18 C 12 29 8.199219 31.761719 5.9375 33.40625 C 4.933594 34.132813 4 34.808594 4 36 C 4 40.207031 10.28125 42 25 42 C 39.71875 42 46 40.207031 46 36 C 46 34.808594 45.066406 34.132813 44.0625 33.40625 C 41.800781 31.761719 38 29 38 18 C 38 12.441406 35.199219 8.046875 30.625 6.09375 C 29.769531 8.367188 27.566406 10 25 10 C 22.433594 10 20.230469 8.363281 19.375 6.09375 Z M 19 43.875 C 19 43.914063 19 43.960938 19 44 C 19 47.308594 21.691406 50 25 50 C 28.308594 50 31 47.308594 31 44 C 31 43.960938 31 43.914063 31 43.875 C 29.117188 43.953125 27.117188 44 25 44 C 22.882813 44 20.882813 43.953125 19 43.875 Z" />
    </svg>
  )
}
