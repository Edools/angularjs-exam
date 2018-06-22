export interface IssueModel {
    title: string;
    number: number;
    comments: number;
    user: {
        login: string;
    }
}
