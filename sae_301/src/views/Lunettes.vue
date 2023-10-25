<script setup>
import IconLunetteFirstVue from '../components/icons/IconLunetteFirst.vue';
import LunetteFrance from '../components/icons/LunetteFrance.vue';
import LunetteLimite from '../components/icons/LunetteLimite.vue';
import LunetteBleuFonce from '../components/icons/LunetteBleuFonce.vue';
</script>
<template>
    <h1 class="font-bold mt-12 mb-5 text-black text-3xl text-center">Nos lunettes</h1>
    <div class="container mx-auto p-8 mb-5">
        <div class="flex mb-8">
            <div class="content"> 
            <span>  
                <p style="font-size: 36px;" class="mr-[250px]">
                    Les lunettes TaVue sont parfaite pour tout type de vue ainsi que vos goût car nous vous permettons de personnaliser les vôtres.             
                </p>
            </span>  
                </div> 
                    <div>
                        <img src="../assets/img/ImgMen.png" alt="image menn">                
                    </div> 
                </div> 
            <div>
            </div>
        </div>
    <div>      
    </div>
    <div>
        <h1 class="ml-12 text-2xl font-bold text-black mb-12">Découvrez nos différentes gammes de lunettes</h1>
    <div class="flex justify-between px-80 space-x-4">
      <!-- Lunettes 1 -->
      <div class="card">
        <div class="flex flex-col items-center">
          <span class="bg-blue-200 py-1 px-4 rotate-12 text-sm uppercase font-semibold mb-8">Personnalisable</span>
          <IconLunetteFirstVue />
          <span class="mt-16 text-xl font-bold mb-5">Lunette TaVue First</span>

          <span class="mt-2 text-lg font-medium mb-5">850 €</span>

          <button>Commander</button>
        </div>
      </div>
  
      <!-- Lunettes 2 -->
      <div class="card">
        <div class="flex flex-col items-center">
          <span class="bg-blue-200 py-1 px-4 rotate-[-12deg] text-sm uppercase font-semibold mb-[50px]">Edition France</span>
          <LunetteFrance />
          <span class="mt-16 text-xl font-bold">Lunette TaVue First Edition France</span>
          <span class="mt-2 text-lg font-medium">650 €</span>
          <button>Commander</button>
        </div>
      </div>
    </div> 
    <div class="flex justify-between px-80 my-[150px]  space-x-4">
      <!-- Lunettes 3 -->
      <div class="card">
        <div class="flex flex-col items-center">
          <span class="bg-blue-200 py-1 px-4 rotate-12 text-sm uppercase font-semibold mb-[50px]">Nouveautés</span>
          <LunetteBleuFonce />
          <span class="mt-16 text-xl font-bold">Lunette TaVue First avec filtre anti-lumières bleues</span>
          <span class="mt-2 text-lg font-medium">950 €</span>
          <button>Commander</button>
        </div>
      </div>
  
      <!-- Lunettes 4 -->
      <div class="card">
        <div class="flex flex-col items-center">
          <span class="bg-blue-200 py-1 px-4 rotate-[-12deg] text-sm uppercase font-semibold mb-[50px]">Nouveautés</span>
          <LunetteLimite />
          <span class="mt-16 text-xl font-bold">Lunette TaVue First Edition Collector</span>
          <span class="mt-2 text-lg font-medium">1150 €</span>
          <button>Commander</button>
        </div>
      </div>
    </div>
</div>
<div>
    <h1 class="ml-12 text-2xl font-bold text-black">La santé notre priorité ainsi que la qualité est au rendu</h1>
    <br><br>
    <p class="ml-24 mb-5">Nos verres haut de gamme intègrent les dernières avancées technologiques pour protéger vos yeux des rayons UV et de la lumière bleue, tout en réduisant la fatigue oculaire. Profitez d'une vision cristalline dans toutes les situations, que ce soit en plein soleil ou devant un écran d'ordinateur.</p>
    <p class="ml-24 mb-40">Lorsque vous choisissez TaVue, vous optez pour plus qu'une simple paire de lunettes. Vous choisissez ces lunettes à la mode, un accessoire qui reflète votre goût exquis. Chaque monture est un chef-d'œuvre en soi, créé pour mettre en valeur votre individualité et votre élégance naturelle.</p>
</div>
</template>
  
  <style scoped>
  .card {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    text-align: center;
    margin: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
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
  

