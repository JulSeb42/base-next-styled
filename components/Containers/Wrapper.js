// Components
import AppHead from "../AppHead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Wrapper(props) {
    return (
        <>
            <AppHead {...props} />

            <Header />

            {props.children}

            <Footer />
        </>
    );
}
