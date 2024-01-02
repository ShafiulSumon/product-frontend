import { useEffect, useState, CSSProperties } from "react";
import Card from "../components/Card";
import { getAllProducts } from "../network/ApiManager";
import { PulseLoader } from "react-spinners";

const __cssOverride: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto 0"
}

function HomePage() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const populateData = async () => {
        const fetchedData = await getAllProducts();
        setData(fetchedData);
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        populateData();
    }, []);


    return (
        isLoading === true ? 
        <PulseLoader 
            className="loading"
            color={"#247490"}
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={__cssOverride}
        /> :
        <div className="flex flex-wrap gap-4 justify-start m-10">
            {
                data.map((product, key) => {
                    return <Card key={key} product={product} />
                })
            }
        </div>
    );
}

export default HomePage;