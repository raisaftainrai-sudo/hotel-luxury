import Image from "next/image";
import Hero from "./component/home/Hero";
import WelcomeSection from "./component/home/WelcomeSection";
import FeaturedRooms from "./component/home/FeaturedRooms";
import Amenities from "./component/home/Amenities";
import DiningExperience from "./component/home/DiningExperience";
import SpaWellness from "./component/home/SpaWellness";
import Testimonials from "./component/home/Testimonials";
export default function Home() {
  return (
  <>
<Hero />
< WelcomeSection />
<FeaturedRooms />
<Amenities />
<DiningExperience />
<SpaWellness />
<Testimonials />
  </>
  );
}
