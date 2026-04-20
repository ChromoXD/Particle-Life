# Particle Life Simulation

<p align="center">
  <h4 align="center"><a href="https://chromoxd.github.io/Particle-Life/">Live Preview</a></h4></h4>
</p>

<p>A particle-based life simulation built as a casual curiosity project. The main goal was not to create something polished or scientifically accurate, but to experiment, challenge myself, and see how simple force rules can create complex behavior.</p>

The simulation currently includes:

* Particle Life
* 2-type Particle Life interactions
* Attraction and repulsion behavior between particles
* Basic force calculations using distance

<h2>About the Project</h2>

<p>This project was made mainly for fun, curiosity, and as a way to challenge myself. I wanted to explore how particles behave when simple interaction rules are applied, and how more complicated patterns can emerge from very basic math.

Even though the current version is still unoptimized, it already creates interesting movement and patterns.</p>

<h2>Screenshots</h2>

<h2>Current Limitations</h2>
<p>Right now, the simulation is still CPU-based and not very optimized. As the particle count increases, performance starts dropping quickly.

Some parts are also still hardcoded and need to become more flexible.</p>

<h2>Planned Improvements</h2>

* Move force calculations to the GPU
* Support a much larger number of particles
* Use a force matrix to control how each particle type interacts
* Add a GUI for changing values in real time
* Add zoom and camera controls
* Improve overall optimization and stability

<h2>Technologies Used</h2>
* JavaScript
* HTML Canvas / PIXI.js
* Basic vector math
* Force-based particle interactions

<h2>Future Goal</h2>

<p>The long-term goal is to turn this into a more advanced particle sandbox where different particle types can interact in unique ways, similar to artificial life simulations.</p>
