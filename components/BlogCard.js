import Link from "next/link"
import Image from "next/image"
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
            <Link href={'/posts/'+slug}>
                <div className="blog-list-home">
                    <div className="blog-thumbnail">
                        <div className="thumbnail-frame">
                            <Image src={coverPhoto.url} alt="" />
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
