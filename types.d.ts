import type { IconType } from "react-icons"

export type Role = "admin" | "user";

export type taskDistributionType = {
    Pending: number,
    InProgress: number,
    Completed: number,
    All: number
}

export type Task = {
    _id: string,
    title: string,
    priority: string,
    status: string,
    dueDate: string,
    createdAt: string
}

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

export type SideMenuDataType = {
    id: string,
    label: string,
    icon: IconType,
    path: string,
}

export type getDashboardDataType = {

    statistics: {
        totalTask: number,
        pendingTasks: number,
        completedTasks: number,
        overdueTasks: number
    },
    charts: {
        taskDistribution: taskDistributionType,
        taskPriorityLevels: {
            Low: number,
            Medium: number,
            High: number
        }
    },
    recentTasks: Task[]
}
