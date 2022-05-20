<template>
  <div class="my-vuelive">
    <div class="my-vuelive-preview">
      <slot name="preview"></slot>
    </div>
    <div class="my-vuelive-editor">
        <slot name="editor"></slot>
    </div>
  </div>
</template>
<style>
  .my-vuelive {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 100vh;
  }

  .my-vuelive-editor {
    padding: 0;
    box-sizing: border-box;
    height: 50%;
  }

  .my-vuelive-preview {
    padding: 8px;
    height: 50%;
    background: linear-gradient(90deg, #f7f7f7 10px, transparent 1%) center,
    linear-gradient(#f7f7f7 10px, transparent 1%) center, #ededed;
    background-size: 12px 12px;
    overflow-y: scroll;
  }

  .prism-editor-wrapper {
    background-color: #222;
  }

  .prism-editor__textarea {
    caret-color: #eee;

  }

  .prism-editor__editor {
    color: #eee;
  }
</style>