export const siteConfig = {
	name: 'VideoVault',
	fullName: 'VideoVault: Media Player',
	tagline: 'Local Video & Audio Tools',
	description:
		'Import videos and audio from Photos or Files, organize playlists, play in the background, and extract audio — all on your device. No account required.',
	url: 'https://videovault.de5.net',
	email: 'contact@videovault.de5.net',
	/** Set when the App Store listing is live. */
	appStoreUrl: null as string | null,
	legal: {
		privacy: '/privacy/',
		terms: '/terms/',
		support: '/support/',
	},
} as const;

export const features = [
	{
		id: 'library',
		title: 'Your local media library',
		description:
			'Import from Photos or Files, then rename, search, and manage videos and audio in one private library on your device.',
		screenshot: 'library.png',
		label: 'Library Screenshot',
		alt: 'VideoVault library showing imported local media',
	},
	{
		id: 'player',
		title: 'Playback built for focus',
		description:
			'Seek, skip, and change speed with lock screen controls. Enable background playback and Picture in Picture with Lifetime Pro.',
		screenshot: 'player.png',
		label: 'Player Screenshot',
		alt: 'VideoVault player with full playback controls',
	},
	{
		id: 'tools',
		title: 'Local media tools',
		description:
			'Extract audio to M4A, add background music, adjust volume, and record voiceovers — processed on-device, not on a server.',
		screenshot: 'tools.png',
		label: 'Tools Screenshot',
		alt: 'VideoVault tools for extract audio and media editing',
	},
	{
		id: 'playlist',
		title: 'Playlists your way',
		description:
			'Group videos and audio into playlists, reorder items, and keep listening with continuous playback.',
		screenshot: 'playlist.png',
		label: 'Playlist Screenshot',
		alt: 'VideoVault playlists organizing local media',
	},
	{
		id: 'backup',
		title: 'Full library backup',
		description:
			'Export a Full Library Backup to iCloud Drive or Files, then restore media and playlists when you change devices.',
		screenshot: 'backup.png',
		label: 'Backup Screenshot',
		alt: 'VideoVault full library backup and restore',
	},
] as const;
