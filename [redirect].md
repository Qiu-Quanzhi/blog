---
layout: false
head:
  - - meta
    - name: robots
      content: noindex
---
<script setup>
  import index from './index'
  if(typeof location !== 'undefined')location.href=`/${location.pathname.slice(1)}/${index.contents[location.pathname.slice(1)][0]}`
</script>