export default class Person {
    constructor(name, email, phone, location, picture) {
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._location = location;
        this._picture = picture;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    get phone() {
        return this._phone;
    }
    set phone(newPhone) {
        this._phone = newPhone;
    }
    get location() {
        return this._location;
    }
    set location(newLocation) {
        this._location = newLocation;
    }
    get picture() {
        return this._picture;
    }
    set picture(newPicture) {
        this._picture = newPicture;
    }
}  