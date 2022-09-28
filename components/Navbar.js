import Head from "next/head"
import Link from "next/link"

export default function Navbar({}){
return(
    <div>
        

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    logo
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="/">Home</a>
                    <a class="nav-link" href="/posts/">Meditation Times</a>
                    <a class="nav-link" href="/building">Building</a>
                    <a class="nav-link" href="/contact">Contact Us</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
)
}