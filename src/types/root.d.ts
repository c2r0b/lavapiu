export interface RootLayoutProps {
    children: React.ReactNode,
    params: {
      locale: string
    }
}

export type MetadataParams = {
    params: RootLayoutProps["params"]
}