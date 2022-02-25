
interface ProjectInfo
{
    name: string
    description: string
    thumbnail?: string
    tags: Array<string>
    markdown: string
}

interface Filter
{

}

export type {
    ProjectInfo,
    Filter
};
