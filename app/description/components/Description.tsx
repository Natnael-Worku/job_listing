import job from "@/app/components/JobInterface";
import Body from "./Body";
import About from "./About";
interface props {
  data: job;
}

const Description = ({ data }: props) => {
  return (
    <div className=" grid grid-cols-5 ml-[32px] my-[32px] ">
      <Body data={data} />
      <div className="">
      <About data = {data}/>



      </div>
    </div>
  );
};

export default Description;
