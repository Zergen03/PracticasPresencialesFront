  <script setup lang="ts">
  import { ref } from 'vue'
  import { useUserStore } from '../../stores/userStore'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  
  const dialog = ref(false)
  const email = ref('')
  const password = ref('')
  const userStore = useUserStore()
  const router = useRouter()

  const { t, locale } = useI18n()
  
  const register = async () => {
    const res = await axios.post('http://localhost:8080/api/Users/login',
        {
            "name": email.value, 
            "password": password.value
        }
    )
    console.log(res.data[0].token)
    userStore.setUser(res.data[0].token)
    dialog.value = false
    //router.push('/')
  }
  </script>

<template>
    <v-dialog v-model="dialog" max-width="400">
      <template #activator="{ props }">
        <button class="register-btn" v-bind="props">{{ t('nav.register') }}</button>
      </template>
  
      <v-card>
        <v-card-title>{{ t('loginregister.register') }}</v-card-title>
        <v-card-text>
          <v-text-field v-model="email" :label="t('loginregister.email')" />
          <v-text-field v-model="password" :label="t('loginregister.password')" type="password" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="register">{{ t('loginregister.create') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
  
<style>
    .register-btn {
        background-color: #0cd3c9;
        border-radius: 8px;
        color: white;
        border: 2px solid #0f81eb;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>

  