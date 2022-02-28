/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

const baseColor = {
  primary: {
    magenta: '#E22153',
    green: '#006551',
    yellow: '#FCAD10',
    cream: '#FBEFDD',
  },
  gray: {
    default: '#F8F7F5',
    100: '#FAFAFA',
    200: '#F5F5F5',
    300: '#EBEBEB',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#555555',
    700: '#1A1A1A',
  },
  info: {
    darker: '#09509D',
    dark: '#2371C6',
    default: '#4393EA',
    light: '#D3E5FA',
    lighter: '#F0F7FF',
  },
  positive: {
    darker: '#0B6732',
    dark: '#19954D',
    default: '#27AE60',
    light: '#BEF0D3',
    lighter: '#E3F6EB',
  },
  warning: {
    darker: '#904E01',
    dark: '#D97A0B',
    default: '#FF8A00',
    light: '#FFE7CA',
    lighter: '#FFF8EF',
  },
  danger: {
    darker: '#76102B',
    dark: '#AF2631',
    default: '#CC3434',
    light: '#EF9784',
    lighter: '#FCE3D6',
  },
};

/**
 * @type {import('@types/tailwindcss/tailwind-config.d').TailwindConfig}
 **/
const tailwindConfig = {
  content: [
    './src/pages/*.{ts,}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/containers/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
    },
    backgroundColor(theme) {
      return {
        ...theme('colors'),
        ...baseColor,
      };
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        // 'inter-thin': ['Inter-Thin', 'sans-serif'],
        // 'inter-extra-light': ['Inter-ExtraLight', 'sans-serif'],
        // 'inter-light': ['Inter-Light', 'sans-serif'],
        // 'inter-regular': ['Inter-Regular', 'sans-serif'],
        // 'inter-medium': ['Inter-Medium', 'sans-serif'],
        // 'inter-semi-bold': ['Inter-SemiBold', 'sans-serif'],
        // 'inter-bold': ['Inter-Bold', 'sans-serif'],
        // 'inter-extra-bold': ['Inter-ExtraBold', 'sans-serif'],
        // 'inter-black': ['Inter-Black', 'sans-serif'],
      },
      colors: {
        ...baseColor,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};

module.exports = tailwindConfig;
