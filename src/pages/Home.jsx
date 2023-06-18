import { Link } from "react-router-dom";
import beerImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card BeerCards">
                        <img src={beerImage} alt="All Beers" />
                        <div className="card-body">
                            <h5 className="card-title">All Beers</h5>
                            <p>A list of all beers</p>
                            <Link to='/beers'>
                                <button className="btn btn-warning">See All Beers</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card BeerCards">
                        <img src={randomBeerImage} alt="Random Beer" />
                        <div className="card-body">
                            <h5 className="card-title">Random Beer</h5>
                            <p>Feeling lucky?</p>
                            <Link to='/random-beer'>
                                <button className="btn btn-warning">Show me</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card BeerCards">
                        <img src={newBeerImage} alt="New Beer" />
                        <div className="card-body">
                            <h5 className="card-title">New Beer</h5>
                            <p>Found a new Beer that no one knows about?</p>
                            <Link to='/new-beer'>
                                <button className="btn btn-warning">Add Beer</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;