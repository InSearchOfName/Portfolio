<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skills = [
  {
    key: 'skill-aws',
    title: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    key: 'skill-azure',
    title: 'Azure',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  },
  {
    key: 'skill-ansible',
    title: 'Ansible',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg',
  },
  {
    key: 'skill-jenkins',
    title: 'Jenkins',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
  },
  {
    key: 'skill-githubactions',
    title: 'GitHub Actions',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  },
  {
    key: 'skill-java',
    title: 'Java',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    key: 'skill-python',
    title: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    key: 'skill-linux',
    title: 'Linux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
  {
    key: 'skill-cloudflare',
    title: 'Cloudflare',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg',
  },
  {
    key: 'skill-docker',
    title: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    key: 'skill-k3s',
    title: 'k3s',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k3s/k3s-original.svg',
  },
  {
    key: 'skill-postgresql',
    title: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    key: 'skill-mongodb',
    title: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
]

const milestones = [
  {
    id: 'innovation',
    period: '2024 - 2025',
    title: 'Specialization in Systems & Network Engineering',
    subtitle: 'Applied Computer Science at PXL',
    description:
      'I focused my studies on cloud infrastructure, Linux administration, and automation. This period shaped the technical direction of my portfolio.',
    meta: ['PXL University of Applied Sciences and Arts', 'Systems & Network Engineering Track'],
    highlight: 'Built stronger foundations in infrastructure thinking.',
  },
  {
    id: 'personalDevelopment',
    period: 'Feb 2025 - Mar 2025',
    title: 'Projectweek 2TIN and POP sessions',
    subtitle: t('section-personalDevelopment-title'),
    description:
      'I worked in team-oriented project sessions and personal development activities focused on communication, focus, and collaboration.',
    meta: ['PXL-campus / Corda-campus', 'Teamwork, communication, and focus'],
    highlight: 'Learned how to organize work and communicate better in teams.',
  },
  {
    id: 'challenge',
    period: 'Mar 2025',
    title: 'Cyber Security Challenge Belgium 2025',
    subtitle: t('section-innovation-title'),
    description:
      'I joined the online qualifiers and solved practical security challenges in cryptography, reverse engineering, web security, and forensics.',
    meta: ['Team: Backdoor Boys', 'Placement: 116/358'],
    link: 'https://platform.cybersecuritychallenge.be/',
  },
  {
    id: 'internationalization',
    period: 'Next step',
    title: t('section-internationalization-title'),
    subtitle: 'Global perspective and broader exposure',
    description:
      'My next goal is to gain international exposure and bring that experience back into practical engineering projects.',
    meta: ['Planned milestone'],
  },
]

const projects = [
  {
    title: 'Homelab',
    description: 'Proxmox for virtualization; Jenkins hosted there for builds and automation.',
    status: 'Ongoing',
  },
  {
    title: 'K3s-Ansible',
    description:
      'An Ansible automation project that sets up a k3s cluster with minimal manual steps.',
    status: 'Completed',
    link: 'https://github.com/InSearchOfName/K3s-Ansible',
  },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container journey">
      <header class="journeyIntro card">
        <div class="card__body journeyIntro__grid">
          <div>
            <h2 class="section__title">{{ t('section-about-title') }}</h2>
            <p class="section__lede">{{ t('section-about-intro') }}</p>
            <p>{{ t('section-about-workstyle') }}</p>
            <p>{{ t('section-about-teamwork') }}</p>
            <p>{{ t('section-about-technical') }}</p>
            <p>{{ t('section-about-ambition') }}</p>
            <div class="btn-row">
              <a
                class="btn"
                href="https://github.com/InSearchOfName"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                class="btn"
                href="https://www.linkedin.com/in/tommy-quatretemps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <aside class="skillsPanel" aria-labelledby="skills-heading">
            <h3 id="skills-heading">{{ t('section-skills-title') }}</h3>
            <ul class="skill-list">
              <li v-for="skill in skills" :key="skill.key" class="skill-item entry-item">
                <span class="skill-icon" :title="skill.title">
                  <img
                    :src="skill.src"
                    :alt="skill.title"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                  />
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <div class="journeyFlow">
        <article id="journey" class="flowBlock">
          <div class="section__header">
            <h3 class="section__title">School Journey Highlights</h3>
          </div>
          <p class="section__lede">
            Key moments from my school career that shaped my interests in systems, cloud, and
            practical engineering.
          </p>
          <ol class="journeyTimeline">
            <li v-for="item in milestones" :id="item.id" :key="item.id" class="timelineMilestone">
              <div class="timelineRail" aria-hidden="true">
                <span class="timelineNode"></span>
              </div>
              <div class="timelineContent">
                <p class="timelinePeriod">{{ item.period }}</p>
                <p class="milestoneTag">{{ item.subtitle }}</p>
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <p v-if="item.highlight" class="timelineHighlight">{{ item.highlight }}</p>
                <div class="metaRow">
                  <span v-for="m in item.meta" :key="m">{{ m }}</span>
                </div>
                <a
                  v-if="item.link"
                  class="inlineLink"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View details
                </a>
              </div>
            </li>
          </ol>
        </article>

        <article id="personalProject" class="flowBlock flowBlock--compact">
          <div class="section__header">
            <h3 class="section__title">{{ t('section-personalProject-title') }}</h3>
          </div>
          <p class="section__lede">{{ t('section-personalProject-desc') }}</p>
          <div class="projectSpotlight">
            <article v-for="project in projects" :key="project.title" class="projectCard">
              <div class="projectHead">
                <h4>{{ project.title }}</h4>
                <span class="status">{{ project.status }}</span>
              </div>
              <p>{{ project.description }}</p>
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                >Open repository</a
              >
            </article>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey {
  display: grid;
  gap: var(--space-6);
}

.journeyIntro__grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: var(--space-5);
  align-items: start;
}

.skillsPanel {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-secondary) 72%, var(--bg-primary));
}

