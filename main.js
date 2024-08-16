

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Lic. Lenguas Extranjeras | Desarrolladora Fronted Jr.<h2>')
    .pauseFor(2500)
    .deleteAll()
    .start();

