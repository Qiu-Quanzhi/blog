---
layout: page
---
<script setup>
  if (typeof window !== 'undefined') {
    const preferredLang = localStorage.lang || 'zh-CN'
    window.location.pathname = `/${preferredLang}/`
  }
</script>