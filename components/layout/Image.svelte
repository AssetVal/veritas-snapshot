<script type="ts">
  export let src;
  export let alt;
  export let caption = ''; // Caption is optional so set it to blank

  let expanded = false;

  const toggleZoom = () => {(expanded === false) ? (expanded = true) : (expanded = false)}
</script>

<style>
  /* Style the Image Used to Trigger the Modal */
  .img {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  .img:hover {opacity: 0.7;}

  /* The Modal (background) */
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
  }

  .hidden { display: none }

  /* Modal Content (Image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image (Image Text) - Same Width as the Image */
  .caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation - Zoom in the Modal */
  .modal-content, .caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 6vh;
    right: 1.3vw;
    color: #f1f1f1;
    font-size: 50px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px){
    .modal-content { width: 100%; }
  }
</style>

<img {src} {alt} class="img w-full max-h-56" on:click={toggleZoom}>

<!-- The Modal -->
<div class="modal {(expanded === false) ? 'hidden' : 'block'}" on:click={toggleZoom}>

  <!-- The Close Button -->
  <span class="close">&times;</span>

  {#if expanded}
    <img class="modal-content" {src} {alt}>
  {/if}

  <div class="caption">{caption}</div>
</div>
