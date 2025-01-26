import { useRouter } from 'next/router';
import DryClean from '../pages/dry-clean'; // Assuming you already have this component
import WashFold from '../pages/wash-fold'; // Assuming you have this component
import WashIron from '../pages/wash-iron'; // Similarly for Wash Iron
import SteamIron from '../pages/steam-iron'; // Similarly for Steam Iron

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Define your slug-content mapping
  const serviceContent = {
    "delhi-dry-cleaning-service": <DryClean />,
    "wash-fold-laundry-delhi": <WashFold />,
    "wash-iron-laundry-service-delhi": <WashIron />,
    "steam-iron-service-delhi": <SteamIron />,
  };

  // Render the appropriate content based on the slug
  return (
    <>
      {serviceContent[slug] ? (
        serviceContent[slug]
      ) : (
        <p>404 - Page not found</p> // Fallback if slug doesn't match
      )}
    </>
  );
};

export default ServicePage;
