interface MenuItem {
    image: any;
    title: string;
    subtitle: string;
    price: string;
    category: string;
    width?: string
    height?: string
}

export const menuItems: MenuItem[] = [
    {
        image: require('../../../../assets/images/dishes01.png'),
        title: 'Chicken burger',
        subtitle: 'with bacon',
        price: '$5.99',
        category: 'Dish'
    },
    {
        image: require('../../../../assets/images/dishes02.png'),
        title: 'Wok noodles',
        subtitle: 'with beef',
        price: '$8.99',
        category: 'Dish',
        width: 'w-[122px]',
    },
    {
        image: require('../../../../assets/images/dishes03.png'),
        title: 'Pasta farfalle',
        subtitle: 'with onion',
        price: '$7.99',
        category: 'Dish',
        width: 'w-[122px]',
    },
    {
        image: require('../../../../assets/images/dishes04.png'),
        title: 'Oven pizza',
        subtitle: 'with cheese',
        price: '$12.99',
        category: 'Dish',
        width: 'w-[122px]',
    },
    {
        image: require('../../../../assets/images/dishes05.png'),
        title: 'Pizza',
        subtitle: 'with tomatoes',
        price: '$10.99',
        category: 'Dish',
        width: 'w-[135px]',
    },
    {
        image: require('../../../../assets/images/dishes06.png'),
        title: 'Pasta',
        subtitle: 'with mazarello',
        price: '$7.99',
        category: 'Dish',
        width: 'w-[122px]',
        height: 'h-[122px]',
    },
    {
        image: require('../../../../assets/images/salat01.png'),
        title: 'Chicken salad',
        subtitle: 'with tomato',
        price: '$3.99',
        category: 'Salats',
        width: 'w-[122px]',
        height: 'h-[122px]',
    },
    {
        image: require('../../../../assets/images/salat02.png'),
        title: 'Salad',
        subtitle: 'with shrimp',
        price: '$6.99',
        category: 'Salats',
        width: 'w-[144px]',
    },
    {
        image: require('../../../../assets/images/salat03.png'),
        title: 'Salad',
        subtitle: 'with salmon',
        price: '$7.99',
        category: 'Salats',
        width: 'w-[122px]',
    },
    {
        image: require('../../../../assets/images/salat04.png'),
        title: 'Fruit Salad',
        subtitle: '',
        price: '$3.99',
        category: 'Salats',
        width: 'w-[122px]',
    },
    {
        image: require('../../../../assets/images/drinks01.png'),
        title: 'Lemonade',
        subtitle: 'with rose',
        price: '$6.99',
        category: 'Drinks',
        width: 'w-[99px]',
    },
    {
        image: require('../../../../assets/images/drinks02.png'),
        title: 'Lemonade',
        subtitle: 'with strawberry',
        price: '$6.99',
        category: 'Drinks',
        width: 'w-[99px]',
    },
    {
        image: require('../../../../assets/images/drinks03.png'),
        title: 'Lemonade',
        subtitle: 'with orange',
        price: '$7.99',
        category: 'Drinks',
        width: 'w-[99px]',
    },
    {
        image: require('../../../../assets/images/drinks04.png'),
        title: 'Milkshake',
        subtitle: 'with Oreo',
        price: '$5.99',
        category: 'Drinks',
        width: 'w-[99px]',
    },
];
