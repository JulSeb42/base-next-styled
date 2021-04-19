// Components
import AppHead from "../AppHead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Wrapper(props) {
    return (
        <div>
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header />

            {props.children}

            <Footer />
        </div>
    );
}
