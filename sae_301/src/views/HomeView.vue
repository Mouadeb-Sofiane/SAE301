<script setup>
import { RouterLink } from 'vue-router';
import IconMadeinfr from '../components/icons/IconMadeinfr.vue';
import IconLogo from '../components/icons/IconLogo.vue';
import IconLunette from '../components/icons/IconLunette.vue';
import IconLunettedouble from '../components/icons/IconLunettedouble.vue';
import IconLunetteaccueilbleu from '../components/icons/IconLunetteaccueilbleu.vue';
</script>

<template>
    <br>
    <br>
    <div style="text-align: center;">
        <h1 style="font-size: 60px;">TaVue les lunettes qui perçoivent votre monde</h1>   
    </div>
    <br>
    <div class="container mx-auto p-8">
        <div class="flex mb-8">
            <div class="content"> 
            <span>  
                <p style="font-size: 36px;" class="mr-72">
                    Les lunettes sont parfaite pour tout type de vue ainsi que vos goût car nous vous permettons de personnaliser les vôtres.             
                </p>
            </span>  
            </div>  
            <div>
                <IconLunette />
                <p style="font-size: 18px;">Ouvrez Votre Regard, Personnalisez Votre Monde. Santé Oculaire, Notre Engagement</p>
            <div class="mt-10 text-center">   
                <RouterLink to="/personnaliser" class="signup-btn" > Personnaliser vos lunettes </RouterLink>
            </div> 
            </div>
        </div>
    </div>
    <div class="lunetteimg">
        <div class="icon-container">
            <div class="mr-72 mt-5 mb-10">
                <IconLogo />
                <p class="fas fa-icon-1" style="font-size: 32px;">Des lunettes propres à vous</p>
                <p class="fas fa-icon-1" style="font-size: 32px;">Santé oculaire</p>
            </div>
            <div>
                    <IconLunettedouble />
                <p style="font-size: 16px;">Lunette TaVue First</p>
            </div>
        </div>
    </div>
    <br>
    <div class="container mx-auto p-8">
        <div class="flex mb-8">
            <div class="w-1/2 pr-4 p-10">
                <h2 class="font-bold  text-3xl p-4 pl-10">La santé est primoridale</h2>
                <div class="underline bg-black w-[400px] h-1  "></div>
                <p class="p-10 leading-relaxed text-[20px]">
                    Il est temps de prendre conscience de l'importance de la santé oculaire. Des yeux en bonne santé ne sont pas seulement un gage de vision claire, mais aussi de bien-être général. C'est pourquoi nous vous encourageons à opter pour des lunettes personnalisées TaVue qui ne sont pas seulement un accessoire de mode, mais aussi une protection pour votre vue précieuse.
                </p>
            </div>
            <img src="../assets/img/Femmeaccueil.png" alt="image2" class="w-[650px] h-[450px]">
        </div>
        <div class="flex mb-8">
                <IconLunetteaccueilbleu class="w-[550px] h-[250px] mt-32"/>
                
        <div class="w-1/2 pl-4 p-10">
            <h2 class="font-bold  text-3xl p-4 pl-10 ">La qualité à un prix</h2>
        <div class="underline bg-black w-[400px] h-1  ">
        </div>
            <p class="p-10 leading-relaxed text-[20px]">
                Chez TaVue, nous comprenons que la qualité a un prix. Nos lunettes d'une valeur exceptionnelle à 850€ représentent un investissement dans votre bien-être visuel et votre style de vie. Avec TaVue, vous investissez dans une vision claire et dans un style qui se distingue, assuré par des matériaux de première qualité et une fabrication impeccable.
                Faites un choix qui vous distingue. Optez pour TaVue et découvrez une nouvelle dimension de la clarté visuelle et du style sophistiqué. C'est bien plus qu'une paire de lunettes, c'est un héritage de l'élégance et de la qualité.
            </p>
            <br>
            <div>
                <RouterLink to="/lunettes" class="signup-btn ml-72">Nos lunettes</RouterLink>
            </div>
        </div>
    </div>
</div>
</template>
  

<style scoped>
 .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-container i {
    margin: 0 10px; /* Ajustez la marge entre les icônes selon vos besoins */
    font-size: 24px; /* Ajustez la taille de la police des icônes selon vos besoins */
  }
  /* Règles CSS pour la mise en page */
  .container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .flex {
    display: flex;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .image-size {
    width: 35%;
    height: 35%;
  }

  .content {
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
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

  /* Styles pour le bouton de inscription */
  .signup-btn {
    background-color: #220059;
    color: white;
    border: none;
    border-radius: 14px;
    text-decoration: none;
    font-family: 'Playfair Display', sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 1.5% 5%;
    align-items: center;
  }

  .signup-btn:hover {
    background-color: #2c0b7a;
  }

  /* Styles pour la section d'image de lunette */
  .lunetteimg {
    background-color: #ADC9FF;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 20px;
    justify-content: center; /* Pour centrer horizontalement les icônes */
    text-align: center;
  }

  .texteicone {
    font-size: 17px;
    font-weight: lighter;
    font-family: 'Playfair Display', sans-serif;
    text-align: center;
    margin: 0 auto;
    color: #00255B;
  }
</style>

