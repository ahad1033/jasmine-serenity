import gallery1 from '../../../assets/gallery/image1.jpg';
import gallery2 from '../../../assets/gallery/image2.jpg';
import gallery3 from '../../../assets/gallery/image3.jpg';
import gallery4 from '../../../assets/gallery/image4.jpg';
import gallery5 from '../../../assets/gallery/image5.jpg';
import gallery6 from '../../../assets/gallery/image6.jpg';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Gallery = () => {
    return (
        <div className='my-5 mx-auto'>
            <SectionTitle heading="Jasmine's Gallery" />
            <div className='px-5 mt-4 d-flex flex-wrap justify-content-center'>
                <img src={gallery1} className="img-fluid" alt="image"></img>
                <img src={gallery2} className="img-fluid" alt="image"></img>
                <img src={gallery3} className="img-fluid" alt="image"></img>
                <img src={gallery4} className="img-fluid" alt="image"></img>
                <img src={gallery5} className="img-fluid" alt="image"></img>
                <img src={gallery6} className="img-fluid" alt="image"></img>
            </div>
        </div>
    );
};

export default Gallery;