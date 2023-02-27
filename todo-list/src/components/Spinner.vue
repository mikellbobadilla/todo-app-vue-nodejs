<template>
  <div class="spinner"></div>
</template>
<style scoped>
.spinner {
  margin: auto;
  border: 4px solid rgba(94, 94, 94, 0.1);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border-left-color: var(--text-color);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>