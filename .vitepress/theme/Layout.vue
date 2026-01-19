<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="mivo-bg">
        <!-- Subtle Grid Pattern -->
        <div class="mivo-grid"></div>
        <!-- Glowing Orbs -->
        <div class="mivo-orb orb-1"></div>
        <div class="mivo-orb orb-2"></div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.mivo-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  --orb-opacity-max: 0.2;
  --orb-opacity-min: 0.15;
}

:root.dark .mivo-bg {
  --orb-opacity-max: 0.05;
  --orb-opacity-min: 0.03;
}

.mivo-grid {
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4zKSIvPjwvc3ZnPg==');
  mask-image: linear-gradient(to bottom, white, transparent);
  -webkit-mask-image: linear-gradient(to bottom, white, transparent);
}

:root.dark .mivo-grid {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=');
}

.mivo-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  opacity: var(--orb-opacity-max);
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.orb-1 {
  top: -20%;
  left: -10%;
  width: 70vw;
  height: 70vw;
  background-color: #3b82f6; /* blue-500 */
  animation-duration: 4s;
}

.orb-2 {
  top: 30%;
  right: -15%;
  width: 60vw;
  height: 60vw;
  background-color: #a855f7; /* purple-500 */
  animation-duration: 6s;
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% { opacity: var(--orb-opacity-max); }
  50% { opacity: var(--orb-opacity-min); }
}
</style>
