const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
}

export const HeartIcon = ({ filled, ...props }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'} {...props}>
    <path d="M12 20.2C12 20.2 3.8 15.3 3.8 9.3C3.8 6.2 6.2 4 9 4C10.6 4 11.6 4.8 12 5.5C12.4 4.8 13.4 4 15 4C17.8 4 20.2 6.2 20.2 9.3C20.2 15.3 12 20.2 12 20.2Z" />
  </svg>
)

export const HomeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 11.5L12 4.5L20 11.5" />
    <path d="M6 10V19C6 19.55 6.45 20 7 20H17C17.55 20 18 19.55 18 19V10" />
    <path d="M10 20V14.5C10 13.95 10.45 13.5 11 13.5H13C13.55 13.5 14 13.95 14 14.5V20" />
  </svg>
)

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M19.5 19.5L15.2 15.2" />
  </svg>
)

export const WindIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 8H14.5C16 8 17.2 6.8 17.2 5.3C17.2 3.8 16 2.6 14.5 2.6C13.3 2.6 12.3 3.4 12 4.5" />
    <path d="M3 13H17.5C19.4 13 21 14.6 21 16.5C21 18.4 19.4 20 17.5 20C16 20 14.8 19 14.4 17.6" />
    <path d="M3 17.5H10.5" />
  </svg>
)

export const StarIcon = (props) => (
  <svg {...base} strokeLinecap="round" {...props}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
)

export const TrophyIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M8 4H16V9C16 11.8 14.2 14 12 14C9.8 14 8 11.8 8 9V4Z" />
    <path d="M8 5H5.5C5.5 7.5 6.5 9 8.5 9.3" />
    <path d="M16 5H18.5C18.5 7.5 17.5 9 15.5 9.3" />
    <path d="M12 14V17.5" />
    <path d="M9.5 17.5H14.5L15 20.5H9L9.5 17.5Z" />
  </svg>
)