.skillsPanel h3 {
  margin: 0 0 var(--space-3) 0;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;
}

.skill-icon {
  display: inline-flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  background: var(--skill-bg);
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.skill-icon img {
  width: 72%;
  height: 72%;
  object-fit: contain;
}

.note {
  margin-top: var(--space-4);
  color: var(--text-tertiary);
  font-style: italic;
}

.journeyFlow {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: 1fr;
}

.flowBlock {
  padding: var(--space-5);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: color-mix(in oklab, var(--bg-tertiary) 90%, var(--bg-primary));
}

.timelineContent h4,
.projectCard h4 {
  margin: 0;
  font-size: 1.06rem;
}

.timelineContent p,
.projectCard p {
  margin: 0.5rem 0 0 0;
}

.metaRow {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.metaRow span {
  border: 1px solid var(--border-color);
  background: color-mix(in oklab, var(--bg-tertiary) 90%, var(--bg-primary));
  border-radius: 999px;
  padding: 0.3rem 0.65rem;
  font-size: 0.84rem;
  color: var(--text-secondary);
}

.journeyTimeline {
  list-style: none;
  padding: 0;
  margin-top: var(--space-4);
  margin-bottom: 0;
  display: grid;
  gap: var(--space-4);
}

.timelineMilestone {
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: var(--space-3);
}

.timelineRail {
  position: relative;
}

.timelineRail::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0.2rem;
  bottom: -1.3rem;
  width: 2px;
  background: color-mix(in oklab, var(--bg-accent) 35%, var(--border-color));
}

.timelineMilestone:last-child .timelineRail::before {
  bottom: 0.9rem;
}

.timelineNode {
  position: relative;
  z-index: 1;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 2px solid color-mix(in oklab, var(--bg-accent) 60%, var(--border-color));
  background: color-mix(in oklab, var(--bg-accent) 18%, var(--bg-primary));
  display: block;
}

.timelineContent {
  border: 1px solid var(--border-color);
  background: color-mix(in oklab, var(--bg-secondary) 72%, var(--bg-primary));
  border-radius: 14px;
  padding: 1rem;
}

.timelinePeriod {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.milestoneTag {
  margin: 0 0 0.45rem 0;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
  font-weight: 700;
}

.timelineHighlight {
  margin-top: 0.65rem;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: color-mix(in oklab, var(--bg-tertiary) 92%, var(--bg-primary));
}

.inlineLink {
  display: inline-block;
  margin-top: 0.8rem;
  font-weight: 700;
}

.projectSpotlight {
  margin-top: var(--space-4);
  display: grid;
  gap: var(--space-3);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.projectCard {
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    color-mix(in oklab, var(--bg-accent) 10%, var(--bg-secondary)),
    color-mix(in oklab, var(--bg-tertiary) 88%, var(--bg-primary))
  );
}

.projectHead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.status {
  border: 1px solid var(--border-color);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

@media (max-width: 920px) {
  .journeyIntro__grid {
    grid-template-columns: 1fr;
  }

  .journeyFlow {
    grid-template-columns: 1fr;
  }

  .projectSpotlight {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .skill-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
