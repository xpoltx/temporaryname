export interface CreateUserDTO{
    fullname: string;
    email: string;
    password: string;
    role?: string;
    profilePic?: string;
    uuid?: string;
    confirmToken?: string;
}