import job from "@/app/components/JobInterface"
import { TiTick } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";

interface props{
    data:job
}

const Body = ({data}:props) => {

  return (
    <div className="col-span-4 mr-10">
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary ">Description</h2>
        <p className="mt-[16px] text-gray-800  text-[16px] font-normal text-justify mr-2 ">{data.description}</p>
      </section>
      <section className="my-[27px]">
        <h2 className="font-black text-[24px]  text-textPrimary"> Responsibilites</h2>
        {
          data.responsibilities.map((val)=>{
           return  (<div className="flex items-center my-2">
              <TiTick className="text-green-400 text-[20px] border-2 border-green-400 rounded-full"/>
              <div className="ml-2 text-gray-800  text-[16px] font-normal text-justify ">{val}</div>
            </div>)
          })
        }
        <div className="flex items-center">
          <TiTick className="text-green-400 text-[20px] border-2 border-green-400 rounded-full"/>
          <div className="ml-2">{data.responsibilities[0]}</div>
        </div>
      </section>
      <section className="my-[27px]" >
        <h2 className="font-black text-[24px]  text-textPrimary" >Ideal candidate we want</h2>
        <ul className="mt-4">
          <div className="flex items-end">
            <div className="font-black text-lg">.</div>
            <div className="font-bold inline">{data.ideal_candidate.age} old {data.ideal_candidate.gender} {data.title}</div>
          </div>

          {
            data.ideal_candidate.traits.map((val)=>{
              const [left,right] = val.split(':')
              return(
                <div className="flex items-start">
            <div className="font-black text-lg">.</div>
            <div className="flex ">
              
              <span className="font-normal  ">
              <span className="font-bold ">{left}</span>
                {right}
                </span>
            </div>
          </div>
              )
            })
          }

        </ul>
      </section>
      <section className="my-[27px]" >
        <h2 className="font-black text-[24px]  text-textPrimary mb-[23px]" >When & Where</h2>
        <div className=" flex items-center">
          <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
            <img
            src="/Images/Icon-location.svg"
            alt="loaction svg element"
            />
          </div>
          <div className="ml-4">{data.when_where}</div>
        </div>
      </section>
    </div>
  )
}

export default Body