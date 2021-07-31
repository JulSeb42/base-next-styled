// Components
import { GlobalStyles } from "../styles/GlobalStyles";
import AppHead from "../AppHead";
import Header from "../Header";
import Footer from "../Footer";

export default function Wrapper(props) {
    return (
        <>
            <GlobalStyles />
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header />

            {props.children}

            <Footer />
        </>
    );
}
