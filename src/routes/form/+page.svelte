<script>
  import Form from '$lib/components/form.svelte';

  /** @type {import('./$types').ActionData} */
  export let data;
</script>

<Form {data} />