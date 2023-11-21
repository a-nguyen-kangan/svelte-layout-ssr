<script>
    import { Alert, Button } from 'flowbite-svelte';
    import Inner from './Inner.svelte';
  </script>
  
  <div class="p-8">
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>

    <Button class="w-6/12" color="purple">Purple</Button>
  </div>

  <Inner name="Santa Claus" />