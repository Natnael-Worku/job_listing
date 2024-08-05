

interface props{
  jobLength: number;
}
const Header = ({jobLength}:props) => {

  return (
    <div className="flex justify-between">
      <div>
        <div className="text-textPrimary  font-black text-[32px]">
          Opportunities
        </div>
        <div className="text-textSecondary font-normal text-base">
          Showing {jobLength} results
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-textSecondary  font-normal text-base text-right">sort by:</div>
        
          <select
            id="options"
            name="options"
            className=" block  ml-2 mr-5 py-2 text-base focus:border-0 focus:outline-0"
          >
            <option value="" >
              Most Relevant
            </option>
            <option value="option1">Newest</option>
            <option value="option2">Trending</option>
          </select>
        
      </div>
    </div>
  );
};

export default Header;
