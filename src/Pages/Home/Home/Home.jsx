import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import OurTeam from '../OurTeam/OurTeam';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurTeam />
            <NewsLetter />
            <Gallery />
        </div>
    );
};

export default Home;