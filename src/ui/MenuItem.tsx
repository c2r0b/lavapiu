export const MenuItem = ({ id, href, children }: { id: string, href: string, children: React.ReactNode }) => {
    return (
        <a href={ href }>
            <div className="bubble" id={ id }>
                <div className="content">
                    { children }
                </div>
            </div>
        </a>
    )
}