<style>
  .soft-border { border: 1px solid rgba(0,0,0,.125); }
  .soft-top { border-top: 1px solid rgba(0,0,0,.18); }
</style>

<div class="relative flex flex-col min-w-0 break-words bg-clip-border rounded soft-border">
  <slot name="img" class="rounded-t w-full" />
  <div class="flex-auto p-1 bg-gray-50 soft-top">
    <slot name="content" />
  </div>
</div>
