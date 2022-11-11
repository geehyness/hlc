import Head from "next/head"
import Link from "next/link"

export default function Navbar({}){
return(
    <div>
        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">
                    logo
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" href="/">Home</Link>
                    <Link class="nav-link" href="/posts/">Meditation Times</Link>
                    <Link class="nav-link" href="/building">Building</Link>
                    <Link class="nav-link" href="/contact">Contact Us</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
)
}
