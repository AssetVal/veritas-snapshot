<script lang="ts">
  import Particles from 'svelte-particles';

  let particlesConfig = {
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        enable: true,
        color: "#bebebe",
      },
      move: {
        enable: true,
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };
</script>

<header class="min-w-full bg-blue-450 text-center bg-cover pt-24 pb-12 pr-5 pl-5">

  <h1 class="text-center text-white text-4xl">
    <span>
      AssetVal
    </span>
  </h1>

  <Particles
    id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    on:particlesInit="{onParticlesInit}"
  />
</header>
