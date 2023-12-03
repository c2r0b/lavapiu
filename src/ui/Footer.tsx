export const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <footer className="flex bg-white dark:bg-black flex-col items-center justify-center w-full h-24 border-t">
            {children}
        </footer>
    )
}