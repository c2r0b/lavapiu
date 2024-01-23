export const MenuContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid bg-white dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent mt-10 text-center grid-cols-1 w-full lg:max-w-7xl lg:mb-0 lg:grid-cols-4 lg:text-left relative px-5 py-10 lg:px-10 lg:py-0 lg:pb-10">
            {children}
        </div>
    )
}