import Person from './Person.js';

const parseUserData = (userData) => {
    const name = `${userData.name.first} ${userData.name.last}`;
    const email = userData.email;
    const phone = userData.phone;
    const location = `${userData.location.city}`;
    const picture = userData.picture.large;

    return new Person(name, email, phone, location, picture);
};

export { parseUserData };
