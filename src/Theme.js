const palette = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                    main: '#149a7a',
                    contrastText: '#fff',
                },
                secondary: {
                    main: '#f8d464',
                    contrastText: '#424242',
                }
            }
            : {
                // Dark mode
                primary: {
                    main: '#149a7a',
                    contrastText: '#fff',
                },
                secondary: {
                    main: '#f8d464',
                    contrastText: '#424242',
                }
            }),
    },
});



export default palette;