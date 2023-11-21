<script lang="ts">
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { onMount } from "svelte";

    export let data: any;
    let posts:any;

 

    onMount(async () => {
        console.log(data);
    });

</script>

<Heading>{data.name}</Heading>

<Table striped={true}>
    <TableHead>
      <TableHeadCell>Post Id</TableHeadCell>
      <TableHeadCell>Title</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">Edit</span>
      </TableHeadCell>
    </TableHead>
    <TableBody>
        {#if data.posts}
            {#each data.posts as post}
            <TableBodyRow>
                <TableBodyCell>{post.id}</TableBodyCell>
                <TableBodyCell>{post.title}</TableBodyCell>
            </TableBodyRow>
            {/each}
      {/if}
    </TableBody>
  </Table>