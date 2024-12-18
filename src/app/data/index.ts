

function getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const destinationItems = [
    {
        id: "1",
        Image: "/destinations/new-york.jpg",
        title: "New-York",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "2",
        Image: "/destinations/alaska.jpg",
        title: "Alaska",
        rating: getRandomValue(1, 5),
        period: "3 Days 3 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "3",
        Image: "/destinations/amazon-forest.jpg",
        title: "Amazon-Forest",
        rating: getRandomValue(1, 5),
        period: "2 Days 2 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "4",
        Image: "/destinations/bora-bora.jpg",
        title: "Bora-Bora",
        rating: getRandomValue(1, 5),
        period: "2 Days 1 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "5",
        Image: "/destinations/dubai.jpg",
        title: "Dubai",
        rating: getRandomValue(1, 5),
        period: "2 Days 1 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "6",
        Image: "/destinations/hawaii.jpg",
        title: "Hawaii",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "7",
        Image: "/destinations/Lake-Tahoe.jpg",
        title: "Lake-Tahoe",
        rating: getRandomValue(1, 5),
        period: "7 Days 6 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "8",
        Image: "/destinations/maldives.jpg",
        title: "Maldives",
        rating: getRandomValue(1, 5),
        period: "2 Days 1 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "9",
        Image: "/destinations/phuket.jpg",
        title: "Phuket",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "10",
        Image: "/destinations/rome.jpg",
        title: "Rome",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "11",
        Image: "/destinations/switzerland.jpg",
        title: "Switzerland",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Night",
        price: getRandomValue(50,1000),
    },
    {
        id: "12",
        Image: "/destinations/tuscany.jpg",
        title: "Tuscany",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Night",
        price: getRandomValue(50,1000),
    },

];

const adjectives = [
    "Luxurious", "Cozy", "Modern", "Elegant", "Charming", "Spacious", "Exclusive"
];

const nouns = [
    "Palace", "Mansion", "Suite", "Retreat", "Villa", "Inn", "Lodge"
];

function generateRandomTitle() {
    const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`
}

export const hotels = [
    {
        id: "1",
        Image: "/hotels/hotel1.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
    },
    {
        id: "2",
        Image: "/hotels/hotel2.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
    },
    {
        id: "3",
        Image: "/hotels/hotel3.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
    },
    {
        id: "4",
        Image: "/hotels/hotel4.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50,1000),
    },

];

export const testmonials = [
    {
    name: "Emily Johson",
    rating: 5,
    description: "Excepyional service! The team went above and beyond to meet my expectations. I'm impressed with the attention to detail and prompt comunication. Highly recommend!",
    country: "United States",
    image: "/testmonial/profile1.jpg",
    },
    {
        name: "John Anderson",
        rating: 5,
        description: "Great experience overall. The product quality is good, and the delivery was on time. A minor hiccup in communication, but the team quickly resolved it. will consider for future purchases.",
        country: "Canada",
        image: "/testmonial/profile3.jpg",
        },
        {
            name: "Sophia Ramiraz",
            rating: 5,
            description: "Outstanding customer service! The team was incredibly and reponsive. They addressed all my concerns, making the entire process smooth. Very satusfied with the outcome!",
            country: "Austra",
            image: "/testmonial/profile2.jpg",
            },
]