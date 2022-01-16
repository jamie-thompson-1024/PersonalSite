
interface ProjectInfo
{
    name: string
    description: string
    thumbnail?: string
    tags: Array<string>
    href: string
}

interface Filter
{

}

enum Order
{

}

export type {
    ProjectInfo,
    Order, Filter
};
