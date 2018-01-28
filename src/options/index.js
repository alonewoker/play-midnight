const OPTIONS = [
  // Static - Reference Info
  {
    id: 'lastRun',
    static: true,
    value: null,
  },

  // Section - General
  {
    id: 'enabled',
    section: 'general',
    type: 'boolean',
    defaultValue: true,
    title: 'Enable Play Midnight',
    description: `This will temporarily disable/enable Play Midnight if you don't want it on all the time`,
  },
  {
    id: 'accentsOnly',
    section: 'general',
    type: 'boolean',
    defaultValue: false,
    title: 'Enable Light-Mode Accents',
    description: 'This enables custom accents when Play Midnight is disabled',
  },

  // Section - Colorize
  {
    id: 'theme',
    plural: 'themes',
    section: 'colorize',
    type: 'themes',
    title: 'Themes',
    description: `Delicately crafted themes just for you!`,
    defaultValue: 'play-music',
    defaultValues: [
      { id: 'cherry-blossom', name: 'Cherry Blossom', accent: '#e94952', background: '#282320' },
      { id: 'midnight', name: 'Lavender Flourish', accent: '#6B2F79', background: '#2a1f2a' },
      { id: 'moonlight-sonata', name: 'Moonlight Sonata', accent: '#007AA5', background: '#1C1C25' },
      { id: 'neapolitan', name: 'Neapolitan', accent: '#a55a73', background: '#334b4c' },
      { id: 'play-music', name: 'Play Music', accent: '#ec4e28', background: '#141517' },
      { id: 'plum-berries', name: 'Plum Berries', accent: '#8E3055', background: '#231721' },
      { id: 'rusty-spoon', name: 'Rusty Spoon', accent: '#496438', background: '#111311' },
      { id: 'spartan-bloodshet', name: 'Spartan Bloodshed', accent: '#7E1B1B', background: '#1B1A18' },
      { id: 'toy-chest', name: 'Toy Chest', accent: '#c9ef4d', background: '#24484c' },
    ],
  },

  // Section - Customize
  {
    id: 'favicon',
    section: 'customize',
    type: 'boolean',
    defaultValue: true,
    title: 'Show Play Midnight Favicon',
    description: `This is the icon that shows on your Google Play tab in the browser`,
  },
  {
    id: 'faviconAccent',
    section: 'customize',
    reliesOn: 'favicon',
    type: 'boolean',
    defaultValue: true,
    title: 'Show Accent Favicon',
    description: `Makes the favicon match your selected accent color instead of dark`,
  },
  {
    id: 'queue',
    section: 'customize',
    type: 'boolean',
    defaultValue: true,
    title: 'Enable Larger Queue',
    description: `Makes the now playing queue span across your screen further to prevent cutting off song titles`,
  },

  // Section - Visible Menus
  {
    id: 'myLibrary',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'My Library',
    description: `The home of your wonderful music collection`,
  },
  {
    id: 'recent',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Recent Activity',
    description: `Access to your most recently played and added music`,
  },
  {
    id: 'topCharts',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Top Charts',
    description: `Top songs and albums currently trending in Play Music`,
  },
  {
    id: 'newReleases',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'New Releases',
    description: `Newest albums and singles added to Play Music`,
  },
  {
    id: 'browseStations',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Browse Stations',
    description: `Radio stations brought directly to you from Google`,
  },
  {
    id: 'podcasts',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Podcasts',
    description: `Podcasts brought directly to you from Google`,
  },
  {
    id: 'shop',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Shop (Free Users Only)',
    description: `Shop menu for purchasing music if you're not an 'All Access' subscriber`,
  },
  {
    id: 'subscribe',
    section: 'visibleMenus',
    type: 'boolean',
    defaultValue: true,
    title: 'Subscribe Now (Free Users Only)',
    description: `Subscribe button for converting you to an 'All Access' subscriber`,
  },

  // Section - Visible Playlists
  {
    id: 'thumbsUp',
    section: 'visiblePlaylists',
    type: 'boolean',
    defaultValue: true,
    title: `Thumbs Up`,
    description: `All your favorite songs`,
  },
  {
    id: 'soundSearch',
    section: 'visiblePlaylists',
    type: 'boolean',
    defaultValue: false,
    title: `Sound search`,
    description: `The music you've found over time via Google Sound Search`,
  },
  {
    id: 'lastAdded',
    section: 'visiblePlaylists',
    type: 'boolean',
    defaultValue: true,
    title: `Last Added`,
    description: `All of your most recently added music`,
  },
  {
    id: 'freePurchased',
    section: 'visiblePlaylists',
    type: 'boolean',
    defaultValue: true,
    title: `Free and Purchased`,
    description: `The music you've paid for or collected over time`,
  },
];

export const SECTIONS = [
  { id: 'general', title: 'General' },
  { id: 'colorize', title: 'Colorize' },
  { id: 'customize', title: 'Customize' },
  { id: 'visibleMenus', title: 'Visible Menus' },
  { id: 'visiblePlaylists', title: 'Visible Auto-Playlists' },
  { id: 'tidbits', title: 'Tidbits' },
  { id: 'default' },
];

export default OPTIONS;
