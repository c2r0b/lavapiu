export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between pt-16">
            {children}
        </main>
    )
}