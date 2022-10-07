<script lang="ts">
  import { page } from '$app/stores'
  import Icons from '~/components/Icons.svelte'

  export let navItem

  const name = navItem.name
  const icon = navItem.icon
  const to = navItem.to
</script>

<div class="navitem">
  <a
    href={to}
    class:active="{$page.url.pathname === to}">
      <div class="btn">
          <div class="icon">
              <Icons name={icon} />
          </div>
          <div class="name">{name}</div>
      </div>
  </a>
</div>

<style lang="scss">
  .navitem {
      width: 50px;
      height: 50px;
      a {
          &:focus {
              .btn {
                  box-shadow: 0 0 0 0.2rem rgb(0 140 255 / 25%);
              }
          }
          .btn {
              width: 40px;
              height: 40px;
              margin: 5px;
              .icon {
                  height: 24px;
                  text-align: center;
              }
              .name {
                  text-align: center;
                  color: $text-color-disabled;
                  font-size: 10px;
                  font-weight: bold;
              }
          }
      }
  }

  :global(a.active > .btn > .icon > svg) {
      fill: $primary-color-default;
  }

  :global(a.active > .btn > .name) {
      color: $primary-color-default!important;
  }
</style>