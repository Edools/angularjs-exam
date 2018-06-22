export interface RepositoryModel {
    name: string;
    html_url: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
