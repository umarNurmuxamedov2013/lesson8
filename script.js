
let limitUsers = document.querySelector(".users");
let limitAge = document.querySelector(".limitAge");
let formUsers = document.querySelector(".formUsers");
let sortedCards = document.querySelector(".sortedCards")
let cards = document.querySelector(".cards");
let cardsWrapper = document.querySelector(".cards .cardWrapper");

formUsers.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => createCards(data.users.slice(0, limitUsers.value)))
    function createCards(users) {
        const container = document.getElementById('user-cards-container');

        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user-card';

            const id = document.createElement('h2');
            id.textContent = user.id;

            const firstName = document.createElement('p');
            firstName.textContent = `FirstName: ${user.firstName}`;

            const lastName = document.createElement('p');
            lastName.textContent = `LastName: ${user.lastName}`;

            const age = document.createElement('p');
            age.textContent = `LastName: ${user.age}`;

            card.appendChild(id);
            card.appendChild(firstName);
            card.appendChild(lastName);
            card.appendChild(age);

            cardsWrapper.appendChild(card);
        });

        users.forEach(user => {
            if (user.age > limitAge.value) {
                let card = document.createElement("div");
                card.className = "card";

                let userId = document.createElement("h3");
                userId.className = "userId";
                userId.textContent = `ID: ${user.id}`

                let name = document.createElement("h2");
                name.className = "name";
                name.textContent = `LastName: ${user.lastName }`

                let age = document.createElement("h2");
                age.className = "age";
                age.textContent = `Age: ${user.age}`

                card.append(userId, name, age);
                sortedCards.querySelector(".cardWrapper").appendChild(card)
            }
        })
    }

});


