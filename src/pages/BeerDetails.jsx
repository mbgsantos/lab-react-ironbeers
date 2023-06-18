import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BeerDetails = ({beers}) => {
    const [beer, setBeer] = useState(null);
    const {beerId} = useParams();

    useEffect(() => {
        const beer = beers.find(beer => {
            return beer._id === beerId;
        })

        if (beer) {
            setBeer(beer);
        }
    }, [beerId, beers]);

    return (
        <div className='card'>
            {!beers && (
                <h3>Beer not found</h3>
            )}

            {beer && (
                <div>
                    <img src={beer.image_url} alt="" width={50} />
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <h3>{beer.attenuation_level}</h3>
                    <h5><b>{beer.first_brewed}</b></h5>
                    <p>{beer.description}</p>
                    <p><b>{beer.contributed_by}</b></p>
                </div>
            )}
        </div>
    );
};

export default BeerDetails;