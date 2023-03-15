<script lang="ts">
  import Fa from "svelte-fa";
  import { faLink } from "@fortawesome/free-solid-svg-icons";

  export let href: string;
</script>

<a {href} class="inline-flex items-center hover:underline">
  <slot />
  <Fa icon={faLink} />
</a>
