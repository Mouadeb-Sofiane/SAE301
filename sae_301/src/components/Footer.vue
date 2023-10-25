<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, computed, watch } from 'vue'
import IconLogo from './icons/IconLogo.vue';
import IconHome from './icons/IconHome.vue';
import IconInsta from './icons/IconInsta.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconX from './icons/IconX.vue';
import IconYbt from './icons/IconYbt.vue';
import IconMadeinfr from './icons/IconMadeinfr.vue';

</script>
<template>
    <footer style="background: #ADC9FF; max-width: 100%; height: 350px;">
      <br><br>
      <div style="display: flex; justify-content: space-between;" >
        <div>
            <IconHome/>
        </div>
        <!-- Service client -->
        <div class="list-section">
          <h2 class="text-2xl font-bold">Service client</h2>
          <br>
          <ul>
            <li>Nous contacter</li>
            <li>Appelez-nous</li>
            <li>Suivre votre commande</li>
          </ul>
        </div>
        
        <!-- Notre entreprise -->
        <div class="list-section">
          <h2 class="text-2xl font-bold">Notre entreprise</h2>
          <br>
          <ul>
            <li>Trouvez une boutique</li>
            <li>Nos employé</li>
            <li>Nos locaux</li>
          </ul>
        </div>
        
        <!-- Nous suivre sur les réseaux -->
        <div class="list-section">
          <h2 class="text-2xl font-bold">Nous suivre sur les réseaux</h2>
          <br>
          <div class="flex ml-8">
            <!-- Placeholder for your social icons, replace with your actual icons -->
            <IconInsta class="mr-5" style="margin-left: 4%;"/>
            <IconFacebook class="mr-2"/>
            <IconX class="mr-2" style="width: 13%;height: 13%;"/>
            <IconYbt class="mr-5" style="width: 11%;height: 11%;"/>
          </div>
        </div>
      </div>
      

      <div style="display: flex; justify-content: space-between; margin-top: 21px; margin-left: 100px; margin-top: 100px;">
        <a class="font-bold">Politique de confidentialité</a>
        <a class="font-bold">Politique de cookies</a>
        <a class="font-bold">Condition d’utilisation</a>
        <a class="ml-32"><IconMadeinfr/></a>
      </div>
    </footer>
  </template>
  <style scoped>
    ul, ol {
        list-style: none;
    }
    social-icons {
    display: flex;
    align-items: center;
  }

  .social-icons > * {
    margin-right: 15px;
  }
  </style>