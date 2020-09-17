<template>
  <div class="calculate-box">
    <button @click="decrease">-</button>
    <div class="calculate-main">
      <slot name="type" />
      <slot name="price" />
    </div>
    <button @click="increase">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    decrease() {
      this.$store.commit("decraseCounter", 1)
    },
    increase() {
      this.$store.commit("increaseCounter", 1)
    }
  }
}
</script>

<style scoped>
.calculate-box {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calculate-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 6px;
}

.calculate-box button {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  border-radius: 99px;
  border: 1px solid #fff;
  padding: 24px;
}
</style>
