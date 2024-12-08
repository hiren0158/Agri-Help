import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        custom: {
            main: '#90ee90',
            contrastText: '#fff',
        },
    },
});

export default function Buttons(props) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" color="custom">{props.name}</Button>
        </ThemeProvider>
    );
}
