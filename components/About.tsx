import {JobPosting} from "@/Types/Jobs"
import {PrimaryTag, SecondaryTag } from "@/components/Tag"
interface props {
    data:JobPosting
}
const About = ({data}:props) => {
  console.log(data)
  return (
    <>
    <section className="border-b border-b-gray-400 my-[10px]">
          <h2 className="font-black text-[24px]  text-textPrimary ">About</h2>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/plus-circle.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Posted On</div>
              <div>{new Date(data.datePosted).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/Icon-fire.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>DeadLine</div>
              <div>{new Date(data.deadline).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/Icon-location.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Location</div>
              <div>{data.location?.join(',')}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/calendar-vid.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>Start Date</div>
              <div>{  new Date(data.startDate).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="flex items-center my-[20px]">
            <div className="border  border-gray-200 flex justify-center items-center rounded-full w-[40px] h-[40px]">
              <img src="/Images/calendar-right.svg" alt="plus svg file" />
            </div>
            <div className="ml-4">
              <div>End Date</div>
              <div>{ new Date(data.endDate).toLocaleDateString()}</div>
            </div>
          </div>
        </section>


        <section className="border-b border-b-gray-400 my-[10px]">
          <h2  className="font-black text-[24px]  text-textPrimary " > Categories</h2>
          <div className="flex flex-wrap my-[20px]">
            {
              data.categories?.map((val,index)=>{
                
                  if (index % 2)
                   return (<PrimaryTag categorie = {val}/>)

                  return (<SecondaryTag categorie = {val}/>)
                
              })
            }
          </div>
        </section>

        <section className="my-[10px]">
            <h2 className="font-black text-[24px]  text-textPrimary " > Required Skills</h2>
          <div className="flex flex-wrap mt-4 ">
            {
              data.requiredSkills?.map((val)=>{
                return(
                  <SecondaryTag categorie = {val}/>
                )
              })
            }
          </div>

        </section>
        </>
  )
}

export default About