<template>
  <div class="hello">
    <ul class="list">
      <li v-for="work in paginatedData" :key="work.id">
        <h6 class="list2">{{work.title}}</h6>
      </li>
    </ul>
    <button :disabled="pageNumber === 0" @click="prevPage">Previous</button>
    <button :disabled="pageNumber >= pageCount -1" @click="nextPage">Next</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      pageNumber: 0,
      size: 4
    };
  },
  props: {
    msg: String
  },

  methods: {
    nextPage() {
      return this.pageNumber++;
    },
    prevPage() {
      return this.pageNumber--;
    }
  },
  computed: {
    ...mapGetters(["allWorker"]),
    pageCount() {
      let l = this.allWorker.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.allWorker.slice(start, end);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.list {
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.list2 {
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
