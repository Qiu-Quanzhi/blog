---
layout: false
---
<script setup>
  import content from './content.ts'
  if(typeof location !== 'undefined')location.href=content.get('articles')[0].link
</script>