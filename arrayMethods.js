// Array.map() review

// const names = ['anne', 'barry', 'chole'];
// const bigNames = names.map((name) => name.toUpperCase());

// Array.filter() and Array.find() basic syntax
// const newArray = Array.filter(callbackfn);
// const value = Array.find(callbackfn);

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// Array Filtered
// const myFavoriteThings = things.filter((thing) => thing.favorite === true);
// console.log(myFavoriteThings)

// const thingsWithOverFiftyPoints = things.filter((thing) => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

// Array Find
// const selectThingByID = (id) => {
//     return things.find((thing) => thing.id === id);
// };
// const selectedThing = selectThingByID(4);
// console.log(selectedThing);

// Bonus Challenge
// Find
// const selectThingByFeat = (featured) => {
//     return things.find((thing) => thing.featured === featured);
// };
// const selectedFeat = selectThingByFeat("true");
// console.log(selectedFeat)

// Filtered
const featuredThing = things.filter((thing) => thing.featured === 'true');
console.log(featuredThing)