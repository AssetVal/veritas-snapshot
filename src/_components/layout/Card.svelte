<div class="relative flex flex-col break-words rounded border-none mb-5 bg-white bg-clip-border w-full shadow-md">
  <div class="flex-auto p-4">
    <slot name="body" />
  </div>

  {#if  $$slots.footer}
    <slot name="footer" />
  {/if}
</div>
