<!-- скрипт -->
<script setup>
import { ref, computed } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useVuelidate } from '@vuelidate/core';
import { required, email, numeric } from '@vuelidate/validators';

let showModal = ref(false);
const formData = ref({
  email: "",
  age: "",
  firstName: "",
  lastName: "",
  phone: ""
})
const arr = ref([]);

const rules = computed(() => {
  return {
    email: { required, email },
    phone: { required },
    age: { required, numeric },
    firstName: { required },
    lastName: { required }

  }
})

const toggleModal = (value = false) =>{
  showModal.value = value
}
const v$ = useVuelidate(rules, formData);

const submitEvent = () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    // Form is valid, submit the data
    console.log("Form data submitted:", formData.value);
    arr.value = Object.entries(formData.value)

  } else {
    // Form is invalid, display validation errors
    console.log("Form validation errors:", v$.value);
  }
}
const emailError = computed(()=>{return v$.value.email.$errors})
</script>


<template>
  <div class="button-container">
        <Button class="button-container__button" @click="toggleModal(true)">Начать</button>
    </div>
    
    <!-- попап окно -->

      <div v-if="showModal" class="popup-block__background" @click="toggleModal(false)">
        <div class="popup-block" @click.stop>
          <!-- <pre>{{ v$?.email }}</pre> -->
            <h2>Введите данные</h2>
          <form action="" class="form-block" @submit.prevent="submitEvent">
              <div class="input-container">
                <InputText :invalid="v$.email.$invalid" type="text" v-model="formData.email" class="popup-block__input" :placeholder="v$.email.$invalid? 'Неправильный email':'email'"/>
                <InputText :invalid="v$.age.$invalid" type="text" v-model="formData.age" class="popup-block__input" :placeholder="v$.age.$invalid? 'Введите возраст':'Возраст'" />
                <InputText :invalid="v$.firstName.$invalid" type="text" v-model="formData.firstName" class="popup-block__input" :placeholder="v$.firstName.$invalid? 'Введите имя':'Имя'"/>
                <InputText :invalid="v$.lastName.$invalid" type="text" v-model="formData.lastName" class="popup-block__input" :placeholder="v$.lastName.$invalid? 'Введите фамилию':'Фамилия'"/>
                <InputText :invalid="v$.phone.$invalid" type="text" v-model="formData.phone" class="popup-block__input" :placeholder="v$.phone.$invalid? 'Введите номер телефона':'телефон'" />
              </div>
              <Button class="submit-button" type="submit"  label="Отправить"/>
          </form>
          
      </div>
    </div>

    <div id="data-form">
        <div class="popup-data">
            <ul class="popup-data__list">
                <!-- поле для жсон строки -->
                <li class="json-text">{{ formData }}</li> 
                <ul class="data-container" id="v-for-object">
                  <li v-for="item in arr"> 
                    {{ item[0] + " : " + item[1] }}
                  </li>
                </ul>
            </ul>
            
        </div>
    </div>
</template>


<!-- стили -->
  <style scoped>
  .button-container{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
  .popup-block__background{
    position: fixed;
    inset: 0;
    z-index: 5;
    background-color: rgb(0, 0, 0, 0.5);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .popup-block{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    padding: 15px;
    background-color: var(--indigo-100);
    border-radius: 8px;
  }
  h2{
    margin: 0 auto;
    border-bottom: 3px solid var(--indigo-500);
  }

  .input-container{
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:5px;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--indigo-500);

  }
  .popup-block__input{
    width: 48%;
  }
  @media (max-width: 600px) {
    .popup-block__input{
      flex-direction: column;
      width: 100%;
    }
  }
  .form-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .popup-data{
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: #6366f1;
    border-radius: 8px;
    width: 500px;
    position: fixed;
    top:10%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 600px ){
    .popup-data{
      max-width: 320px;
    }
  }
  .data-container{
    display: flex;
    flex-direction: column;
  }
  ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap:5px;
    margin: 0;
  }
  li{
    display: flex;
    justify-content: center;
    color: #fff;
    overflow-wrap: anywhere;
  }
  .json-text{
    margin-bottom: 10px;

  }
</style>
