import React from 'react'
import './assets/css/style.css'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg background mb-2 sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Header</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}
