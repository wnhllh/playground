import CustomCard from "@/components/card";
import DisplayBox from "@/components/displayBox";
import HoverTextBar from "@/components/hoverTextBar";
import SearchBar from "@/components/searchBar";
import TaggleButton from "@/components/taggleButton";
export default function Home() {
  return (
    <div>
      <div className="w-4/5 mx-auto  pt-10">
        <h1 className="text-center text-[45px] font-bold bg-gradient-to-r from-orange-400 to-blue-700 bg-clip-text text-transparent">
          Build for the web 10x faster
        </h1>
        <h1 className="text-white text-center text-[19px] ">
          Chat with AI to build web apps. Sync with GitHub. One-click deploy.
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
