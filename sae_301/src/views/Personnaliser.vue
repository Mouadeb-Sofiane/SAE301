<template><div class="ronds">
    <div class="Cadran">Cadran</div>
    <select v-model="selectedCadran" class="dropdown">
      <option v-for="(color, index) in cadranColors" :key="index" :value="color.value">{{ color.name }}</option>
    </select>
    <div class="Verre">Verre</div>
    <select v-model="selectedVerre" class="dropdown">
      <option v-for="(color, index) in verreColors" :key="index" :value="color.value">{{ color.name }}</option>
    </select>
  </div>
</template>
<script setup>
  const cadranColors = [
    { name: "Rouge", value: "red" },
    { name: "Vert", value: "green" },
    { name: "Bleu", value: "blue" }
  ];
  
  const verreColors = [
    { name: "Transparent", value: "transparent" },
    { name: "Fumé", value: "smoke" },
    { name: "Miroir", value: "mirror" }
  ];
  
  const selectedCadran = cadranColors[0].value; // Par défaut, sélectionnez la première option du cadran
  const selectedVerre = verreColors[0].value; // Par défaut, sélectionnez la première option du verre
</script>