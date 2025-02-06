"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    // for any vars
    
    return (
        <div className="z-50 fixed top-0 flex items-center justify-between w-full p-4 xl:px-96">

            <Link className="" href="/">
                <Image
                    src="/images/mathsoc-logo-longform.svg"
                    alt="MathSoc Logo"
                    width={150}
                    height={50}
                    className="h-10 w-auto invert"
                    priority
                />
            </Link>

            <Link className="" href="/about">About</Link>
            <Link className="" href="/events">Events</Link>
            <Link className="" href="/resources">Resources</Link>
            <Link className="" href="/sponsors">Sponsors</Link>
            <Link className="" href="/careers">Careers</Link>
            <Link className="" href="/contact-us">Contact Us</Link>

        </div>
    )
}