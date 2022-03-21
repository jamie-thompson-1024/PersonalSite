
interface ProjectInfo
{
    name: string
    description: string
    thumbnail?: string
    tags?: Array<string>
    markdown: string
}

interface Filter
{
    byName?: string,
    byTag?: string[]
}

export type {
    ProjectInfo,
    Filter
};
