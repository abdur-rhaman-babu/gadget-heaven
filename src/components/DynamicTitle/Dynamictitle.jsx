import { Helmet } from "react-helmet";

const Dynamictitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title ? `${title} | Gadget Heaven`: 'Gadget Heaven'}</title>
            </Helmet>
        </div>
    );
};

export default Dynamictitle;