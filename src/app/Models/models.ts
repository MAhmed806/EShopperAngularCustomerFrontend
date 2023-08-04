export interface Product{
    Id:number;
    Name:string;
    Price:number;
    Image:string;
    Pcolor:string;
    AvailableQuantity:number;
    Quantity:number;
    ProductTypeId:number;
}
export interface ProductType{
    Id:number;
    Name:string;
    Image:string;
}
export interface Order{
    id:number;
    CustomerName:string;
    CustomerPhone:number;
    CustomerEmail:string;
    CustomerAddress:string;
    OrderCost:number;
    PaymentMethod:string;
    OrderDetails:OrderDetails[];
    UserId:string;
    
    
}
export interface OrderDetails{
    ProductId:number;
    ProductQuantity:number;
}