/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'accent1BgColor': 'var(--accent1BgColor)',
      'accent2BgColor': 'var(--accent2BgColor)',
      'borderColor': 'var(--borderColor)',
      'bodyBgColor': 'var(--bodyBgColor)',
      'postBgColor': 'var(--postBgColor)',
      'accent1TextColor': 'var(--accent1TextColor)',
      'accent2TextColor': 'var(--accent2TextColor)',
      'postTitleColor': 'var(--postTitleColor)',
      'postTitleBgColor': 'var(--postTitleBgColor)',
      'boxShadowColor': 'var(--boxShadowColor)',
      'sidebarIconBgColor': 'var(--sidebarIconBgColor)'
      },
      
    boxShadow: {
      'tabUnfocused': '2px 4px 0 var(--accent2BgColor), 0 -2px 0 var(--accent2BgColor), 2px 0 0 var(--accent2BgColor), -2px 0 0 var(--accent2BgColor), -4px 2px 0 var(--accent2BgColor), -6px 4px 0 var(--accent2BgColor), -8px 6px 0 var(--accent2BgColor), -10px 8px 0 var(--accent2BgColor), -12px 10px 0 var(--accent2BgColor), -14px 12px 0 var(--accent2BgColor), -16px 14px 0 var(--accent2BgColor), -18px 16px 0 var(--accent2BgColor), -20px 18px 0 var(--accent2BgColor), 4px 0 0 var(--borderColor), 0 -4px 0 var(--borderColor), 2px -2px 0 var(--borderColor), -2px -2px 0 var(--borderColor), -4px 0 0 var(--borderColor), -6px 2px 0 var(--borderColor), -8px 4px 0 var(--borderColor), -10px 6px 0 var(--borderColor), -12px 8px 0 var(--borderColor), -14px 10px 0 var(--borderColor), -16px 12px 0 var(--borderColor), -18px 14px 0 var(--borderColor), -20px 16px 0 var(--borderColor)',

      'tabFocused': '2px 4px 0 var(--accent1BgColor), 0 -2px 0 var(--accent1BgColor), 2px 0 0 var(--accent1BgColor), -2px 0 0 var(--accent1BgColor), -4px 2px 0 var(--accent1BgColor), -6px 4px 0 var(--accent1BgColor), -8px 6px 0 var(--accent1BgColor), -10px 8px 0 var(--accent1BgColor), -12px 10px 0 var(--accent1BgColor), -14px 12px 0 var(--accent1BgColor), -16px 14px 0 var(--accent1BgColor), -18px 16px 0 var(--accent1BgColor), -20px 18px 0 var(--accent1BgColor), 4px 0 0 var(--borderColor), 0 -4px 0 var(--borderColor), 2px -2px 0 var(--borderColor), -2px -2px 0 var(--borderColor), -4px 0 0 var(--borderColor), -6px 2px 0 var(--borderColor), -8px 4px 0 var(--borderColor), -10px 6px 0 var(--borderColor), -12px 8px 0 var(--borderColor), -14px 10px 0 var(--borderColor), -16px 12px 0 var(--borderColor), -18px 14px 0 var(--borderColor), -20px 16px 0 var(--borderColor)',

      'postBorder': '2px -2px 0 0 var(--accent1BgColor),0 -2px 0 0 var(--accent1BgColor),2px 0 0 0 var(--accent1BgColor),0 2px 0 0 var(--accent1BgColor),-2px 0 0 0 var(--accent1BgColor),0 0 0 2px var(--borderColor),4px -4px 0 0 var(--borderColor),0 -4px 0 0 var(--borderColor),4px 0 0 0 var(--borderColor),0 4px 0 0 var(--borderColor),-4px 0 0 0 var(--borderColor)',

      'sbTitle': '0 -2px 0 0 var(--postBgColor),2px 0 0 0 var(--postBgColor),0 2px 0 0 var(--postBgColor),-2px 0 0 0 var(--postBgColor),0 0 0 2px var(--borderColor),0 -4px 0 0 var(--borderColor),4px 0 0 0 var(--borderColor),0 4px 0 0 var(--borderColor),-4px 0 0 0 var(--borderColor)',

      'sbInfoBox': '0 -2px 0 0 var(--accent1BgColor),2px 0 0 0 var(--accent1BgColor),0 2px 0 0 var(--accent1BgColor),-2px 0 0 0 var(--accent1BgColor),0 0 0 2px var(--borderColor),0 -4px 0 0 var(--borderColor),4px 0 0 0 var(--borderColor),0 4px 0 0 var(--borderColor),-4px 0 0 0 var(--borderColor)',
    },

    fontFamily: {
      'primary': 'VT323'
    },
      extend: {
        zIndex: {
          '5':'5'
        },
        height: {
          '5.5': '24px',
        },
        keyframes: {
          fadeInAnimation: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1'},
          }
        },
        animation: {
          'fadeInAnimation': 'fadeInAnimation ease 2.5s'
        },
        backgroundImage: {
          'sidebarIcon': "url('./images/icon.png')",
        },
        backgroundSize: {
          '115': '115%',
          '117': '117%',
        }
      }
    }
 };