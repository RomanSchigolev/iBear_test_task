<template>
  <aside>
    <nav class="menu">
      <ul class="menu__list">
        <li
          class="menu__item"
          v-for="menuItem in menuItems"
          :key="menuItem.title"
        >
          <router-link
            class="menu__link"
            :to="menuItem.url"
            exact-active-class="menu__link--active"
          >
            {{menuItem.title}}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  export default {
    name: "v-navigation",
    components: {},
    data() {
      return {
        menuItems: [
          {title: "Dashboard", url: "/dashboard"},
          {title: "Transactions", url: "/transactions"}
        ]
      }
    }
  }
</script>

<style scoped>
  .menu__item:not(:last-child) {
    margin-bottom: 24px;
  }

  .menu__link {
    color: #A5A5A5;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 25px;
    position: relative;
  }

  .menu__link:hover {
    color: #000000;
  }

  .menu__link::after {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    content: "";
    width: 100%;
    height: 3px;
    opacity: 0;
    background-color: #000000;
    transition: all 0.3s linear;
  }

  .menu__link--active::after {
    opacity: 1;
  }

  .menu__link--active {
    color: #000000;
  }
</style>