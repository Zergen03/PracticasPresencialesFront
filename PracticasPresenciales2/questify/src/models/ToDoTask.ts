export interface ToDoTask {
    Id: number;
    Name: string;
    Description: string;
    GoldReward: number;
    XpReward: number;
    ExpirationDate: Date;
    Difficulty: number;
    CategoryId: number;
}