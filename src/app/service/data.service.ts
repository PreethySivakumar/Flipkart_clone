import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Product } from '../product.model';

// interface cartItem extends Product {
//   quantity: number;
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  category: any[] = [];


  private searchSubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchSubject.asObservable();
  // private cartItems = new BehaviorSubject<cartItem[]>([]);
  // cartItem$ = this.cartItems.asObservable();
  private data = [
    { categoryId: 1, categoryName: 'mobile', productId: 101, brand: 'Apple', model: 'iPhone 15 Pro Max 128GB', price: 87273, offerprice: 93045, src: 'assets/mob-one.jpg', review: 'Over 3K+ bought this last month',star:4.4,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Ice Blue', offer: 'Upto 42,000 off on exchange', pageOneDesc: 'Grab now',description:[{feature: '128GB ROM'},{ feature: '15.49cm (6.1inch) super Retina XDR Display'},{ feature: '48MP + 12MP Front Camera'},{ feature: 'A16 Bionic Chip,6 core Processor'},{ feature: '1 Year Warranty for phone and 6 Months Warranty for In-Box Accessories'}],bankoffer:[{bankoff: 'Bank Offer1% Upto 2030 Off On Net Banking Transactions'}, {bankoff: 'Bank Offer1% Upto ₹2030 off on UPI Transactions'}, {bankoff: 'Special PriceGet extra ₹9101 off (price inclusive of cashback/coupon)'}] },
    { categoryId: 1, categoryName: 'mobile', productId: 102, brand: 'Apple', model: 'iPhone 14 Plus 128GB', price: 67273, offerprice: 74045, src: 'assets/mob-two.jpg', review: 'Over 4K+ bought this last month',star:4.2,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Matte Black', offer: 'Save extra with combo offer',description:[{feature: '128GB ROM'},{ feature: '17.02cm (6.7inch) super Retina XDR Display'},{ feature: '12MP + 12MP Front Camera'}, {feature: 'A15 Bionic Chip,6 core Processor'}, {feature: '1 Year Warranty for phone and 6 Months Warranty for In-Box Accessories'}] ,bankoffer:[{bankoff: 'Bank Offer1% Upto 2030 Off On Net Banking Transactions'}, {bankoff: 'Bank Offer3% Upto ₹2030 off on UPI Transactions'}, {bankoff: 'Special PriceGet inclusive of cashback/coupon)'}]},
    { categoryId: 1, categoryName: 'mobile', productId: 103, brand: 'Apple', model: 'iPhone 13 128GB', price: 53253, offerprice: 65045, src: 'assets/mob-3.jpg', review: 'Over 5K+ bought this last month',star:4.5,emi:'save with No cost EMI', productColor: 'Orange',description:[{feature: '128GB ROM'},{ feature: '15.49cm (6.1inch) super Retina XDR Display'},{feature: '12MP + 12MP |12MP Front Camera'},{feature: 'A16 Bionic Chip,6 core Processor'},{feature: '1 Year Warranty for phone and 6 Months Warranty for In-Box Accessories'}],bankoffer:[{bankoff1: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},{bankoff: 'Bank Offer₹1000 Off On All Bank Credit and Debit Card Transactions'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}]},
    { categoryId: 1, categoryName: 'mobile', productId: 104, brand: 'Samsung', model: 'Samsung Galaxy S22 64GB', price: 87273, offerprice: 93045, src: 'assets/mob-four.jpg', review: 'Over 2K+ bought this last month',delivery:'free delivery',emi:'save with No cost EMI',star:4.4, productColor: 'Black',description:[{feature: '6GB RAM|128GB ROM|Expandable upto 2TB'},{ feature: '15.49cm (6.1 inch) Full HD+Display'},{feature: 'Qualcomm snapdragon 8 Gen2 Processor'},{feature: '3900 mAh Lithium Ion Battery'},{feature: '1 year warranty for Device and 6 months for In-Box Accessories'}] ,bankoffer:[{bankoff: 'Extra 10% Off On Combo Mobile & Casecover.6- Aug24'}, {bankoff: 'EMI starting from ₹1,776/month'},{bankoff: 'Special PriceGet extra ₹9101 off (price inclusive of cashback/coupon)'}] },
    { categoryId: 1, categoryName: 'mobile', productId: 105, brand: 'Samsung', model: 'Samsung A23 64GB', price: 37254, offerprice: 41021, src: 'assets/mob-five.jpg', review: 'Over 1000+ bought this last month',star:4.0,delivery:'free delivery', productColor: 'Royal Blue', offer: 'Lowest price since launch',description:[{feature: '6GB RAM|128GB ROM'},{feature: '16.51cm (6.5 inch)Display'},{ feature: '6000 mAh Battery'},{ feature: '50MP Rear Camera'},{feature: 'Domestic 1 year of Device & 6Months for In-Box Accessories'}],bankoffer:[{ bankoff: 'FreebieFlat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking'}, {bankoff: 'Special PriceGet extra ₹37000 off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'}]},
    { categoryId: 1, categoryName: 'mobile', productId: 106, brand: 'Samsung', model: 'Samsung Galaxy S23 128GB', price: 97553, offerprice: 99045, src: 'assets/mob-six.jpg', review: 'Over 4K+ bought this last month',star:4.1,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Gray', description:[{feature: '6GB RAM|128GB ROM'},{ feature: '16.76cm (6.6 inch)Display'}, {feature: '6000mAh Battery'}, {feature: '50MP camera'},{feature: '1 year warranty'}],bankoffer:[{bankoff1: 'No cost EMI ₹5,556/month. Standard EMI also available'},{ bankoff: 'Bank Offer₹4000 Off On HDFC Bank Credit Non EMI, Credit and Debit Card EMI Transactions'}, {bankoff: "Special PriceGet extra ₹40000 off (price inclusive of cashback/coupon)"}]},

    { categoryId: 2, categoryName: 'Men', productId: 201, brand: 'Netplay', model: 'Men Shirt', price: 1889, offerprice: 3500, src: 'assets/men-1.jpg', review: 'Over 500+ bought this last 2 months',star:4.2,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Maroon', pageOneDesc: 'From 800 onwards',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'},{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}],size:[28,30,32,34]},
    { categoryId: 2, categoryName: 'Men', productId: 202, brand: 'Netplay', model: 'Men Sharvani', price: 1545, offerprice: 1900, src: 'assets/men-2.jpg', review: 'Over 2K+ bought this last month',star:4.4,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Sandal Kurta with red Pant',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}],size:[28,30,32,34]},
    { categoryId: 2, categoryName: 'Men', productId: 203, brand: 'Roadster', model: 'Men Shirt', price: 859, offerprice: 1545, src: 'assets/men-3.jpg', review: 'Over 700+ bought this last 2 months',star:3.8,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Deep Blue',bankoffer:[{bankoff: 'Bank OfferExtra ₹750 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 months and above, Min Txn Value ₹35,000'}, {bankoff: 'Bank OfferFlat ₹500 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹30,000 aboveT&C'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹50,000 and above'}],size:[28,30,32]},
    { categoryId: 2, categoryName: 'Men', productId: 204, brand: 'Roadster', model: 'Men Shirt', price: 689, offerprice: 1300, src: 'assets/men-4.jpg', review: 'Over 1K+ bought this last 3 months',star:4.0,emi:'save with No cost EMI', productColor: 'Gray',bankoffer:[{bankoff: 'Bank OfferFlat ₹500 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹30,000 above'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹30,000 and above'}, {bankoff: 'Bank OfferExtra ₹1000 off on HDFC Bank Debit Card EMI Txns, Tenure: 3 months and above, Min Txn Value ₹50,000'}],size:[28,30,32,34]},
    { categoryId: 2, categoryName: 'Men', productId: 205, brand: 'Roadster', model: 'Men T-shirt', price: 489, offerprice: 870, src: 'assets/men-5.jpg', review: 'Over 800+ bought this last 2 months',star:4.1,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'brown',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}],size:[28,30,32,34]},
    { categoryId: 2, categoryName: 'Men', productId: 206, brand: 'Roadster', model: 'Men T-shirt', price: 526, offerprice: 980, src: 'assets/men-6.jpg', review: 'Over 3K+ bought this last month',star:4.0,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Multicolor',bankoffer:[{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank OfferExtra ₹500 off on HSBC Credit Card EMI Txns, Tenure: 9 months and above, Min. Txn Value: ₹3,000'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹50,000 and above'}],size:[28,30,32] },

    { categoryId: 3, categoryName: 'Women', productId: 301, brand: 'W', model: 'women top', price: 4599, offerprice: 8500, src: 'assets/women-one.png', review: 'Over 2k+ bought this last month',star:4.0,delivery:'free delivery', productColor: 'Green', pageOneDesc: 'offer upto 40%',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}],size:[26,28,30,34]},
    { categoryId: 3, categoryName: 'Women', productId: 302, brand: 'Nachus', model: 'women Saree', price: 559, offerprice: 820, src: 'assets/women-two.png', review: 'Over 400+ bought this last week',star:4.1,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Gray',bankoffer:[{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank OfferExtra ₹500 off on HSBC Credit Card EMI Txns, Tenure: 9 months and above, Min. Txn Value: ₹3,000'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹50,000 and above'}],size:['XS','S','M','L']},
    { categoryId: 3, categoryName: 'Women', productId: 303, brand: 'Jazzs', model: 'women Dress', price: 889, offerprice: 1500, src: 'assets/women-three.png', review: 'Over 800+ bought this last month',star:4.4,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Multicolor',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}],size:[26,28,30]},
    { categoryId: 3, categoryName: 'Women', productId: 304, brand: 'W', model: 'women Dress', price: 785, offerprice: 1670, src: 'assets/women-four.png', review: 'Over 250+ bought this last month',star:4.2,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Orange with white',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}],size:['S','M','L']},
    { categoryId: 3, categoryName: 'Women', productId: 305, brand: 'Nachus', model: 'women Saree', price: 629, offerprice: 840, src: 'assets/women-five.png', review: 'Over 200+ bought this last month',star:4.5, productColor: 'yellow',bankoffer:[{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank OfferExtra ₹500 off on HSBC Credit Card EMI Txns, Tenure: 9 months and above, Min. Txn Value: ₹3,000'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹50,000 and above'}],size:[26,28,30,32,34]},
    { categoryId: 3, categoryName: 'Women', productId: 306, brand: 'W', model: 'women Dress', price: 2629, offerprice: 4730, src: 'assets/women-six.png', review: 'Over 1K+ bought this last month',star:4.0, delivery:'free delivery',emi:'save with No cost EMI',productColor: 'Black',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}],size:['XS','S','M','L']},

    { categoryId: 4, categoryName: 'beauty', productId: 401, brand: 'Revlon', model: 'Lipstick', price: 2559, offerprice: 3340, src: 'assets/beauty-1.jpg', review: 'Over 5K+ bought this last month',star:4.3,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'cherry pink Shade', pageOneDesc: 'Check out for offer',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}]},
    { categoryId: 4, categoryName: 'beauty', productId: 402, brand: 'Sugar', model: 'Lipstick', price: 339, offerprice: 700, src: 'assets/beauty-2.jpg', review: 'Over 1K+ bought this last month',star:4.2,emi:'save with No cost EMI', productColor: 'purple',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]},
    { categoryId: 4, categoryName: 'beauty', productId: 403, brand: 'Huda', model: 'Eye Shadow', price: 759, offerprice: 1347, src: 'assets/beauty-3.jpg', review: 'Over 1.5K+ bought this last month',star:4.2,delivery:'free delivery', productColor: 'Multi color(9 shade)',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}]},
    { categoryId: 4, categoryName: 'beauty', productId: 404, brand: 'Decorte', model: 'Eye Shadow', price: 1359, offerprice: 2530, src: 'assets/beauty-4.jpg', review: 'Over 1K+ bought this in the last 2 months',star:4.1,delivery:'free delivery',emi:'save with No cost EMI',productColor: 'Multi color(quad color)',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'},{bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},
    { categoryId: 4, categoryName: 'beauty', productId: 405, brand: 'Lakme', model: 'Loose Powder', price: 639, offerprice: 980, src: 'assets/beauty-5.jpg', review: 'Over 1K+ bought this last month',star:4.3,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Peach',bankoffer:[{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Combo OfferBuy 2 or more items save ₹30'}, {bankoff: 'Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!'}]},
    { categoryId: 4, categoryName: 'beauty', productId: 406, brand: 'Huda', model: 'Face Powder', price: 559, offerprice: 789, src: 'assets/beauty-6.jpg', review: 'Over 2K+ bought this last month',star:4.4,delivery:'free delivery',emi:'save with No cost EMI', productColor: 'Medium',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]},

    { categoryId: 5, categoryName: 'electronics', productId: 501, brand: 'Samsung', model: '55 Inch TV', price: 54999, offerprice: 68900, src: 'assets/tv-1.jpg', review: 'Over 3K+ bought this last month',star:4.4,delivery:'free delivery',emi:'save with No cost EMI', pageOneDesc: 'Grab now',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'}, {bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},
    { categoryId: 5, categoryName: 'electronics', productId: 502, brand: 'JBL', model: 'JBL Bluetooth Speaker', price: 4999, offerprice: 5840, src: 'assets/tv-2.jpg', review: 'Over 2K+ bought this last month',star:4.2,emi:'save with No cost EMI',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]},
    { categoryId: 5, categoryName: 'electronics', productId: 503, brand: 'JBL', model: 'Bluetooth Speaker Small', price: 543, offerprice: 730, src: 'assets/tv-3.jpg', review: 'Over 1K+ bought this last month',star:4.4, delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'}, {bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},
    { categoryId: 5, categoryName: 'electronics', productId: 504, brand: 'sony', model: 'JBL Bluetooth Speaker', price: 5339, offerprice: 6340, src: 'assets/tv-4.jpg', review: 'Over 4K+ bought this last month',star:4.3,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]},
    { categoryId: 5, categoryName: 'electronics', productId: 505, brand: 'Samsung', model: 'fridge', price: 54999, offerprice: 78340, src: 'assets/tv-5.jpg', review: 'Over 1K+ bought this last month',star:4.5,delivery:'free delivery',bankoffer:[{bankoff:'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'},{bankoff:'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'},{bankoff:'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns'}]},
    { categoryId: 5, categoryName: 'electronics', productId: 506, brand: 'Samsung', model: 'Double Door Fridge', price: 84332, offerprice: 92340, src: 'assets/tv-6.jpg', review: 'Over 100+ bought this last week',star:4.0,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'}, {bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},

    { categoryId: 6, categoryName: 'essentials', productId: 601, brand: 'Dettol', model: 'Handwash', price: 99, offerprice: 150, src: 'assets/med-1.jpg', review: 'Over 500+ bought this last month',star:4.2, pageOneDesc: 'Grab now',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'}, {bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'}, {bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},
    { categoryId: 6, categoryName: 'essentials', productId: 602, brand: 'Head&Shoulders', model: 'Shampoo(200ml)', price: 169, offerprice: 240, src: 'assets/med-2.jpg', review: 'Over 700+ bought this last month',star:4.3,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'}, {bankoff2: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]},
    { categoryId: 6, categoryName: 'essentials', productId: 603, brand: 'Pantene', model: 'Shampoo', price: 99, offerprice: 124, src: 'assets/med-3.jpg', review: 'Over 1K+ bought this last month',star:4.3,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},{bankoff: 'Bank OfferFlat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000'},{bankoff: 'Bank Offer10% off up to ₹1,500 on HSBC Bank Credit Card EMI Transactions, on orders of ₹7,500 and above'}]},
    { categoryId: 6, categoryName: 'essentials', productId: 604, brand: 'Sunsilk', model: 'Shampoo(1+1 offer)', price: 339, offerprice: 389, src: 'assets/med-4.jpg', review: 'Over 1.5K+ bought this last month',star:4.5,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Bank OfferExtra ₹1000 off on HDFC Bank Debit Card EMI Txns, Tenure: 3 months and above, Min Txn Value ₹50,000'},{bankoff: 'Bank OfferFlat ₹500 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹30,000 above'}, {bankoff: 'Bank OfferExtra ₹500 off on OneCard Credit Card EMI Transactions on products priced ₹30,000 and above'}] },
    { categoryId: 6, categoryName: 'essentials', productId: 605, brand: 'Lifebuoy', model: 'Soap', price: 59, offerprice: 65, src: 'assets/med-5.jpg', review: 'Over 300+ bought this last month',start:4.2,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'},{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50' }]},
    { categoryId: 6, categoryName: 'essentials', productId: 606, brand: 'Lux', model: 'Soap', price: 45, offerprice: 52, src: 'assets/med-6.jpg', review: 'Over 500+ bought this last month',star:4.1,delivery:'free delivery',emi:'save with No cost EMI',bankoffer:[{bankoff: 'Special PriceGet extra 29% off (price inclusive of cashback/coupon)'},{bankoff: 'Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above'}, {bankoff: 'Bank OfferFlat ₹750 off on HDFC Bank Debit Card EMI Txns, Tenure: 9 months, Min Txn Value: ₹7,50'}]}


  ]

  constructor() { }

  getItemsByCategory(categoryId: number): Observable<any[]> {
    return of(this.data.filter(item => item.categoryId === categoryId));
  }

  // SearchItems(query: string): Observable<any[]> {
  //   const lowerQuery = query.toLowerCase();
  //   return of(this.data.filter(item =>
  //     item.model.toLowerCase().includes(lowerQuery) ||
  //     item.brand.toLowerCase().includes(lowerQuery)
  //   ))
  // }

  getProductById(productId: number): Observable<any> {
    const product = this.data.find(p => p.productId === productId);
    return of(product);
  }

  getProducts(): Observable<Product[]> {
    return of(this.data);
  }

  // searchProducts(query:string):Observable<Product[]>{
  //   const lowerQuery = query.toLowerCase();
  //   return of(this.data).pipe(
  //     map(products => products.filter (product =>
  //       product.categoryName.toLowerCase().includes(lowerQuery) ||
  //       product.brand.toLowerCase().includes(lowerQuery) ||
  //       product.model.toLowerCase().includes(lowerQuery)
  //     ))
  //   );
  // }

  // setSearchQuery(query: string) {
  //   console.log("in search service");
  //   this.searchSubject.next(query);
  // }

  searchProducts(query: string): Observable<any[]> {
    const filteredProducts = this.data.filter(product =>
      product.categoryName.toLowerCase().includes(query.toLowerCase()) ||
      product.model.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredProducts);
  }

  //  getOneProduct(){
  //   const seenCategory = new Set<number>;

  //   return of(this.data.filter(product => {
  //     if(!seenCategory.has(product.categoryId)){
  //       seenCategory.add(product.categoryId);
  //       return true;
  //     }
  //     return false;
  //   }

  // ))
}