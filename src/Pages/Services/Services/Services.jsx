import OurServices from "../OurServices/OurServices";
import RequestForm from "../RequestForm/RequestForm";
import ServiceBanner from "../ServiceBanner/ServiceBanner";

const Services = () => {
    return (
        <div>
            <ServiceBanner />
            <OurServices />
            <RequestForm />
        </div>
    );
};

export default Services;