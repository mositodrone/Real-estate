import PropertyCard from "./property-card";

const PropertiesGridContainer = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-large-400">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <PropertyCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <PropertyCard
          imageDimensions="/property-image5@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image6@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image7@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image8@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image9@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/property-image10@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
