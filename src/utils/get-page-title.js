import defaultSettings from '@/settings'

const title = defaultSettings.title || '影院售票系统云平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
