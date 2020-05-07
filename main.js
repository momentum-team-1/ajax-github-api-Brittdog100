let main = document.querySelector("#biocard");
let actuallyRetrieve = true;

fetch(actuallyRetrieve ? "https://api.github.com/users/Brittdog100" : "github.json").then(function(promise) { return promise.json(); }).then(generateContent);

function generateContent(user) {
    let name = document.createElement("h2");
    name.textContent = user.name;
    main.appendChild(name);

    let contactPane = document.createElement("div");
    let cHeader = document.createElement("h3");
    cHeader.textContent = "The Basics";
    contactPane.appendChild(cHeader);

    let info = document.createElement("p");
    generateInfo("Name", user.name, info);
    lineBreak(info);
    generateInfo("Github", user.login, info).href = user.url;
    lineBreak(info);
    generateInfo("Company", user.company, info);
    lineBreak(info);
    generateInfo(null, "Website", info).href = user.blog;
    contactPane.appendChild(info);

    main.appendChild(contactPane);

    let bioPane = document.createElement("div");
    let bHeader = document.createElement("h3");
    bHeader.textContent = "The Story";
    bioPane.appendChild(bHeader);

    let bio = document.createElement("blockquote");
    bio.textContent = user.bio;
    bioPane.appendChild(bio);
    let img = document.createElement("img");
    img.src = user.avatar_url;
    bioPane.appendChild(img);

    main.appendChild(bioPane);

}

function generateInfo(field, value, parent) {
    let info_field = document.createElement("a");
    info_field.classList.add("field");
    info_field.textContent = field;
    let info_value = document.createElement("a");
    info_value.classList.add("value");
    info_value.textContent = value;
    if(field !== null)
        parent.appendChild(info_field);
    parent.appendChild(info_value);
    return info_value;
}
function lineBreak(parent) { parent.appendChild(document.createElement("br")); }