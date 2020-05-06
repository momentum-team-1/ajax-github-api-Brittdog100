let main = document.querySelector("#biocard");
let actuallyRetrieve = true;

fetch(actuallyRetrieve ? "https://api.github.com/users/Brittdog100" : "github.json").then(function(promise) { return promise.json(); }).then(generateContent);

function generateContent(user) {
    let name = document.createElement("h2");
    name.textContent = user.name;
    main.appendChild(name);

    let contactPane = document.createElement("div");
    {
        let header = document.createElement("h3");
        header.textContent = "The Basics";
        contactPane.appendChild(header);

        let info = document.createElement("p");

        //    "<a class='field'>Name</a> <a class='value'>" + user.name + '</a><br>' +
        //    "<a class='field'>Github</a> <a class='value' href='" + user.url + "'>" + user.login + "</a><br>" +
        //    "<a class='field'>Company</a> <a class='value'>@" + user.company + "</a><br>" +
        //    "<a class='field'>Website</a> <a class='value' href='" + user.blog + "'>" + user.blog + "</a>" +
        contactPane.appendChild(info);

    }
    main.appendChild(contactPane);
}