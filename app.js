const Application = PIXI.Application;

const app = new Application({
    width: 100,
    height: 100
});

app.renderer.resize(window.innerWidth, window.innerHeight)

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);