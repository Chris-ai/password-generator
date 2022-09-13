<template>
  <PasswordGenerator />
</template>

<script>
import PasswordGenerator from "@/components/PasswordGenerator.vue";

export default {
  name: "App",
  components: { PasswordGenerator },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --lime-green: rgb(164, 255, 175);
  --whitish: rgb(229, 228, 233);
  --light-gray: rgb(36, 35, 43);
  --dark-gray: rgb(19, 18, 24);

  --light-grayish: rgb(75, 73, 82);
  --dark-grayish: rgb(109, 107, 120);

  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semi-bold: 600;
  --fw-bold: 700;
 
  --content: "Copy";

  font-size: 16px;
  font-family: "Spline Sans Mono", monospace;
}

body {
  width: 100vw;
  height: 100vh;
  background: var(--dark-gray);

  #app {
    width: 100%;
    height: 100%;
  }
}

@keyframes showUp {
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }
}

@keyframes slideFromleft{
  from{
    transform: scaleX(0)
  }

  to{
    transform: scaleX(1)
  }
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>