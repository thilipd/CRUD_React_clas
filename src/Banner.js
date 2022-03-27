
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Banner() {
    return (
        <Box
            sx={{
                width: 1 / 1,
                height: 300,
                backgroundColor: '#272a2d',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

            }}
        >
            <Typography variant="h2"
                component="h1"
                sx={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: 2.5
                }}>
                Shop in style
            </Typography>
            <Typography variant="h5"
                sx={{ color: "#747474" }}>
                With this shop hompeage template
            </Typography>
        </Box>
    )
}