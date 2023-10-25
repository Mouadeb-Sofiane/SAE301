<script setup>
import { ref } from 'vue';
import IconLunette from '../components/icons/IconLunette.vue';
import IconHeartAnim from '../components/icons/IconHeartAnim.vue';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const selected = ref('');

function selectFrame(frameType) {
  selected.value = frameType;
}

const { frameColor, lensColor, branchColor } = defineProps(['frameColor', 'lensColor', 'branchColor']);


const frameColors = [
    { label: '', code: '#FFFFFF' }, 
    { label: '', code: '#7CE5CC' }, 
    { label: '', code: '#B8D5F8' }, 
    { label: '', code: '#E0B8F8' },
    { label: '', code: '#FA8282' },
    { label: '', code: '#BCBCBC' },
    { label: 'New color', code: '#21064D' }
];

const lensColors = [
    { label: '', code: '#FFFFFF' }, 
    { label: '', code: '#7CE5CC' }, 
    { label: '', code: '#B8D5F8' }, 
    { label: '', code: '#E0B8F8' },
    { label: '', code: '#FA8282' },
    { label: '', code: '#BCBCBC' },
    { label: 'New color', code: '#21064D' }
];

const branchColors = [
    { label: '', code: '#FFFFFF' }, 
    { label: '', code: '#7CE5CC' }, 
    { label: '', code: '#B8D5F8' }, 
    { label: '', code: '#E0B8F8' },
    { label: '', code: '#FA8282' },
    { label: '', code: '#1D1D1B' },
    { label: 'New color', code: '#21064D' }
];


const currentFrameColor = ref('#B2B2B2'); // couleur par défaut
const currentLensColor = ref('#1D1D1B'); // couleur par défaut
const currentBranchColor = ref('#B2B2B2'); // couleur par défaut

const changeFrameColor = (color) => {
    currentFrameColor.value = color;
    console.log("Frame color changed to:", color);
};

const changeLensColor = (color) => {
    currentLensColor.value = color;
    console.log("Lens color changed to:", color);
};

const changeBranchColor = (color) => {
    currentBranchColor.value = color;
    console.log("Branch color changed to:", color);
};

const colorSections = [
    {
        title: 'Cadran',
        colors: frameColors,
        changeMethod: changeFrameColor
    },
    {
        title: 'Branches',
        colors: lensColors,
        changeMethod: changeLensColor
    },
    {
        title: 'Verres',
        colors: branchColors,
        changeMethod: changeBranchColor
    }
];

</script>

<template>
    <main class="configurator-container mt-8">
        <div class="lunette-container ">
            <IconLunette :frameColor="currentFrameColor" :lensColor="currentLensColor" :branchColor="currentBranchColor" />
        </div>
        <div class="configurator mb-[50px]">
            <div class="info-section">
                <h1 class="text-center text-3xl font-bold text-black mb-12">Personnalisation des lunettes</h1>
                <h2 class="font-semibold text-xl">Lunette TaVue First</h2>
                <br>
            </div>
            <div class="color-picker">
                <section v-for="section in colorSections" :key="section.title">
                    <p>{{ section.title }}</p>
                    <div class="color-options">
                        <button 
                            v-for="color in section.colors" 
                            :key="color.label" 
                            :style="{backgroundColor: color.code}" 
                            @click="section.changeMethod(color.code)"
                        >
                            <span>{{ color.label }}</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
            <div class="flex flex-col gap-2.5">
                <div class="flex flex-col gap-2.5">
                    <br><br><br><br><br><br><br><br>
                    <h2 class="text-lg mb-2.5 font-semibold" >Type de monture</h2>
                        <div class="flex gap-2.5">
                        <div class="circle" :class="{ 'active': selected === 'Plastique' }" @click="selectFrame('Plastique')"></div>
                            <span class="cursor-pointer">Plastique</span>
                        <div class="circle" :class="{ 'active': selected === 'Métal' }" @click="selectFrame('Métal')"></div>
                            <span class="cursor-pointer">Métal</span>
                        <div class="circle" :class="{ 'active': selected === 'Acier' }" @click="selectFrame('Acier')"></div>
                            <span class="cursor-pointer">Acier</span>
                        <div class="circle" :class="{ 'active': selected === 'Fibre de carbone' }" @click="selectFrame('Fibre de carbone')"></div>
                            <span class="cursor-pointer">Fibre de carbone</span>
                </div>
            </div> 
            <div class="prix-section pr-[250px] mb-5 ">
                <p class="">Prix : 850 €</p>               
            </div>
            <button>Ajouter au panier</button>
    </div>
    <div class="mb-6"></div>   
    </main>
</template>


<style scoped>
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #000;
  cursor: pointer;
}

.circle.active {
  background-color: #ADC9FF; /* Couleur bleue lorsque le cercle est actif */
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
.ligne {
  height: 1px;
  background-color: #000;
  margin: 20px 0;
}
.configurator-container {
    display: flex;
    align-items: flex-start;
}

.lunette-container {
    margin-right: 40px;
    margin-top: 100px;
}

.configurator {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
}

.color-picker section {
    margin-bottom: 20px;
}

.color-options {
    display: flex;
    align-items: center;
}

.color-options button {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid #000; /* Ajoute une bordure noire */
    cursor: pointer;
    position: relative;
    border-radius: 10px; /* Bords arrondis de 10px */
}

.color-options button span {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
}

.prix-section {
    margin-top: 10px;
    margin-right: 50px;
    font-size: 22px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.add-to-cart {
    margin-right: 50px;
    margin-bottom: 50px;
    padding: 10px 20px;
    background-color: #EFE5CE;
    border: 1px solid #000;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
}
</style>