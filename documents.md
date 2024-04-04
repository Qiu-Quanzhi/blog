---
layout: false
---
<script setup>
  import content from './content.ts'
  if(typeof location !== 'undefined')location.href=content.get('documents')[0].link
</script>