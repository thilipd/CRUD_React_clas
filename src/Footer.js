import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Footer() {
    return (
        <Box
            sx={{
                width: 1 / 1,
                height: 100,
                backgroundColor: '#272a2d',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

            }}
        >
            <Typography variant="h6"
                sx={{ color: "#747474" }}>
                Copyright © Your Website 2021
            </Typography>
        </Box>
    )
}