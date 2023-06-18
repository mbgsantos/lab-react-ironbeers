import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const RandomBeer = () => {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await axios.get(
                    'https://ih-beers-api2.herokuapp.com/beers/random'
                );
                setBeer(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRandomBeer();
    }, []);

    if (!beer) {
        return <div><h3>Wait a moment...</h3></div>
    }

    return (
        <div>
            <Navbar />
            
            <div className="card">
                <img src={beer.image_url} alt="" width={50} />
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <h3>{beer.attenuation_level}</h3>
                <h5><b>{beer.first_brewed}</b></h5>
                <p>{beer.description}</p>
                <p><b>{beer.contributed_by}</b></p>
            </div>
        </div>
    );
};

export default RandomBeer;