import "./PropertyCube.scss";

const PropertyCube = ({
  propertyImageUrl,
  propertyFullAddress,
  rotateX = 350,
  rotateY = 10,
}) => {
  return (
    <div
      className="cube"
      style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <div className="cube_side">
        <img src={propertyImageUrl} alt={propertyFullAddress} />
      </div>
      <div className="cube_side cube_empty"></div>
      <div className="cube_side cube_empty"></div>
      <div className="cube_side cube_empty"></div>
      <div className="cube_side cube_empty"></div>
      <div className="cube_side cube_empty"></div>
    </div>
  );
};

export default PropertyCube;
