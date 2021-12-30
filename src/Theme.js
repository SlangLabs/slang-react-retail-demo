import { createTheme } from '@mui/material/styles';

const getPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                    main: '#149a7a',
                    contrastText: '#fff',
                },
            }
            : {
                // Dark mode
                primary: {
                    main: '#149a7a',
                    contrastText: '#fff',
                },
            }),
    },
});


const theme = createTheme(getPalette('light'))

export default theme;