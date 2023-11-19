import React, { useEffect } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectJsonData } from '../../../redux/features/servicesSlice';
import SingleService from '../Services/SingleService';

const OurServices = () => {

    const dispatch = useDispatch();
    const jsonData = useSelector(selectJsonData);
    console.log(jsonData);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className='mt-3'>
            <SectionTitle heading="Our Services" />
            
            {/* {
                jsonData?.data.map(services => <SingleService 
                    key={services.id}
                    services={services}
                ></SingleService>)
            } */}
        </div>
    );
};

export default OurServices;
