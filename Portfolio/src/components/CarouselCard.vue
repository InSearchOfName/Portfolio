<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Card {
  id: string
  href: string
  i18nLink: string
  image: string
  video?: {
    webm: string
    mp4: string
  }
  title: string
  i18nTitle: string
}

const { t } = useI18n()

const cards = ref<Card[]>([
  {
    id: 'about',
    href: '#about',
    i18nLink: 'card-about-link',
    image: '/img/aboutMeThumb.jpg',
    video: {
      webm: '/videos/aboutMe.webm',
      mp4: '/videos/aboutMe.mp4'
    },
    title: 'About Me',
    i18nTitle: 'card-about-title'
  },
  {
    id: 'seminars',
    href: '#seminars',
    i18nLink: 'card-seminars-link',
    image: '/img/seminarsThumb.jpg',
    video: {
      webm: '/videos/seminars.webm',
      mp4: '/videos/seminars.mp4'
    },
    title: 'Seminars',
    i18nTitle: 'card-seminars-title'
  },
  {
    id: 'innovation',
    href: '#innovation',
    i18nLink: 'card-innovation-link',
    image: '/img/innovationthumb1.jpg',
    video: {
      webm: '/videos/innovation.webm',
      mp4: '/videos/innovation.mp4'
    },
    title: 'Innovation',
    i18nTitle: 'card-innovation-link'
  },
  {
    id: 'personalDevelopment',
    href: '#personalDevelopment',
    i18nLink: 'card-personalDevelopment-link',
    image: '/img/personaldevelopmentthumb.jpg',
    video: {
      webm: '/videos/personalDevelopment.webm',
      mp4: '/videos/personalDevelopment.mp4'
    },
    title: 'Personal Development',
    i18nTitle: 'card-personalDevelopment-title'
  },
  {
    id: 'internationalization',
    href: '#internationalization',
    i18nLink: 'card-internationalization-link',
    image: '/img/internationalthumb.jpg',
    video: {
      webm: '/videos/international.webm',
      mp4: '/videos/international.mp4'
    },
    title: 'Internationalization',
    i18nTitle: 'card-internationalization-title'
  },
  {
    id: 'personalProject',
    href: '#personalProject',
    i18nLink: 'card-personalProject-link',
    image: '/img/personalproject.jpg',
    video: {
      webm: '/videos/personalProject.webm',
      mp4: '/videos/personalProject.mp4'
    },
    title: 'Personal Projects',
    i18nTitle: 'card-personalProject-title'
  }
])

// Track which videos have been loaded
const loadedVideos = new Set<string>()

onMounted(() => {
  // Wait for images to load, then animate cards
  let imagesLoaded = 0
  const totalImages = document.querySelectorAll('.image-preview img').length

  const imageLoadHandler = () => {
    imagesLoaded++
    if (imagesLoaded === totalImages) {
      // All images loaded, now animate cards
      const cardElements = document.querySelectorAll('.main-container')
      cardElements.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('animated')
        }, i * 90 + 40)
      })
    }
  }

  const images = document.querySelectorAll('.image-preview img')
  images.forEach((img) => {
    if (img.complete) {
      // Image already loaded from cache
      imageLoadHandler()
    } else {
      img.addEventListener('load', imageLoadHandler)
    }
  })

  // Add video lazy-loading and play/pause on hover
  const cardElements = document.querySelectorAll('.hover-container')
  cardElements.forEach((card) => {
    const video = card.querySelector('video') as HTMLVideoElement
    if (video) {
      card.addEventListener('mouseenter', () => {
        // Load video sources on first hover if not already loaded
        if (!loadedVideos.has(video.id)) {
          const sources = video.querySelectorAll('source')
          sources.forEach((source) => {
            source.src = source.getAttribute('data-src') || source.src
          })
          video.load()
          loadedVideos.add(video.id)
        }

        video.play().catch(() => {
          // Autoplay may be blocked by browser
        })
      })
      card.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0
      })
    }
  })
})
</script>

<template>
  <div class="cards-row" id="cards-row">
    <a
      v-for="card in cards"
      :key="card.id"
      :href="card.href"
      class="main-container hover-container no-decoration"
      :data-i18n="card.i18nLink"
    >
      <div class="image-preview">
        <img
          :src="card.image"
          :alt="card.title"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
        <video
          v-if="card.video"
          class="preview-video"
          :id="`video-${card.id}`"
          preload="none"
          loop
          muted
          playsinline
          aria-hidden="true"
        >
          <source :data-src="card.video.webm" type="video/webm" />
          <source :data-src="card.video.mp4" type="video/mp4" />
        </video>
        <span>
          <div class="description preview-description">
            <h1>{{ t(card.i18nTitle) }}</h1>
          </div>
        </span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: inherit;
}

.cards-row {
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0;
  margin: 0;
  border: none;
  overflow-x: visible;
  overflow-y: visible;
  height: auto;
  min-height: 0;
}

.main-container {
  flex: 1 1 0;
  min-width: 0;
  height: 100dvh;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(100vh);
  transition:
    opacity 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    transform 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    flex-basis 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    width 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    filter 0.2s,
    box-shadow 0.25s linear;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
  transform-origin: left bottom;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  z-index: 1;
}

.main-container.animated {
  opacity: 1;
  transform: translateY(0);
}

.cards-row:hover .main-container {
  flex-basis: 10%;
  width: 10%;
  transition:
    flex-basis 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    width 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    filter 0.2s,
    box-shadow 0.25s linear;
  filter: brightness(0.65);
}

.cards-row .main-container:hover,
.cards-row .main-container:focus-within {
  flex-basis: 40%;
  width: 40%;
  z-index: 20;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
  filter: brightness(1);
}

.cards-row .main-container {
  transition:
    opacity 0.7s cubic-bezier(0.4, 1, 0.6, 1),
    transform 0.7s cubic-bezier(0.4, 1, 0.6, 1),
    flex-basis 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    width 0.6s cubic-bezier(0.4, 1, 0.6, 1),
    filter 0.2s,
    box-shadow 0.25s linear !important;
}

.cards-row:not(:hover) .main-container {
  transition:
    flex-basis 1s cubic-bezier(0.4, 1, 0.6, 1),
    width 1s cubic-bezier(0.4, 1, 0.6, 1),
    filter 0.2s,
    box-shadow 0.4s cubic-bezier(0.4, 1, 0.6, 1);
}

.hover-container {
  position: relative;
  transition:
    transform 0.25s linear,
    box-shadow 0.25s linear,
    margin 0.25s linear;
}

.hover-container:hover {
  transform: none;
  z-index: 20;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
}

.image-preview {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1 1 auto;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-description {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  color: #fff;
  z-index: 2;
  padding: 1em;
  word-break: normal;
  overflow-wrap: break-word;
  hyphens: auto;
  white-space: normal;
  line-height: 1.45;
}

.preview-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.preview-description,
.preview-video {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.hover-container:hover .preview-description,
.hover-container:hover .preview-video {
  opacity: 1;
  pointer-events: auto;
}

h1 {
  margin: 0;
}
</style>
