import React from 'react'
import BlogBanner from '../BlogBanner'
import BlogLayout from '../BlogLayout'
import { useParams } from 'react-router-dom';
import { mockData } from '../../Data/mockData';
import { AiFillCalendar } from "react-icons/ai";
import { FaClock, FaEye } from "react-icons/fa";

const BlogDetails = () => {
  const { id }: any = useParams();
  const formattedDate = (date: any) => {
    const utcDate = new Date(date);
    const options: any = { day: "numeric", month: "long", year: "numeric" };
    return new Date(utcDate).toLocaleDateString(undefined, options);
  };
  return (
    <>
      {mockData
        ?.filter((data, index) => data.id === id)
        .map((data: any) => (
          <BlogBanner title={data.title} />
        ))}
      <div className="py-12 px-48">
        <div className="flex gap-14">
          <div className="grid w-2/3">
            <div className="grid grid-cols-1 gap-12">
              {mockData
                ?.filter((data, index) => data.id === id)
                .map((data: any) => (
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-[500]">{data.title}</h2>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={data.avatar}
                          alt="avatar"
                          className="w-12 h-12 my-4 shadow-lg border-1 rounded-full"
                        />
                        <h4 className="font-[500]">{data.name}</h4>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 my-2">
                          <AiFillCalendar color="#4F5A5E" fontSize="20px" />
                          <h4 className="text-sm color-[#4F5A5E]">
                            {formattedDate(data.createdDate)}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                          <FaEye color="#4F5A5E" fontSize="20px" />
                          <h4 className="text-sm color-[#4F5A5E]">25k views</h4>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                          <FaClock color="#4F5A5E" fontSize="17px" />
                          <h4 className="text-sm color-[#4F5A5E]">
                            4 min read
                          </h4>
                        </div>
                      </div>
                    </div>
                    <img
                      src="/assets/blog-banner.svg"
                      alt="blog banner"
                      className="w-full my-4 rounded-md"
                    />
                    <p className="my-4">{data.description}</p>
                    <p className="mb-4">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                    <h4 className="text-xl mt-4 font-[500]">Benefits</h4>
                    <p className="my-4">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <BlogLayout />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
