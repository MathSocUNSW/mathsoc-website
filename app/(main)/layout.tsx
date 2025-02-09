"use client";

import { Footer } from "./(components)/footer";
import { Navbar } from "./(components)/navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { fetchEvents } from "../../lib/api"; // Ensure correct path

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [events, setEvents] = useState<{ eventImage: string }[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        })();
    }, []);

    return (
        <div>
            <Head>
                {events.map((event, index) => (
                    <link key={index} rel="preload" as="image" href={event.eventImage} />
                ))}
            </Head>
            <Navbar />
            <main className="h-full">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
