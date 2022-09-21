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