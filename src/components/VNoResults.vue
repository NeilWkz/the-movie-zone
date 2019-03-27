<script>
export default {
  name: "VNoResults",
    data() {
        return {
            directors: [
            "Alejandro Jodorowsky",
            "Emir Kusturica",
            "Kenneth Anger",
            "Maya Deren",
            "John Waters",
            "Birgit Hein",
            "The Kuchar brothers",
            "Sarah Jacobson",
            "Melvin Van Peebles"
            ]
        }
    } 
};
</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 mt-35">
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h3>Sorry no movies in cinemas match your exacting Standards...😊</h3>
            <p class="lead">
              Have you thought about getting into
              <span
                class="random-director"
              >{{directors[Math.floor(Math.random() * directors.length)]}}</span>?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
