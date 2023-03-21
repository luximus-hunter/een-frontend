<script lang="ts">
  import { browser } from "$app/environment";

  // No use of goto() cuz hard reload is required
  if (browser) {
    location.href = "/";
  }
</script>
