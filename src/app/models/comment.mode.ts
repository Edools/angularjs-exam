export interface CommentModel {
    body: string;
    user: {
        login: string;
        avatar_url: string;
    }
}
