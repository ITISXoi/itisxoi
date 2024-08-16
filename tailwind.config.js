/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        sm: ["14px", "20px"],
        base: ["16px", "20px"],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        arial: ["Arial"],
        roboto: ["Roboto"],
      },
      flex: {
        full: "0 0 100%",
      },
      maxWidth: {
        dashboard: "var(--dashboard-container)",
      },
      width: {
        sidebar: "var(--w-sidebar)",
      },
      height: {
        header: "var(--header-h)",
      },
      zIndex: {
        header: 999,
      },
      borderWidth: {
        DEFAULT: "1.5px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      backgroundImage: {
        "banner-digital": "url('/images/banner_digital.jpeg')",
        "banner-course": "url('/images/banner_course.png')",
        "footer": "url('../src/assets/svg/bg_footer.svg')",
        "cart": "url('../src/assets/images/bg_cart.png')",
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        surface: "hsl(var(--surface))",
        line: "hsl(var(--line))",
        link: "hsl(var(--link))",
        grey: "hsl(var(--grey-light))",
        green: "hsl(var(--primary-green))",
        green_light: "hsl(var(--primary-green-2))",
        green_light_2: "hsl(var(--primary-green-3))",
        green_light_3: "hsl(var(--primary-green-4))",
        grey_light: "hsl(var(--grey-opacity))",
        grey_light_2: "hsl(var(--grey-light-2))",
        grey_light_3: "hsl(var(--grey-light-3))",
        grey_light_4: "hsl(var(--grey-opacity-2))",
        grey_light_5: "hsl(var(--grey-light-4))",
        light: "hsl(var(--light))",
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary-900))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-900))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          1000: "hsl(var(--secondary-1000))",
        },
        alpha: {
          DEFAULT: "hsla(var(--alpha-dark))",
          dark: "hsla(var(--alpha-dark))",
          light: "hsla(var(--alpha-light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          bg: "hsl(var(--dark-bg))",
          gray: "hsl(var(--dark-gray))",
          stroke: "hsl(var(--dark-stroke))",
        },
        divider: "hsl(var(--divider))",
        neutral: {
          0: "#FFFFFF",
          10: "#DADADA",
          20: "#B5B5B5",
          30: "#909090",
          40: "#6B6B6B",
          50: "#464646",
          60: "#212121",
        },
        main: {
          DEFAULT: "#133C65",
          0: "#ECF0F4",
          10: "#DBE4ED",
          20: "#DBE4ED",
          30: "#B4D2F0",
          40: "#6391C0",
          50: "#133C65",
          60: "#0B233A",
        },
        readonly: {
          DEFAULT: "#E6E6E6",
          border: "#B6B6B6",
        },
      },
      borderRadius: {
        "3xl": "36px",
        "2xl": "24px",
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "4px",
        haft: "50%",
      },
      boxShadow: {
        active: "0 0 80px 0 rgba(0, 0, 0, 0.10)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "text-fade-in": {
          "0%": {
            transform: "rotateX(180deg)",
            opacity: 0,
          },
          "35%": {
            transform: "rotateX(120deg)",
            opacity: 0,
          },
          "65%": {
            opacity: 0,
          },
          "100%": {
            transform: "rotateX(360deg)",
            opacity: 1,
          },
        },
        "text-fade-out": {
          "0%": {
            transform: "rotateX(0deg)",
            opacity: 1,
          },
          "35%": {
            transform: "rotateX(-40deg)",
            opacity: 1,
          },
          "65%": {
            opacity: 0,
          },
          "100%": {
            transform: "rotateX(180deg)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-fade-out": "text-fade-out 1.2s",
        "text-fade-in": "text-fade-in 1.2s",
      },
    },
  },
  plugins: [],
};
