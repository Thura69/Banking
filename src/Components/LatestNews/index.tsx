import { useState } from "react";
import ActionButton from "../ActionButton";
import GridCard from "../GridCard";
import { mockData } from "../../Data/mockData";
import BlogLayout from "../BlogLayout";



const LatestNews = () => {
  const [value, setValue] = useState<number>(6);

  const handleClick = (event:any) =>{
    event.preventDefault();
    setValue(e => e + 6)
  }
  
  
  return (
    <div className="py-12 px-48">
      <h2 className="text-3xl text-center font-[500] mb-8">Latest News</h2>
      <div className="flex gap-8">
      <div className="grid w-2/3">
          <div className="grid grid-cols-2 gap-4">
            {mockData
              ?.filter((data, index) => index < value)
              .map((data: any) => (
                <GridCard key={data.title} data={data} />
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <ActionButton title="Load More" route="/" bgColor="#063A78" onClickHandler={handleClick} />
          </div>
        </div>
        <BlogLayout />
      </div>
    </div>
  );
};

export default LatestNews;
