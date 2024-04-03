---
layout: false
---
<script setup>
  import content from './content.ts'
  window.location.href=content.get('articles')[0].link
</script>