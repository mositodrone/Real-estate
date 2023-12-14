import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import AreaFeatureContainer from "../components/area-feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home"/>
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header />
        <Hero /> 
        <AreaContainer />
        <AreaFeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer propOverflow="unset" />
      </div>
    </>
  );
};

export default LandingPage;
