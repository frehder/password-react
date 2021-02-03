const theme = {
    color: {
        lightest: '#ffffff',
        theme_700: '#159d82',
        theme_500: '#1abc9c',
        theme_300: '#48c9b0',
        neutral_900: '#34495e',
        neutral_700: '#9aa4af',
        neutral_500: '#bdc3c7',
        neutral_300: '#edeff1',
        neutral_100: '#efefef',
    },
    space: {
        small: '5px',
        normal: '10px',
        regular: '20px',
        medium: '30px',
        large: '40px',
    },
    font: {
        size: {
            small: '12px',
            regular: '16px',
            large: '24px',
            huge: '36px',
        },
        weight: {
            light: 100,
            regular: 400,
            bold: 700,
        },
        family:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',
    },
    radius: '4px',
    transition: 'all .2s ease-in-out',
    boundary: '1440px',
    media: {
        small: 'only screen and (min-width: 40em)', // 640px
        medium: 'only screen and (min-width:48em)', // 768px
        large: 'only screen and (min-width: 90em)', // 1440px
    },
};

export type ThemeType = typeof theme;
export default theme;
