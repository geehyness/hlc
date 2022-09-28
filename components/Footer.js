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
        <footer className="footer">
            <div className="footer-logo">
                {/* SVG LOGO */}
            </div>
            <div className="footer-links">
                <ul>
                <li><h3>Content</h3></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Products</a></li>
                </ul>
                <ul>
                <li><h3>Follow Us</h3></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
                </ul>
                <ul>
                <li><h3>Legal</h3></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="disclaimer">
                <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> &nbsp;&nbsp;|&nbsp;&nbsp; Higher Life Centre</p>
            </div>
            </footer>   
    )
}