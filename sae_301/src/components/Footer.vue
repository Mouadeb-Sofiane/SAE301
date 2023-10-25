<template>
    <footer style="background: #ADC9FF; max-width: 100%; height: 350px;">
      
      <div style="display: flex; justify-content: space-between; margin: 20px auto 0; width: 1066.667px;">
        <div>
            <img src="@/assets/logo.svg" alt="Logo" style="" />
        </div>
        <!-- Service client -->
        <div class="list-section">
          <h2>Service client</h2>
          <ul>
            <li>Nous contacter</li>
            <li>Appelez-nous</li>
            <li>Suivre votre commande</li>
          </ul>
        </div>
        
        <!-- Notre entreprise -->
        <div class="list-section">
          <h2>Notre entreprise</h2>
          <ul>
            <li>Trouvez une boutique</li>
            <li>Nos employé</li>
            <li>Nos locaux</li>
          </ul>
        </div>
        
        <!-- Nous suivre sur les réseaux -->
        <div class="list-section">
          <h2>Nous suivre sur les réseaux</h2>
          <div class="social-icons">
            <!-- Placeholder for your social icons, replace with your actual icons -->
            <img src="src/assets/Instagram.svg" alt="Social Icon insta" style="width: 28px; height: 28px; margin-right: 26px;">
            <img src="src/assets/Facebook.svg" alt="Social Icon facebook" style="width: 28px; height: 28px; margin-right: 26px;">
            <img src="src/assets/x_logo.svg" alt="Social Icon x" style="width: 28px; height: 28px; margin-right: 26px;">
            <img src="src/assets/Youtube.svg" alt="Social Icon ytb" style="width: 28px; height: 28px;">
          </div>
        </div>
      </div>
      

      <div style="display: flex; justify-content: space-between; width: 1066.667px; margin-top: 21px; margin-left: 200px; margin-top: 100px;">
        <a>Politique de confidentialité</a>
        <a>Politique de cookies</a>
        <a>Condition d’utilisation</a>
        <a><img src="/src/assets/Made_in_France.svg" alt="made in france"></a>
        <RouterLink to="/Personnaliser" class="signup-btn">Personnaliser vos lunettes</RouterLink>
      </div>
    </footer>
  </template>
  <style scoped>
    ul, ol {
        list-style: none;
    }
  </style>