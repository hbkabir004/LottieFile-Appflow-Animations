"use client"

import Link from "next/link";
import { useState } from "react";
import './index.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar px-64">
            <div className="flex justify-between items-center">
                <Link href="/" className="brand">
                    AppFlow Animations
                </Link>
                <button className="toggle-button" onClick={toggleNavbar}>
                    ☰
                </button>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link href="/">Home</Link>
                    <Link href="/how-it-works">How It Works</Link>
                    <Link href="/phone-frame">Phone Frame</Link>
                </div>
            </div>
        </nav>
    );
}