import type { Items } from "./Items";
import type { User } from "./User";


export interface UserItem {
    Id: number;
    User_Id: number;
    User: User;
    Item_Id: number;
    Items: Items;
}