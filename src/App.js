import PropertyCube from "./PropertyCube";
import "./App.scss";
import { useState, useEffect } from "react";

const App = () => {
  const propertyImageUrl =
    "https://roofstock-cdn4.azureedge.net/public/properties/1931609/photo/00e24c59-743f-4d87-bb00-8bbd42db3fe4_1_Front1_1280.jpg";
  const propertyFullAddress = "123 Main St";

  const [rotateX, setRotateX] = useState(350);
  const [rotateY, setRotateY] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      //setRotateX(rotateX + 1);
      setRotateY(rotateY + 1);
    }, 10);
    return () => clearTimeout(timer);
  }, [rotateX, rotateY]);

  return (
    <div className="center">
      <PropertyCube
        propertyImageUrl={propertyImageUrl}
        propertyFullAddress={propertyFullAddress}
        rotateX={rotateX}
        rotateY={rotateY}
      ></PropertyCube>
    </div>
  );
};

export default App;
