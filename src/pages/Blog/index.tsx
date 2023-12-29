import Layout from '../../Components/Layouts'
import LatestNews from '../../Components/LatestNews'
import BlogBanner from '../../Components/BlogBanner'


function Blog() {
  return (
    <Layout blog>
      <BlogBanner/>
      <LatestNews/>
    </Layout>
  )
}

export default Blog