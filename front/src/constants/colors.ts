const colors = {
  // PINK_200: '#FAE2E9',
  // PINK_400: '#EC87A5',
  // PINK_500: '#BF5C79',
  // PINK_700: '#C63B64',
  // PINK_200: '#B4E0FF', //드로우네비 색상
  // PINK_400: '#EC87A5', //마커 색상
  // PINK_500: '#1876FB', //버튼 클릭시 색상
  // PINK_700: '#2A52BE', //버튼 색상
  PINK_200: '#D4E7C5', //드로우네비 색상
  PINK_400: '#EC87A5', //마커 색상
  PINK_500: '#BFD8AF', //버튼 클릭시 색상
  PINK_700: '#99BC85', //버튼 색상
  
  RED_300: '#FFB4B4',
  RED_500: '#FF5F5F',

  BLUE_400: '#B4E0FF', //마커 색상
  BLUE_500: '#0D8AFF',

  GREEN_400: '#CCE6BA', //마커 색상
  YELLOW_400: '#FFE594', //마커 색상
  PURPLE_400: '#C4C4E7', //마커 색상
  WHITE: '#FFF',

  GRAY_100: '#F8F8F8',
  GRAY_200: '#E7E7E7',
  GRAY_300: '#D8D8D8',
  GRAY_500: '#8E8E8E',
  GRAY_700: '#575757',
  BLACK: '#000',
};

const colorHex = {
  RED: colors.PINK_400,
  BLUE: colors.BLUE_400,
  GREEN: colors.GREEN_400,
  YELLOW: colors.YELLOW_400,
  PURPLE: colors.PURPLE_400,
  WHITE: colors.WHITE,
} as const;

export {colors, colorHex};