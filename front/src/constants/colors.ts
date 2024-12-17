const common = {
  PINK_200: '#D4E7C5', //드로우네비 색상
  PINK_400: '#EC87A5', //마커 색상
  PINK_500: '#BFD8AF', //버튼 클릭시 색상
  PINK_700: '#99BC85', //버튼 색상
  RED_300: '#FFB4B4',
  RED_500: '#FF5F5F',
  BLUE_400: '#B4E0FF', //마커 색상
  BLUE_500: '#0D8AFF',
  YELLOW_400: '#FFE594', //마커 색상
  YELLOW_500: '#FACC15',
  GREEN_400: '#CCE6BA', //마커 색상
  PURPLE_400: '#C4C4E7', //마커 색상
  UNCHANGE_WHITE: '#FFF',
  UNCHANGE_BLACK: '#000',
};

const colors = {
  light: {
    WHITE: '#FFF',
    GRAY_100: '#F8F8F8',
    GRAY_200: '#E7E7E7',
    GRAY_300: '#D8D8D8',
    GRAY_500: '#8E8E8E',
    GRAY_700: '#575757',
    BLACK: '#161616',
    ...common,
  },
  dark: {
    WHITE: '#161616',
    GRAY_100: '#202124',
    GRAY_200: '#3C4043',
    GRAY_300: '#5e5e5e',
    GRAY_500: '#8E8E8E',
    GRAY_700: '#F8F8F8',
    BLACK: '#fff',
    ...common,
  },
} as const;{}


const colorHex = {
  RED: colors['light'].PINK_400,
  BLUE: colors['light'].BLUE_400,
  GREEN: colors['light'].GREEN_400,
  YELLOW: colors['light'].YELLOW_400,
  PURPLE: colors['light'].PURPLE_400,
  WHITE: colors['light'].WHITE,
} as const;

export {colors, colorHex};