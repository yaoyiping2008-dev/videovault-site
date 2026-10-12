export const siteConfig = {
	name: 'VideoVault',
	fullName: 'VideoVault: Video & Audio Player + Media Studio',
	tagline: 'Video & Audio Player + Media Studio',
	description:
		'Play, edit, and organize video and audio on iPhone and iPad with background playback, A-B Repeat, video bookmarks, Video Studio, and on-device media tools.',
	url: 'https://videovault.de5.net',
	email: 'contact@videovault.de5.net',
	/** Set when the App Store listing is live. */
	appStoreUrl: null as string | null,
	legal: { privacy: '/privacy/', terms: '/terms/', support: '/support/' },
} as const;

export const features = [
	{
		id: 'player',
		title: 'A player that remembers what matters',
		description:
			'Keep video or audio playing in the background, capture a frame, repeat any section with A-B Repeat, save Video Bookmarks, or send playback to a bigger screen with AirPlay. A-B Repeat and Video Bookmarks are Pro features.',
		screenshot: 'player-ab-loop-bookmarks.webp',
		label: 'Player with A-B Repeat and Video Bookmarks',
		alt: 'VideoVault player showing A-B Repeat, Video Bookmarks, Capture Frame, and Play on TV controls',
	},
	{
		id: 'video-studio',
		title: 'Video Studio for the clips you share',
		description:
			'Trim, crop to landscape or vertical 9:16, add text or a logo, hide an area, balance audio, and export a new copy. Shape short videos without changing the original.',
		screenshot: 'video-studio-short-video.webp',
		label: 'Video Studio short-video editor',
		alt: 'VideoVault Video Studio cropping a video to a vertical 9:16 format before export',
	},
	{
		id: 'web-import',
		title: 'Browse supported web media',
		description:
			'Open Web Import to browse compatible sources inside VideoVault and play supported web media with the same focused player controls.',
		screenshot: 'web-import.webp',
		label: 'Web Import',
		alt: 'VideoVault Web Import browser for supported web media and compatible sources',
	},
	{
		id: 'audio-tools',
		title: 'Focused audio tools, on device',
		description:
			'Extract audio to M4A, add background music, adjust volume, trim audio, and record audio or a voiceover. Your media is processed on your device where the selected tool supports it.',
		screenshot: null,
		label: 'Audio tools',
		alt: 'VideoVault tools for extracting audio, adding background music, adjusting volume, and recording audio',
		highlights: ['Extract Audio', 'Add Music', 'Adjust Volume', 'Trim Audio', 'Record Audio'],
	},
	{
		id: 'organize',
		title: 'Your library, your Private Lists',
		description:
			'Import from Photos or Files, search your library, group media into Private Lists, and keep a deliberate playback order without a social account or public profile.',
		screenshot: null,
		label: 'Media library',
		alt: 'VideoVault library organizing locally stored video and audio on iPhone',
		highlights: ['Import from Photos', 'Import from Files', 'Search', 'Private Lists'],
	},
	{
		id: 'backup',
		title: 'Back up before you move devices',
		description:
			'Export a Full Library Backup to Files or iCloud Drive, then restore media, metadata, and Private Lists when you change devices.',
		screenshot: null,
		label: 'Backup and restore',
		alt: 'VideoVault Full Library Backup and Restore controls',
		highlights: ['Full Library Backup', 'Restore Media', 'Restore Metadata', 'Restore Private Lists'],
	},
] as const;
