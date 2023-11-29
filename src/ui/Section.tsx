export const Section = ({ id, type, children }: { id: string, type: 'light'|'dark', children: React.ReactNode }) => {
    switch (type) {
        case 'light':
            return (
                <section id={ id } className="px-8 lg:px-32 py-32 w-full grid text-center bg-white dark:bg-gray-800">
                    {children}
                </section>
            )
        case 'dark':
            return (
                <section id={ id } className="px-8 lg:px-32 py-32 w-full grid text-center bg-gray-100 dark:bg-gray-900">
                    {children}
                </section>
            )
    }
}