<template>
  <div>
    <nb-list>
      <nb-list-item
        @click="$router.push({ name: 'shop' })"
        v-for="(item, i) in '123456789'.split('')"
        :key="i"
      >homepage-{{item}}</nb-list-item>
    </nb-list>
  </div>
</template>
