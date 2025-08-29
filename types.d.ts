
export type Role = "admin" | "user"

export interface User {
    id: string, 
    name: string,
    email: string,
    role: Role,
    profileImageUrl: string
    token: string
}


export type UserContextType = {
    user: User | null,
    loading: boolean,
    updateUser: (userData: User) => void,
    clearUser: () => void,
}