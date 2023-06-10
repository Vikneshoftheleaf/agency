
const form = document.getElementById("cform");
const messcon = document.getElementById("all-msg");

function genchat() {
    const chattxt = JSON.parse(localStorage.getItem("chatmsg")) || [];
    chattxt.forEach((chats) => {
        const newDiv = document.createElement("div");
        const nestedDiv = document.createElement("div");
        const uniqid = Date.now().toString();

        newDiv.classList.add("chat-card");
        newDiv.classList.add("w-full");
        newDiv.classList.add("flex");
        newDiv.classList.add("justify-end");

        nestedDiv.classList.add("w-[80%]");
        nestedDiv.classList.add("lg:p-6");
        nestedDiv.classList.add("p-4");
        nestedDiv.classList.add("bg-indigo-500");
        nestedDiv.classList.add("rounded-md");
        nestedDiv.setAttribute("data-id", uniqid);

        nestedDiv.textContent = chats;

        newDiv.appendChild(nestedDiv);
        messcon.appendChild(newDiv);

    })
}

window.addEventListener("DOMContentLoaded", genchat);

function consummit(event) {

    event.preventDefault();
    const emailinput = document.getElementById("email");
    const messageinput = document.getElementById("message");
    const em = emailinput.value;
    const msg = messageinput.value;
    const newDiv = document.createElement("div");
    const nestedDiv = document.createElement("div");
    const uniqid = Date.now().toString();

    newDiv.classList.add("chat-card");
    newDiv.classList.add("w-full");
    newDiv.classList.add("flex");
    newDiv.classList.add("justify-end");

    nestedDiv.classList.add("w-[80%]");
    nestedDiv.classList.add("lg:p-6");
    nestedDiv.classList.add("p-4");
    nestedDiv.classList.add("bg-indigo-500");
    nestedDiv.classList.add("rounded-md");
    nestedDiv.setAttribute("data-id", uniqid);

    nestedDiv.textContent = msg;

    newDiv.appendChild(nestedDiv);
    messcon.appendChild(newDiv);

    const lmsg = JSON.parse(localStorage.getItem("chatmsg")) || [];
    lmsg.push(msg);
    localStorage.setItem("chatmsg", JSON.stringify(lmsg));
    form.submit();

/*
    const conData = new FormData(form);
     fetch("https://formspree.io/f/mvonjjag", {
         method: "POST",
         body: conData
     })
         .then(res => {
             if (res.ok) {
                 console.log("form data sent");
                 messageinput.value = "";
             } else {
                 console.log("form data sent failed");
             }
         })
         .catch(err => {
             console.log("error:", err)
         })
*/
}

form.addEventListener("submit", consummit);

const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("chatmsg");
    window.location.reload();
})

const url = new URL(window.location.href);
const msg = url.searchParams.get("msg");
const writemsg = document.getElementById("message");

if (msg == "startproject") {
    writemsg.value = "I like to give you a Project.";
} else if (msg == "webDesDet") {
    writemsg.value = "Give more information about your web designing service.";
} else if (msg == "webDevDet") {
    writemsg.value = "Give more information about your web development service.";
}
else if (msg == "uxDet") {
    writemsg.value = "Give more information about your web development service.";
}
else if (msg == "portfolio") {
    writemsg.value = "I like to have a awesome portfolio for my Service. ";
}
else if (msg == "smallb") {
    writemsg.value = "I like to have a Website for my Agency. ";
}
else if (msg == "enterprice") {
    writemsg.value = "I like to have a Website for my Company. ";
}


