// manifest.js

function appElement() {
    var app = document.createElement('div');
    app.id = 'coronavirus-app-root';
    app.style.display = 'none';
    return app;
}

function toggle(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var element =  document.getElementById('coronavirus-app-root');
if (typeof(element) != 'undefined' && element != null) {
    toggle(element);
} else {
    var injected = appElement();
    document.body.appendChild(injected);
    console.log("Coronavirus Dashboard loaded")
}

