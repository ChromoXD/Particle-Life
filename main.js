/*
FFDBBA
FF8894
D4F1D8
5EA8E6
*/
(async () => {
    const app = new PIXI.Application();

    await app.init({
        resizeTo: window,
        backgroundColor: 0x0F0E12
    })

    app.canvas.style.position = 'absolute';

    let particle = [];
    let particle2 = [];
    let forces = [[], [], [], []];

    let color = [0x5EA8E6, 0xB22222, 0x468432, 0xFFC81E];

    for (let i = 0; i < 150; i++) {
        const graphics = new PIXI.Graphics()

        graphics.circle(0, 0, 3);
        graphics.fill(color[0]);
        graphics.x = Math.random() * window.innerWidth;
        graphics.y = Math.random() * window.innerHeight;
        app.stage.addChild(graphics);

        particle.push(graphics);
    }

    for (let i = 0; i < 150; i++) {
        const graphics = new PIXI.Graphics()

        graphics.circle(0, 0, 3);
        graphics.fill(color[1]);
        graphics.x = Math.random() * window.innerWidth;
        graphics.y = Math.random() * window.innerHeight;
        app.stage.addChild(graphics);

        particle2.push(graphics);
    }

    app.ticker.add(() => {
        forces[0] = Applied_Force([particle, particle], 1);
        particle.forEach((element, i) => {
            element.x += forces[0][i][0];
            element.y += forces[0][i][1];
        });

        forces[1] = Applied_Force([particle2, particle2], 0);
        particle2.forEach((element, i) => {
            element.x += forces[1][i][0];
            element.y += forces[1][i][1];
        });

        forces[2] = Applied_Force([particle2, particle], 1);
        particle2.forEach((element, i) => {
            element.x += forces[2][i][0];
            element.y += forces[2][i][1];
        });

        forces[3] = Applied_Force([particle, particle2], -1);
        particle.forEach((element, i) => {
            element.x += forces[3][i][0];
            element.y += forces[3][i][1];
        });

        particle.forEach(element => {
            Mod_Cord(element)
        });

        particle2.forEach(element => {
            Mod_Cord(element)
        });

    });

    document.body.appendChild(app.canvas);

})();

const max_r = 100;

function Applied_Force(particles, a) {
    let R_force = []
    particles[0].forEach(element => {
        let force_X = 0;
        let force_Y = 0;
        particles[1].forEach(element2 => {
            let dx = element2.x - element.x;
            let dy = element2.y - element.y;



            if (dx > window.innerWidth / 2) dx -= window.innerWidth;
            if (dx < -window.innerWidth / 2) dx += window.innerWidth;

            if (dy > window.innerHeight / 2) dy -= window.innerHeight;
            if (dy < -window.innerHeight / 2) dy += window.innerHeight;

            let r = Math.sqrt(dx * dx + dy * dy)
            if (r == 0) return;
            let sin_theta = dy / r;
            let cos_theta = dx / r;
            let f = Force(element, element2, a, r);

            force_X += f * cos_theta;
            force_Y += f * sin_theta;
        });
        R_force.push([force_X, force_Y])
    });

    return R_force;
}

function Force(particle1, particle2, a, r) {
    const beta = 0.3;

    let nr = r / max_r

    if (nr < beta) {
        return nr / beta - 1
    } else if (beta < nr && nr < 1) {
        return a * (1 - Math.abs(2 * nr - 1 - beta) / (1 - beta))
    } else {
        return 0;
    }
}

function Mod_Cord(particle) {
    particle.x = (particle.x + window.innerWidth) % window.innerWidth;
    particle.y = (particle.y + window.innerHeight) % window.innerHeight;

    return particle;
}