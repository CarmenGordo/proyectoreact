import React, {useState} from "react";
// style
import HomeContainer from "./HomeStyle";
// components
import Header from "../../Containers/Header/Header";
import Cards from "../../Components/Cards/Cards";
import CursorPage from "../CursorPage/CursorPage";


const Home = () => {

    const [selecterCharcater, setSelecterCharacter] = useState(false)
    return(
        <HomeContainer>
            {
                !selecterCharcater ? (
                    <CursorPage />

                ) : (
                    <Header />
                )
            }
        </HomeContainer>
        
    )
}

export default Home;