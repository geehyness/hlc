import Link from "next/link"

export default function PostHeader({
    title,
    preview, 
    author, 
    coverPhoto,
    datePublished,
    slug,
    content
}){
    return(
      <header>
        {console.log(coverPhoto)}
        <style jsx>{`
          header:after {
            filter: blur(5px);
            background-attachment: fixed;
            background-image: url(${coverPhoto.url});
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: cover;
            animation: blur 10s linear infinite;
            overflow: hidden;
            z-index: -1;
          }`
        }
        </style>
        
        <div className="container">
          <nav>
            <div className="logo">
              {/* <svg src="" /> */}
            </div>
            <div className="subscribe">
              <a href="#">Subscribe</a>
            </div>
          </nav>
          <blockquote>{preview}
          <span>&mdash; {author.name}</span>
          </blockquote>
          <div className="date">
            <i className="fa fa-calendar" aria-hidden="true"></i> 
            {datePublished}
          </div>
        </div>
      </header>
    )
}