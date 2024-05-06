const findTheOldest = function(people) {
    people.map((person) => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth
    });
    const oldest = people.reduce((oldestPerson, person) => person.age > oldestPerson.age ? person : oldestPerson);
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
