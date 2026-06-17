<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeAurora from './HomeAurora.vue'
import HomeAuroraEn from './HomeAuroraEn.vue'
import HomeOverseas from './HomeOverseas.vue'
import HomeOverseasEn from './HomeOverseasEn.vue'
import HomeMiniapp from './HomeMiniapp.vue'
import HomeMiniappEn from './HomeMiniappEn.vue'
import HomeCases from './HomeCases.vue'
import HomeAI from './HomeAI.vue'
import HomeAIEn from './HomeAIEn.vue'
import HomeODC from './HomeODC.vue'
import HomeODCEn from './HomeODCEn.vue'
import HomeCloud from './HomeCloud.vue'
import HomeCloudEn from './HomeCloudEn.vue'
import HomeCampus from './HomeCampus.vue'
import HomeCampusEn from './HomeCampusEn.vue'
import HomeCloudCases from './HomeCloudCases.vue'
import HomeCampusCases from './HomeCampusCases.vue'
import HomeOdcCases from './HomeOdcCases.vue'
import HomeCasesEn from './HomeCasesEn.vue'
import HomeCloudCasesEn from './HomeCloudCasesEn.vue'
import HomeCampusCasesEn from './HomeCampusCasesEn.vue'
import HomeOdcCasesEn from './HomeOdcCasesEn.vue'
import HomeBSSZh from './HomeBSSZh.vue'
import HomeBSSEn from './HomeBSSEn.vue'
import HomeMSZh from './HomeMSZh.vue'
import HomeMSEn from './HomeMSEn.vue'

const { frontmatter, page } = useData()

let hideTimer = null
let sidebarEl = null

function showSidebar() {
  clearTimeout(hideTimer)
  document.documentElement.classList.add('sidebar-open')
}

function scheduleSidebarHide() {
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    document.documentElement.classList.remove('sidebar-open')
  }, 300)
}

function cancelHide() {
  clearTimeout(hideTimer)
}

function bindSidebarHover() {
  sidebarEl = document.querySelector('.VPSidebar')
  if (sidebarEl && !sidebarEl._hoverBound) {
    sidebarEl.addEventListener('mouseenter', cancelHide)
    sidebarEl.addEventListener('mouseleave', scheduleSidebarHide)
    sidebarEl._hoverBound = true
  }
}

onMounted(bindSidebarHover)

onUnmounted(() => {
  clearTimeout(hideTimer)
  document.documentElement.classList.remove('sidebar-open')
  if (sidebarEl) {
    sidebarEl.removeEventListener('mouseenter', cancelHide)
    sidebarEl.removeEventListener('mouseleave', scheduleSidebarHide)
    sidebarEl._hoverBound = false
    sidebarEl = null
  }
})

// 导航后收起，并重新绑定新页面的 sidebar hover
watch(() => page.value.relativePath, async () => {
  clearTimeout(hideTimer)
  document.documentElement.classList.remove('sidebar-open')
  await nextTick()
  bindSidebarHover()
})
</script>

<template>
  <HomeAurora v-if="frontmatter.layout === 'home-aurora'" />
  <HomeAuroraEn v-else-if="frontmatter.layout === 'home-aurora-en'" />
  <HomeOverseas v-else-if="frontmatter.layout === 'home-overseas'" />
  <HomeOverseasEn v-else-if="frontmatter.layout === 'home-overseas-en'" />
  <HomeMiniapp v-else-if="frontmatter.layout === 'home-miniapp'" />
  <HomeMiniappEn v-else-if="frontmatter.layout === 'home-miniapp-en'" />
  <HomeCases v-else-if="frontmatter.layout === 'home-cases-zh'" />
  <HomeAI v-else-if="frontmatter.layout === 'home-ai-zh'" />
  <HomeAIEn v-else-if="frontmatter.layout === 'home-ai-en'" />
  <HomeODC v-else-if="frontmatter.layout === 'home-odc-zh'" />
  <HomeODCEn v-else-if="frontmatter.layout === 'home-odc-en'" />
  <HomeCloud v-else-if="frontmatter.layout === 'home-cloud-zh'" />
  <HomeCloudEn v-else-if="frontmatter.layout === 'home-cloud-en'" />
  <HomeCampus v-else-if="frontmatter.layout === 'home-campus-zh'" />
  <HomeCampusEn v-else-if="frontmatter.layout === 'home-campus-en'" />
  <HomeCloudCases v-else-if="frontmatter.layout === 'home-cloud-cases-zh'" />
  <HomeCampusCases v-else-if="frontmatter.layout === 'home-campus-cases-zh'" />
  <HomeOdcCases v-else-if="frontmatter.layout === 'home-odc-cases-zh'" />
  <HomeCasesEn v-else-if="frontmatter.layout === 'home-cases-en'" />
  <HomeCloudCasesEn v-else-if="frontmatter.layout === 'home-cloud-cases-en'" />
  <HomeCampusCasesEn v-else-if="frontmatter.layout === 'home-campus-cases-en'" />
  <HomeOdcCasesEn v-else-if="frontmatter.layout === 'home-odc-cases-en'" />
  <HomeBSSZh v-else-if="frontmatter.layout === 'home-bss-zh'" />
  <HomeBSSEn v-else-if="frontmatter.layout === 'home-bss-en'" />
  <HomeMSZh v-else-if="frontmatter.layout === 'home-ms-zh'" />
  <HomeMSEn v-else-if="frontmatter.layout === 'home-ms-en'" />
  <DefaultTheme.Layout v-else>
    <template #nav-bar-title-before>
      <span class="vp-logo-chip">CSI</span>
    </template>
    <template #layout-top>
      <!-- 鼠标移入左边缘触发侧边栏弹出 -->
      <div
        class="sidebar-trigger-zone"
        @mouseenter="showSidebar"
        @mouseleave="scheduleSidebarHide"
        aria-hidden="true"
      />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.vp-logo-chip {
  background: linear-gradient(135deg, #1d4ed8, #7c3aed);
  color: #fff;
  padding: 4px 10px;
  border-radius: 7px;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  box-shadow: 0 3px 10px rgba(29,78,216,0.35);
  margin-right: 8px;
  flex-shrink: 0;
}
</style>
