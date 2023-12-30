import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { fontSize, lineHeight } from "@mui/system";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	palette: {
		mode: "light",
        primary:{
            main:'#DAEC8B',
            light:'#F4F9DB',
            dark:'#838E53',
        },
        secondary:{
            main:'#47D0BD',
            light:'#C6F0EB',
            dark:'#2B7D71',

        },
        info:{
            main:'#FF5DA2',
            light:'#FFEFF6',
            dark:'#BF467A',
            contrastText:'#FFFFFF'
        },
        white:{
            50:'#FFFFFB',
            100:'#FFFDD6',
            200:'#CCCAAB',
            300:'#737260',
            400:'#59594B',
        }
	},
	typography: {
        htmlFontSize:16,
		fontFamily: roboto.style.fontFamily,
        fontSize:14,
        fontWeightLight:300,
        fontWeightRegular:400,
        fontWeightMedium:500,
        fontWeightBold:700,
        h1:{
            fontWeight:300,
            fontSize:'6rem',
            lineHeight:1.167,
        },
        h2:{
            fontWeight:700,
            fontSize:'1.5rem',
            lineHeight:2,
        },
        body1:{
            fontWeight:400,
            fontSize:'1.5rem',
            lineHeight:2,
            color:'#4C5331'
        }
	},


});

export default theme;