<template>
  <div>
    <nb-list>
      <nb-list-item @click="$router.push({ name: 'home' })"
        v-for="(item, i) in '123456789123456789123456789'.split('')"
        :key="i"
      >shoppage-{{item}}</nb-list-item>
    </nb-list>
  </div>
</template>
