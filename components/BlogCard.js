import Link from "next/link"
import styles from '../styles/BlogCard.module.css'

export default function BlogPost({
    title,
    preview, 
    author, 
    coverPhoto,
    datePublished,
    slug,
}){
    return(
        <div className={styles.card}>
            <Link href={'/post/'+slug}>
                <div className="blog-list-home">
                    <div className="blog-thumbnail">
                        <div className="thumbnail-frame">
                            <img src={coverPhoto.url} alt="" />
                        </div>
                    </div>
                    <div className="blog-list-content">
                        <h4>{title} by {author.name}</h4>
                        {preview}
                    </div>

                </div>
            </Link>
        </div>
    )
}