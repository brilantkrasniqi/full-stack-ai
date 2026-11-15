const user1 = { name: 'Bri', address: { city: 'Prishtina' } };
const user2 = { name: 'Bri', address: {} };
const user3 = { name: 'Bri' };
const user4 = { name: 'Bri', address: { city: null } };

function formatUser(user) {
const {address = {}} = user;
const {city = 'Unkown'} = address;
return city
}

console.log(formatUser(user1),formatUser(user2),formatUser(user3),formatUser(user4))