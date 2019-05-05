<template>
  <div>
    <nb-list>
      <nb-list-item>
        <router-link :to="{ name: 'login' }">登录页</router-link>
      </nb-list-item>
      <nb-list-item>
        <router-link :to="{ name: 'shop' }">微店页</router-link>
      </nb-list-item>
    </nb-list>
  </div>
</template>
