let searchInput = document.querySelector('.searchInput');
let searchBtn = document.querySelector('.searchBtn');
let peoplesContainer = document.querySelector('.peoples');

const peoples={
    userName:["John Doe","Jane Smith","Alice Johnson","Bob Brown","Charlie Davis"],
    userImg:[
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],

}


function createPeople(username,userImg){


    let peopleDiv=`<div class="people">
                <img src="${userImg}" alt="">
                <h3>${username}</h3>
            </div>`;
    peoplesContainer.innerHTML += peopleDiv;
}



searchInput.addEventListener('keyup', function() {
    let searchTerm = searchInput.value.toLowerCase().trim();
    console.log(searchTerm);

    // Clear the container before adding new results
    peoplesContainer.innerHTML = '';

    peoples.filteredUsernames = peoples.userName.filter(function(username) {
        return username.toLowerCase().trim().includes(searchTerm);
    });

    if (peoples.filteredUsernames.length > 0) {
        peoples.filteredUsernames.forEach(function(username) {
            let index = peoples.userName.indexOf(username);
            createPeople(username, peoples.userImg[index]);
        });
    } else {
        peoplesContainer.innerHTML = '<h1>No results found.</h1>';
    }





});

