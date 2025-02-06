import { BlockColumn } from "./(components)/block-column";
import Wave from "./(components)/waves-bg";

export default function Home() {
    return (
        <div className="relative w-full h-screen">
            <Wave />
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-white text-4xl font-bold">
                    Welcome to the UNSW Mathematics Society
                </h1>
            </div>
            {/* <BlockColumn heading="title" content="text" /> */}
        </div>
    );
}