import {GraphQLClient, gql} from 'graphql-request'
import PostHeader from '../../components/PostHeader';
import Footer from '../../components/Footer'
import PostBody from '../../components/PostBody'

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8bll9nl0xgr01t7cob8btmg/master"
);

const QUERY = gql`
{
  posts(where: {slug: "testing-this-thing"}) {
    id
    title
    preview
    datePublished
    slug
    coverPhoto {
      id
    }
    content {
      html
    }
    author {
      name
      avatar {
        url
      }
    }
  }
}
`;

const SLUGLIST = gql`
{
  posts {
    slug
  }
}
`;

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths:posts.map((post) => ({params:{slug:post.slug}})),
        fallback: false,
    };
}

export async function getStaticProps({params}){
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});

    console.log("SLUG - " + data.posts[0].title)

    const post = data.posts[0];
    return {
      props: {
        post,
      },
      revalidate:10,
    };
  }

export default function BlogPost({post}) {
    return (
        <div>
            {/* <img src={post.coverPhoto.url}/> */}
            {/* COOL {post.title} */}
            
            



            <PostHeader
                title={post.title}
                preview={post.preview}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                content={post.content}/>

            <PostBody
                title={post.title}
                preview={post.preview}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                content={post.content}/>

            <Footer/>

        </div>
    )};
  