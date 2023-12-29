import React, { FunctionComponent } from 'react'
import { gridCardProps } from '../../Types/Gridcard'
import styles from './grid.module.css';
import { FaClock } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const GridCard: FunctionComponent<gridCardProps> = ({ bgColor, data }) => {

  // const router = useRouter();

  const formatDate = (utcDate: any) => {
    const options: any = { day: "numeric", month: "long", year: "numeric" };
    return new Date(utcDate).toLocaleDateString(undefined, options);
  };

  const limitCharacters = (text: any) => {
    return text.slice(" ", 100).concat("...");
  };

  const utcDate = new Date(data.createdDate);
  const formattedDate = formatDate(utcDate);

  return (
    <div
      // cursor="pointer"
      className={styles.card_container}
      style={{ backgroundColor: bgColor }}
    >
      <img
        height={400}
        width={400}
        className="rounded-t-lg"
        src={data.newsImage}
        alt="cover"
      />
      <div className="p-4 shadow-lg rounded-b-lg h-72">
        <h2 className="text-xl font-semibold color-[#082A36]">{data.title}</h2>
        <div className="flex mt-3 justify-between">
          <div className="flex items-center gap-1 my-2">
            <img
              className="rounded-full w-8 h-8"
              src={data.avatar}
              alt="avatars"
            />
            <h4 className="text-base color-[#4F5A5E]">{data.name}</h4>
          </div>
          <div className="flex items-center gap-1 my-2">
            <FaClock color="#4F5A5E" />
            <h4 className="text-sm color-[#4F5A5E]">{formattedDate}</h4>
          </div>
        </div>
        <p className="mt-1 mb-2 color-[#4F5A5E]">
          {limitCharacters(data.description)}
        </p>

        <a href={`/blog/${data.id}`} className="flex gap-2 mt-6" color="#082A36">
          Read More
          <HiOutlineArrowNarrowRight fontSize="24px" />
        </a>
      </div>
    </div>
  );
};

GridCard.defaultProps = {
  bgColor: "#FFFFFF",
};

export default GridCard;
