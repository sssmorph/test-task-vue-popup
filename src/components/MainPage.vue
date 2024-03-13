
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
  msg: String,
})

const count = ref(0)
</script>


<template>

  <div class="about-me-container">
    <h1 class="about-me-title">
      Привет, я Елисей  
    </h1>
    <p>При написании тестового задания были использованы библиотеки: vue router и primevue</p>
    <p>Сверху находятся кнопки(ссылки на другие страницы) они сделаны через vue router</p>
    
  </div>

</template>

<style scoped>

  .about-me-title{
    font-size: 35px;
    display: flex;
    justify-content: center;
    color: #fff;
    margin:0;
  }
  p{
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 0;
  }
  .about-me-container{
    background-color: var(--indigo-500);
    width: 800px;
    display: flex;
    flex-direction: column;
    gap:5px;
    margin: 50px auto 0 auto;
    border-radius: 8px;
    padding: 10px;
  }
</style>
