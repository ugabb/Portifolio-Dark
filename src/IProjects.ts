export interface IProject {
    name: string;
    photo: string;
    description: string[];
    technologies: ITechnologies[];
    repo: string;
    deploy?: string;
    more: string;
}

interface ITechnologies {
    name:string;
    imageUrl:string;
}