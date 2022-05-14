import type { NextPage } from "next";
import DropDownFinal from "./components/DropDownFinal";

const Home: NextPage = () => {
  return (
    <div id="dropDown" className="h-15 w-38 flex justify-around">
      {/* <App /> */}

      {/* <MyDropdown onHover={true} /> */}
      {/* <TailwindCmpLeft /> */}
      <DropDownFinal />
    </div>
  );
};

export default Home;
