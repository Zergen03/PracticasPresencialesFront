import { Items } from "./Items";
import { User } from "./User";

export interface UserItem {
    Id: number;
    User_Id: number;
    User: User;
    Item_Id: number;
    Items: Items;
}