import {JobPosting} from "@/Types/Jobs";
import Body from "./Body";
import About from "./About";
interface props {
  data: JobPosting;
}

const Description = ({ data }: props) => {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-5 ml-[32px] my-[32px]  ">
      <Body data={data} />
      <div className="">
      <About data = {data}/>



      </div>
    </div>
  );
};

export default Description;