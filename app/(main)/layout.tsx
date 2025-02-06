import { Navbar } from "./(components)/navbar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;