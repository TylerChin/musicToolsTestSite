var button1 = document.createElement("button");
button1.innerHTML = "Test Button";
button1.value = 0;
button1.id = "test";
document.body.append(button1);

button1.addEventListener("click", increment);

function increment() {
    document.getElementById("test").value++;
    alert("clicked, " + document.getElementById("test").value);

    if (document.getElementById("test").value == 5) {
        alert("Button is now 5. Resetting...");
        document.getElementById("test").value = 0;
    }
    
}

