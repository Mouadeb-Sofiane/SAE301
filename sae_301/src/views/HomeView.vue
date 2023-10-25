<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
       <div class="content">
          <h1>TaVue les lunettes qui perçoivent votre monde</h1>
            <p>Les lunettes 
                <img src="/src/assets/logo.svg" alt="logo" class="logo"> sont parfaites pour tout type de vue ainsi que vos goûts car nous vous permettons de les personnaliser.
            </p>
                <p>Ouvrez Votre Regard, Personnalisez Votre Monde. Santé Oculaire, Notre Engagement</p>
                <RouterLink to="/Connexion" class="signup-btn">Personnaliser vos lunettes</RouterLink>

            <div class="">
                <img src="src/assets/Lunette.svg" alt="Lunettes">
                <img src="src/assets/Made_in_France.svg" alt="Made in France">
            </div>
        </div>
    </div> 

    <div></div>
  </template>
  
  
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  .content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 120px; /* Espace en bas du contenu principal */
  }
  
  .logo {
    width: 5%;
  }
  
  .image img {
    width: 100px; /* Ajustez la largeur des images selon vos besoins */
  }
  
  .signup-btn {
    background-color: #220059;
    color: white;
    border: none;
    border-radius: 18px;
    text-decoration: none;
    font-family: 'Playfair Display', sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .signup-btn:hover {
    background-color: #2c0b7a;
  }
  </style>