import Head from 'next/head'
import Image from 'next/image'
import {GraphQLClient, gql} from 'graphql-request'
import BlogCard from '../../components/BlogCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import 'bootstrap/dist/css/bootstrap.css'

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8bll9nl0xgr01t7cob8btmg/master"
);

const QUERY = gql`
{
  posts {
    id,
    title,
    datePublished,
    slug,
    coverPhoto {
      id,
      url
    },
    preview,
    content{
      html
    },
    author{
      name,
      avatar{
        url
      }
    }
  }
}
`;

export async function getStaticProps(){
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate:10,
  };
}

export default function MT(posts) {
  return (
    <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Navbar/>

        <main className={"main"}>
          <div>
          <section>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <div className="article-wrapper">
                      <div className="blog-label">
                      <div className="home-label">
                      <h4 className="home-label-title">MEDITATION TIMES</h4>
                      </div>
                      </div>

                      {posts.posts.map((post) => (
                      <BlogCard
                        title={post.title}
                        preview={post.preview}
                        author={post.author}
                        coverPhoto={post.coverPhoto}
                        key={post.id}
                        datePublished={post.datePublished}
                        slug={post.slug}
                        />
                      ))}
                      {console.log(posts.posts)}

                    </div>
                    <br/><br/>
                  </div>

                  <div className='col-md-4'>
                    <aside>
                      <div className="aside-about">
                        <div className="home-label aside-label">
                          <h4 className="home-label-title">WHAT IS THE MEDITATION TIMES</h4>
                        </div>
                        <div className="aside-content-home">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam neque non rem rerum ipsa in doloremque aspernatur eius iste, cupiditate repudiandae, quis laboriosam ipsam, architecto sed dolorem quos enim optio eveniet dignissimos aliquam temporibus? Laboriosam ipsa veritatis nemo ab.
                        </div>
                      </div>
                      <br/>
                      <div className="aside-work">
                        <div className="home-label aside-label">
                          <h4 className="home-label-title">WORSHIP WITH US</h4>
                        </div>
                        <div className="aside-content-home">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam neque non rem rerum ipsa in doloremque aspernatur eius iste, cupiditate repudiandae, quis laboriosam ipsam, architecto sed dolorem quos enim optio eveniet dignissimos aliquam temporibus? Laboriosam ipsa veritatis nemo ab.
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              
          </section>
          </div>
        </main>

      <Footer/>
    </div>
  )
}
