

import Link from "next/link"
import styles from '../styles/BlogCard.module.css'

export default function BlogPost({
    title,
    preview,
    content, 
    author, 
    coverPhoto,
    datePublished,
    slug,
}){
    return(
        <section>
            <div class="scroll">
                <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
            </div>
            <div class="container">
                <h1>{title}</h1>
                <div class="byline">
                <div class="avatar"><img src={author.avatar.url} /></div>
                by <span>{author.name}</span>
                </div>
                {/* <p><span class="drop">Y</span>ou gotta go through it to see there ain't nothing to it. Did you feel that? Look at me - I'm not out of breath anymore! Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment. </p> */}

                <div dangerouslySetInnerHTML={{__html: content.html}}></div>
            </div>
        </section>
    )
}