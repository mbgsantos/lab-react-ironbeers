import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewBeer = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewerTips, setBrewerTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');

    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleTagline = (event) => {
        setTagline(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleFirstBrewed = (event) => {
        setFirstBrewed(event.target.value);
    };

    const handleBrewerTips = (event) => {
        setBrewerTips(event.target.value);
    };

    const handleAttenuationLevel = (event) => {
        setAttenuationLevel(event.target.value);
    };

    const handleContributedBy = (event) => {
        setContributedBy(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        let newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewerTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        };

        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
            navigate('/beers');
        } catch (error) {
            console.log(error)
        }

        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewerTips('');
        setAttenuationLevel(0);
        setContributedBy('');
    };

    return (
        <div>
            <Navbar />
            
            <h1>Add a new Beer</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label htmlFor="">Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

                <label htmlFor="">Description</label>
                <input type="text" name="description" value={description} onChange={handleDescription} />

                <label htmlFor="">First Brewed</label>
                <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewed} />

                <label htmlFor="">Brewer Tips</label>
                <input type="text" name="brewerTips" value={brewerTips} onChange={handleBrewerTips} />

                <label htmlFor="">Attenuation Level</label>
                <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={handleAttenuationLevel} />

                <label htmlFor="">Contributed by</label>
                <input type="text" name="contributedBy" value={contributedBy} onChange={handleContributedBy} />

                <button type="submit">Add Beer</button>
            </form>
        </div>
    )

}

export default NewBeer;