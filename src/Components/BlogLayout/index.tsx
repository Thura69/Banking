
import styles from "./layout.module.css";
import { RecentPosts } from "../../Data/mockData";
import { Tags } from "../../Data/mockData";

const BlogLayout = () => {
    return(
             <div className="flex flex-col w-1/3 gap-8">
          <div className="inline-block">
            <input
              type="search"
              placeholder="Search here"
              className="px-4 py-2 border-2 rounded-md w-full"
            />
          </div>
          <div className="border-[1px] border-[#E6EDF3] rounded-md">
            <div className="flex flex-col">
              <div className="py-4 bg-[#F9FBFC]">
                <h4 className="mx-8 text-lg font-semibold">Categories</h4>
              </div>
              <div className="flex flex-col gap-4 mx-8 py-4">
                <div className="flex justify-between items-center">
                  <h6>Alerts</h6>
                  <h6>35</h6>
                </div>
                <div className="flex  justify-between items-center">
                  <h6>Company News</h6>
                  <h6>28</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#E6EDF3] rounded-md">
            <div className="flex flex-col">
              <div className="py-4 bg-[#F9FBFC]">
                <h4 className="mx-6 text-lg font-semibold">Recent post</h4>
              </div>
              <div className="flex flex-col mx-6  py-8 gap-4">
                {RecentPosts.map((item: any) => (
                  <div
                    key={item.title}
                    className="cursor-pointer flex justify-between items-center gap-4"
                  >
                      <img
                        src={item.image}
                        alt="thumbnail"
                        className="w-16 h-16"
                      />
                    <div className="flex flex-col">
                      <h5 className="text-[16px] font-[500]">{item.title}</h5>
                      <h6 className="text-sm mt-1 text-[#4F5A5E]">
                        {item.time}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#E6EDF3] rounded-md">
            <div className="flex flex-col">
              <div className="py-4 bg-[#F9FBFC]">
                <h4 className="mx-6 text-lg font-semibold">Tags</h4>
              </div>
              <div className="flex flex-wrap gap-4 mx-6 py-6">
                {Tags.map((item:any) => ( 
                <div key={item} className="px-4 py-2 w-fit rounded-md bg-[#F9FBFC] border-[1px] border-[#E6EDF3]">
                  <h6>{item}</h6>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.kbz_subscribe}>
             <h2 className="text-3xl mx-12 text-center font-[500] text-white">Subscribe to KBZ Money Alerts</h2>
             <div className="flex flex-col items-center gap-6">
             <input type="email" placeholder="Email Address" className="text-[#4F5A5E] border-2 px-4 py-2 bg-white rounded-md w-3/4" />
             <a href="#" className="w-fit text-white rounded-lg bg-[#20C2FF] font-[500] px-4 py-3">
                Subscribe Now
             </a>
             </div>
          </div>
        </div>
    )
}

export default BlogLayout ;