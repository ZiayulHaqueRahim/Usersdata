import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header/>
            {
                navigation.state === "loading" ? <p className="text-3xl">
                    Loading....</p> : <Outlet />
            }
            
            <Footer />
        </div>
    );
};

export default Home;