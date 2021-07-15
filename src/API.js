const menuItems = [
  {"itemName": "apple", "displayName": "Apple", "price": 1, "image": "https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg"},
  {"itemName": "orange", "displayName": "Orange", "price": 2, "image": "https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY="},
  {"itemName": "banana", "displayName": "Banana", "price": 0.8, "image": "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg"},
  {"itemName": "kiwi", "displayName": "Kiwi", "price": 1.5, "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=504,458"},
  {"itemName": "strawberry", "displayName": "Strawberry", "price": 0.3, "image": "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg"},
];

// getMenu represents an API call to the backend to get fixed data to display to the user
export const getMenu = () => {
  return menuItems;
}


