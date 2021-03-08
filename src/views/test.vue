<template>
  <div class="test">
    <pre><b>Filter Adı:</b> {{key}}</pre>
    <pre><b>Seçilen Filter:</b> {{printData(filters)}}</pre>
    <pre><b>Data:</b> {{printData(units)}}</pre>
  </div>
</template>

<script>

export default {
  name: 'Test',
  computed: {
      units() {
          return this.$store.state.units;
      },
      filters() {
        return this.$store.state.filterUnits;
      },
      key() {
        return this.$store.state.filterName;
      }
  },
  methods: {
    printData: (data) => {
      return JSON.stringify(data, null, 2)
    }
  },
}
</script>
<style lang="scss" scoped>
  pre {
    color: #6baa6b;
    overflow: auto;
    border: 2px solid #efefef;
    background: #f8f8f8;
    padding: 15px;

    b {
      font-weight: bold;
      color:#787878;
    }

    &:hover {
      color: #3f9d3f;
      background: #efefef;
      transition: .3s;

      b {
        color: #595959;
      }
    }
  }
</style>
