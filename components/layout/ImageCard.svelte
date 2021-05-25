<style>
  .soft-border { border: 1px solid rgba(0,0,0,.125); }
  .soft-top { border-top: 1px solid rgba(0,0,0,.18); }
  .h-content { height: fit-content; }
</style>

<div class="relative flex flex-col min-w-0 break-words bg-clip-border rounded soft-border h-content mb-2">
  {#if $$slots.img}
    <slot name="img" class="rounded-t w-full" />
  {/if}
  {#if $$slots.content}
    <div class="flex-auto p-1 bg-gray-50 soft-top">
      <slot name="content" />
    </div>
  {/if}
</div>
