// import { useEffect, useState } from "react";
// import * as Font from 'expo-font';

// export const useFonts = () =>{
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     const LoadFonts = async() => {
//         await  Font.loadAsync({
//             'schwifty': require('../Assets/Fonts/get-schwifty.ttf'),
//         })
//     }

//     useEffect(() => {
//         if(!fontsLoaded){
//             LoadFonts();
//         }
//     });

//     setFontsLoaded(true);

//     if(!fontsLoaded){
//         return(alert("las fuentes estan mal importadas"))
//     }
// };