<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { onMount } from "svelte";

    let posts:any;

    async function getPosts() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts = await res.json();
        return posts;
    }

    onMount(async () => {
        posts = await getPosts();
    });

</script>

<Table striped={true}>
    <TableHead>
      <TableHeadCell>Post Id</TableHeadCell>
      <TableHeadCell>Title</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">Edit</span>
      </TableHeadCell>
    </TableHead>
    <TableBody>
        {#if posts}
            {#each posts as post}
            <TableBodyRow>
                <TableBodyCell>{post.id}</TableBodyCell>
                <TableBodyCell>{post.title}</TableBodyCell>
            </TableBodyRow>
            {/each}
      {/if}
    </TableBody>
  </Table>