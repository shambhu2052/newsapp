import Image from "next/image";
import Simpleslider from "./Components/Simpleslider";
import Slidecard from "./Components/Slidecard";
import Business from "./Components/Business";
import Entertainment from "./Components/Entertainment";
import General from "./Components/General";
import Health from "./Components/Health";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Simpleslider />
        <Slidecard />
        <Business />
        <Entertainment />
        <General />
        <Health />
      </div>
    </>
  );
}
