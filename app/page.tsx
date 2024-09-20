import CustomCard from "@/app/home/card";
import DisplayBox from "@/app/home/displayBox";
import HoverTextBar from "@/app/home/hoverTextBar";
import SearchBar from "@/app/home//searchBar";
import TaggleButton from "@/app/home//taggleButton";


export default function Home() {
  return (
    <div>
      <div className="w-4/5 mx-auto  pt-10">
        <h1 className="text-center text-[45px] font-bold bg-gradient-to-r from-orange-400 to-blue-700 bg-clip-text text-transparent">
          Idea, Explore, Choose
        </h1>
        <h1 className="text-white text-center text-[19px] ">
          Less operations, more creative. Lets make UI design easier!
        </h1>
        <CustomCard />
        <SearchBar />
        <HoverTextBar />
      </div>
      {/* --------------------------------------------------- */}
      <div className="w-4/5 mx-auto pt-4">
        <TaggleButton />
        <DisplayBox />
      </div>
    </div>
  );
}
