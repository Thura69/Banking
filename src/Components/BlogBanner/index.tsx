import styles from './blogbanner.module.css'
import { blogbannerprops } from '../../Types/Blogbanner';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'

const BlogBanner:FunctionComponent<blogbannerprops> = ({title}) => {
    return(
        <div className={styles.blog_banner}>
          <h2 className="text-3xl text-white font-[500]">{title || "Blog"}</h2>
          <img
          className="absolute top-10 left-0"
          width="150px"
          src="/assets/blog-right.svg"
          alt="vectors"
        />
        <img
          className="absolute top-10 right-0"
          width="150px"
          src="/assets/blog-left.svg"
          alt="vectors"
        />
          <div className="flex gap-2 items-center text-white justify-center">
            <Link to="/" className="opacity-40" >Home</Link>
            <IoIosArrowForward className="opacity-40" />
            <Link to="/blog" >Blog</Link>
          </div>
        </div>
    )
}

export default BlogBanner;
