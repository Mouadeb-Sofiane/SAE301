<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, computed, watch } from 'vue'
import IconLogo from './icons/IconLogo.vue';
import IconHome from './icons/IconHome.vue';

const activeMenu = ref(false)

    function closeMenu() {
	  activeMenu.value = false 
    }
</script>

<template>
  <header class="header">
    <div class="flex items-center">
      <a href="/">
      <IconLogo/>
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
        <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
            @click="activeMenu = !activeMenu"
        >
            <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></div>
            <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></div>
            <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></div>
        </button>
        <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-barmenu last:text-2xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:tracking-wide lg:text-black lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }" 
        v-scroll-lock="activeMenu"
        >
        <ul class="nav">
            <li class="menu-item">
                <RouterLink class="menu-link" to="/lunettes" @click="closeMenu">
                    Nos lunettes
                </RouterLink>
            </li> 
            <li class="menu-item">
                <RouterLink class="menu-link" to="/personnaliser" @click="closeMenu">
                    Personnalisez vos lunettes
                </RouterLink>
            </li>
            <li class="menu-item">
                <RouterLink class="menu-link" to="/map" @click="closeMenu">
                    Rechercher nos ophtalmologues
                </RouterLink>
            </li> 
            <li class="menu-item signup-btn">
                <RouterLink class="menu-link signup-btn mr-10 ml-10 mt-5 mb-5" to="/connexion" @click="closeMenu">
                    <IconUser /> Se connecter
                </RouterLink>
            </li> 
        </ul>
    </nav>
</div>
</header>
</template>


  

  
<style scoped>
.header {
  background-color: #ADC9FF;
  height: 85px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.logo img {
  width: 100px;
}

.nav {
  display: flex;
  gap: 20px; /* Ajustez l'espacement entre les liens de navigation selon vos besoins */
  text-align: center; /* Alignez les éléments verticalement au centre */
}

.menu-item {
  list-style: none; /* Supprimez les puces de liste par défaut pour les éléments de menu */
}

.menu-link {
  text-decoration: none;
  color: black;
  font-family: 'Plaisylte Display', sans-serif;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-link:hover {
  background-color: #2c0b7a; /* Couleur de surbrillance au survol */
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
    background-color: #ADC9FF;
    color: grey;
    border: #000;
  }
@media (max-width: 768px) {
  .header {
    flex-direction: column; /* Changez la direction du flex en colonne pour les petits écrans */
    align-items: flex-start; /* Alignez les éléments à gauche */
  }

  nav {
    margin-top: 20px; /* Ajoutez un espace entre le logo et le menu pour les petits écrans */
  }
}


</style>
