import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        const fetchBeers = async () => {

            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

                console.log('axios response: ', response.data);

                setBeers(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchBeers()
    }, []);
    
    return (
        <div>
            <Navbar />

            {beers && beers.map(beer => {
                return (
                    <div key={beer._id} className="card">
                        <img src={beer.image_url} alt="" width={50} />
                        <Link to={`/beers/${beer._id}`}>
                            <h3>{beer.name}</h3>
                        </Link>
                        <h5>{beer.tagline}</h5>
                        <p><b>Created by: </b>{beer.contributed_by}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Beers;