export type SeoArticle = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified: string;
	intro: string;
	screenshot: {
		filename: string;
		label: string;
		alt: string;
	};
	scenarios: { heading: string; body: string }[];
	steps: { title: string; body: string }[];
	howHelps: string[];
	limits: string[];
	formats: string[];
	faq: { question: string; answer: string }[];
	related: string[];
};

export const seoArticles: SeoArticle[] = [
	{
		slug: 'background-video-player-iphone',
		title: 'Background Video Player for iPhone',
		description:
			'Play local videos and audio in the background on iPhone with VideoVault. Keep listening when you leave the app, lock the screen, or switch tasks.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'Yes — you can keep listening to a local video or audio file on iPhone after you leave the player, as long as the file is stored in VideoVault and Background Playback is enabled (Lifetime Pro). VideoVault is a local media app: import from Photos or Files, then continue playback from Control Center or the lock screen without uploading your media.',
		screenshot: {
			filename: 'player.png',
			label: 'Player Screenshot',
			alt: 'VideoVault player on iPhone with playback controls',
		},
		scenarios: [
			{
				heading: 'Watch a downloaded course clip, then switch apps',
				body: 'You imported a training video into VideoVault. Midway through, you need Messages or Notes. With background playback on, audio continues while VideoVault is in the background.',
			},
			{
				heading: 'Listen with the screen locked',
				body: 'On a commute, lock your iPhone and use lock screen media controls to pause, skip 15 seconds, or resume — without unlocking into the full player UI.',
			},
			{
				heading: 'Picture in Picture for short multitasking',
				body: 'Where iOS supports it, Pro users can combine background playback settings with Picture in Picture so a video window stays visible over another app.',
			},
		],
		steps: [
			{
				title: 'Import the video or audio into VideoVault',
				body: 'Open Library, tap +, then choose Import from Photos or Import from Files. VideoVault copies the file into its on-device library.',
			},
			{
				title: 'Unlock Lifetime Pro if needed',
				body: 'Background Playback is a Pro feature. Purchase Lifetime Pro once (non-consumable) or Restore Purchase if you already bought it on this Apple Account.',
			},
			{
				title: 'Enable Background Playback in Settings',
				body: 'Go to Settings and turn on Background Playback. This uses iOS background audio capabilities for media already in your library.',
			},
			{
				title: 'Start playback, then leave the app',
				body: 'Open the file in Player, press play, then go Home or lock the device. Use system media controls to pause, skip, or resume.',
			},
		],
		howHelps: [
			'Keeps media local — no account and no upload of your videos to a VideoVault server.',
			'Supports seek, ±15 second skip, and playback speed in the in-app player.',
			'Works with playlists so a lecture series or workout set can continue to the next item.',
			'Pairs with Full Library Backup so your offline library can move with you to a new device.',
		],
		limits: [
			'No online video downloaders (no YouTube, TikTok, or web URL download).',
			'No cloud sync of your library between devices — use Full Library Backup / Restore instead.',
			'Background Playback and Picture in Picture require Lifetime Pro where gated.',
			'No AI subtitles, transcription, or automatic chaptering.',
			'Not a professional multi-track timeline editor.',
		],
		formats: [
			'Video import: MP4, MOV, M4V',
			'Audio import: MP3, M4A, AAC, WAV',
			'Playback stays on-device inside the VideoVault sandbox',
		],
		faq: [
			{
				question: 'Does background playback work with video files or only audio?',
				answer:
					'You can start from a video or audio item in your library. When VideoVault is backgrounded or the screen is locked, iOS continues the audio stream according to your Background Playback setting.',
			},
			{
				question: 'Why did playback stop when I left the app?',
				answer:
					'Confirm Lifetime Pro is active, Background Playback is enabled in Settings, and Low Power Mode or Focus settings are not interrupting media. Then restart playback from Player.',
			},
			{
				question: 'Can VideoVault play videos still sitting only in Photos?',
				answer:
					'Import first. VideoVault plays files copied into its library, which keeps playback and playlists reliable offline.',
			},
			{
				question: 'Is there a subscription for background play?',
				answer:
					'No. Lifetime Pro is a one-time App Store purchase. Restore Purchase restores the entitlement, not your media files.',
			},
		],
		related: [
			'listen-to-lecture-video-in-background',
			'training-video-player-iphone',
			'video-playlist-organizer',
			'extract-audio-from-video-iphone',
		],
	},
	{
		slug: 'extract-audio-from-video-iphone',
		title: 'Extract Audio from Video on iPhone (M4A)',
		description:
			'Extract audio from a local video on iPhone with VideoVault. Export M4A on device — no YouTube download, no MP3 conversion, no cloud upload.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'To pull sound out of a video you already have on iPhone, import the video into VideoVault and use Extract Audio. The tool writes an M4A file into your library — not MP3. Everything runs on your device; VideoVault does not download videos from YouTube, TikTok, or other websites.',
		screenshot: {
			filename: 'tools.png',
			label: 'Tools Screenshot',
			alt: 'VideoVault Extract Audio tool on iPhone',
		},
		scenarios: [
			{
				heading: 'Save a voice memo buried inside a camera video',
				body: 'You recorded a meeting or idea as video. Extract Audio gives you a lighter M4A clip for listening or sharing without the picture track.',
			},
			{
				heading: 'Reuse dialogue for a rough podcast draft',
				body: 'After a recorded interview video lands in Files or Photos, extract the soundtrack locally before you edit elsewhere. VideoVault does not publish to podcast hosts.',
			},
			{
				heading: 'Keep music beds from a personal project video',
				body: 'If you own the rights to the footage, extract the audio bed as M4A for reuse in another local project.',
			},
		],
		steps: [
			{
				title: 'Import the source video',
				body: 'From Library, import via Photos or Files. Confirm the clip appears with a thumbnail and duration.',
			},
			{
				title: 'Open Tools → Extract Audio',
				body: 'Lifetime Pro unlocks media tools. Select Extract Audio and choose the imported video as the source.',
			},
			{
				title: 'Run extraction and save to Library',
				body: 'Start the job and wait for completion. VideoVault saves a new M4A item in your library — it does not upload the result.',
			},
			{
				title: 'Play, share, or organize the M4A',
				body: 'Open the audio in Player, add it to a playlist, or use Export & Share (Pro) via the iOS share sheet when you need a copy elsewhere.',
			},
		],
		howHelps: [
			'On-device extraction keeps sensitive recordings off a developer server.',
			'M4A output matches common Apple playback and editing workflows.',
			'Extracted files become regular library items you can rename, search, and back up.',
			'Works alongside playlists and background playback for long listening sessions.',
		],
		limits: [
			'Output format is M4A, not MP3.',
			'No online video download or YouTube / TikTok import.',
			'No AI transcription, captions, or speaker labels.',
			'No direct publish to Spotify, Apple Podcasts, or other hosts.',
			'No video compression tool in VideoVault.',
			'Not a multi-track DAW or timeline NLE.',
		],
		formats: [
			'Source video: MP4, MOV, M4V',
			'Extracted audio output: M4A',
			'Other library audio you may already have: MP3, M4A, AAC, WAV',
		],
		faq: [
			{
				question: 'Can I export MP3 instead of M4A?',
				answer:
					'No. VideoVault’s Extract Audio tool exports M4A. If you need MP3, convert the M4A in another app after Export & Share.',
			},
			{
				question: 'Can I paste a YouTube link to extract audio?',
				answer:
					'No. VideoVault only works with media you import from Photos or Files. It is not a web downloader.',
			},
			{
				question: 'Where is the extracted file stored?',
				answer:
					'Inside VideoVault’s on-device library. Deleting the app can remove local media unless you previously exported a Full Library Backup.',
			},
			{
				question: 'Does extraction require the internet?',
				answer:
					'No network is required for the extraction itself. An internet connection is only needed for App Store purchase or restore flows.',
			},
		],
		related: [
			'video-interview-to-podcast-audio',
			'add-background-music-to-video',
			'record-voiceover-on-iphone',
			'listen-to-lecture-video-in-background',
		],
	},
	{
		slug: 'listen-to-lecture-video-in-background',
		title: 'Listen to Lecture Videos in the Background',
		description:
			'Listen to lecture and class videos in the background on iPhone with VideoVault. Import local recordings, enable Background Playback, and keep learning hands-free.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'If your lecture is already a video file on your iPhone — from Files, an export, or Photos — VideoVault can play it while you take notes in another app or lock the screen. Import the lecture, enable Background Playback (Lifetime Pro), and treat the soundtrack like a study podcast. VideoVault does not fetch lectures from online course sites or generate transcripts.',
		screenshot: {
			filename: 'player.png',
			label: 'Player Screenshot',
			alt: 'Listening to a lecture video in VideoVault on iPhone',
		},
		scenarios: [
			{
				heading: 'Review a recorded seminar while commuting',
				body: 'Import last week’s seminar recording, start playback, lock the phone, and scrub ±15 seconds when you need to rehear a definition.',
			},
			{
				heading: 'Take notes in a separate app',
				body: 'Play the lecture in VideoVault, switch to Notes or a PDF reader, and keep the audio running with background playback enabled.',
			},
			{
				heading: 'Queue a week of class clips',
				body: 'Build a playlist of lecture segments in order so one session flows into the next without reopening Library each time.',
			},
		],
		steps: [
			{
				title: 'Gather lecture files offline',
				body: 'Save or copy lecture videos you are allowed to keep into Files, iCloud Drive, or Photos, then import them into VideoVault.',
			},
			{
				title: 'Organize by course with playlists',
				body: 'Create a playlist per class or week and add the imported clips in syllabus order.',
			},
			{
				title: 'Turn on Background Playback',
				body: 'With Lifetime Pro, enable Background Playback in Settings before you start a long study block.',
			},
			{
				title: 'Use speed and skip controls',
				body: 'In Player, adjust speed for dense sections and use ±15 second jumps to revisit examples without scrubbing blindly.',
			},
		],
		howHelps: [
			'Local library means lectures remain available offline after import.',
			'Playlists mirror course structure better than a flat camera roll.',
			'Background playback supports note-taking and commuting workflows.',
			'Optional Extract Audio (M4A) creates lighter study audio from video lectures you own.',
		],
		limits: [
			'No downloads from Coursera, YouTube, or other streaming classroom sites.',
			'No AI lecture transcription or auto summaries.',
			'No cloud sync of playlists — back up with Full Library Backup before switching phones.',
			'No podcast-host publishing for extracted lecture audio.',
		],
		formats: [
			'Lecture video: MP4, MOV, M4V',
			'Optional extracted study audio: M4A',
			'Playlist items can mix video and audio already in your library',
		],
		faq: [
			{
				question: 'Can VideoVault open my school’s streaming portal?',
				answer:
					'No. It plays local files you import. Download or export lectures only when your school’s rules allow it, then import the file.',
			},
			{
				question: 'Will it transcribe the lecture for me?',
				answer:
					'No. VideoVault does not offer AI transcription or captions. Use Player controls and notes instead.',
			},
			{
				question: 'How do I keep lectures if I delete the app?',
				answer:
					'Export a Full Library Backup to Files or iCloud Drive first. Restore Purchase alone will not bring media back.',
			},
			{
				question: 'Can I listen at 1.5x or 2x?',
				answer:
					'Yes. The in-app player includes playback speed options suitable for review sessions.',
			},
		],
		related: [
			'background-video-player-iphone',
			'training-video-player-iphone',
			'video-playlist-organizer',
			'extract-audio-from-video-iphone',
		],
	},
	{
		slug: 'training-video-player-iphone',
		title: 'Training Video Player for iPhone',
		description:
			'Use VideoVault as an offline training video player on iPhone. Import course clips, organize playlists, and replay drills with speed and background playback.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'VideoVault works as a practical offline training player when your drills, onboarding videos, or coaching clips already live as files on your iPhone. Import them into a private library, group them into playlists, and replay with seek, speed, and optional background audio. It is not a learning-management system and does not stream or download training catalogs from the web.',
		screenshot: {
			filename: 'library.png',
			label: 'Library Screenshot',
			alt: 'VideoVault library organized for training videos on iPhone',
		},
		scenarios: [
			{
				heading: 'Field coaching clips on a job site',
				body: 'Supervisors save short how-to videos to Files, import them into VideoVault, and open the right clip without hunting through Camera Roll.',
			},
			{
				heading: 'Fitness or form review offline',
				body: 'Keep a playlist of form demos. Loop a clip in Player, slow playback, and practice without relying on a gym Wi-Fi stream.',
			},
			{
				heading: 'Employee onboarding packets',
				body: 'Load policy and process videos once, then hand a device a playlist order that matches day-one training.',
			},
		],
		steps: [
			{
				title: 'Import training media from Photos or Files',
				body: 'Use Library → + to copy approved training videos into VideoVault’s sandbox storage.',
			},
			{
				title: 'Rename clips so titles match the curriculum',
				body: 'Clear names beat generic IMG filenames when someone needs “Module 3 — Safety” quickly.',
			},
			{
				title: 'Build playlists per skill path',
				body: 'Create playlists such as “Week 1 Onboarding” or “Machine Setup,” then add clips in teaching order.',
			},
			{
				title: 'Replay with player controls',
				body: 'Use pause, ±15 seconds, and speed controls during practice. Enable Background Playback (Pro) if trainees listen while performing a task.',
			},
		],
		howHelps: [
			'Offline-first library reduces dependence on venue Wi-Fi.',
			'Search and sort help large training packs stay manageable.',
			'Playlists encode sequence without a separate LMS app.',
			'Full Library Backup protects the packet when devices rotate.',
		],
		limits: [
			'No LMS quizzes, progress sync, or admin dashboards.',
			'No YouTube / TikTok training downloaders.',
			'No AI coaching overlays or auto chapter markers.',
			'No video compression for shrinking huge 4K demos inside VideoVault.',
			'No multi-track editing of training footage.',
		],
		formats: [
			'Training video: MP4, MOV, M4V',
			'Supporting audio: MP3, M4A, AAC, WAV',
			'Share exports use the system share sheet (Pro for Export & Share)',
		],
		faq: [
			{
				question: 'Can teams sync one shared training library in the cloud?',
				answer:
					'VideoVault has no cloud sync. Distribute files through your own Files/MDM workflow, or restore from a Full Library Backup you control.',
			},
			{
				question: 'Does it track who finished which module?',
				answer:
					'No completion tracking. Use playlists as a checklist and track completion in your own process.',
			},
			{
				question: 'Can I shrink large training videos in the app?',
				answer:
					'No. VideoVault does not include a compress-video tool. Compress elsewhere before import if storage is tight.',
			},
			{
				question: 'Is iPad supported for training review?',
				answer:
					'Yes. VideoVault supports iPhone and iPad, which helps when a larger screen is useful for demos.',
			},
		],
		related: [
			'video-playlist-organizer',
			'listen-to-lecture-video-in-background',
			'background-video-player-iphone',
			'add-background-music-to-video',
		],
	},
	{
		slug: 'add-background-music-to-video',
		title: 'Add Background Music to a Video on iPhone',
		description:
			'Add background music to a local video on iPhone with VideoVault. Mix music and original audio on device, adjust volumes, and export without a multi-track timeline.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'VideoVault’s Add Background Music tool (Lifetime Pro) lets you pair a local video with a local audio track, balance volumes, and save a new clip in your library. It is a focused on-device mixer — not a full multi-track timeline, not a stock-music store, and not a publisher to social networks.',
		screenshot: {
			filename: 'tools.png',
			label: 'Tools Screenshot',
			alt: 'VideoVault Add Background Music tool on iPhone',
		},
		scenarios: [
			{
				heading: 'Soft bed under a talking-head update',
				body: 'Import your camera video and a licensed music bed, lower the music under dialogue, and save a share-ready cut locally.',
			},
			{
				heading: 'Highlight reel for a private audience',
				body: 'Combine event footage with a track you own, then Export & Share through iOS when you are ready — VideoVault does not post for you.',
			},
			{
				heading: 'Replace silence in a screen demo',
				body: 'Add light music under a product walkthrough video stored in Files so the export feels less empty.',
			},
		],
		steps: [
			{
				title: 'Import the video and the music file',
				body: 'Bring both into Library from Photos or Files. Music can be M4A, MP3, AAC, or WAV already on device.',
			},
			{
				title: 'Open Tools → Add Background Music',
				body: 'Select the video, then choose the audio bed. Lifetime Pro is required for this tool.',
			},
			{
				title: 'Balance original and music levels',
				body: 'Use the volume controls so dialogue stays intelligible and the bed sits underneath.',
			},
			{
				title: 'Export back to Library',
				body: 'Render the mixed video into your library, preview in Player, then share via the system sheet if needed.',
			},
		],
		howHelps: [
			'Keeps unfinished drafts on device instead of uploading to a creative cloud.',
			'Volume adjustment targets the common “music too loud” problem without a desktop NLE.',
			'Results become library items you can playlist or back up.',
			'Works with media you already legally possess — no built-in scraping of streaming catalogs.',
		],
		limits: [
			'Not a professional multi-track timeline with keyframes, buses, or effects racks.',
			'No stock music marketplace or streaming-service imports.',
			'No AI auto-ducking beyond the manual volume controls provided.',
			'No direct post to TikTok, Reels, or YouTube from inside VideoVault.',
			'No video compression pass after mixing.',
		],
		formats: [
			'Video input: MP4, MOV, M4V',
			'Music input: MP3, M4A, AAC, WAV',
			'Mixed output saved as a new library video on device',
		],
		faq: [
			{
				question: 'Can I edit volume automation over time?',
				answer:
					'VideoVault provides straightforward level controls for the mix, not a full automation timeline. For complex rides, finish in a desktop editor.',
			},
			{
				question: 'Where does the music come from?',
				answer:
					'Only from audio files you import. There is no YouTube ripper or built-in music store.',
			},
			{
				question: 'Can I remove the original camera audio entirely?',
				answer:
					'Lower the original track with the volume controls when you want the bed to dominate, depending on the tool’s available sliders in your version.',
			},
			{
				question: 'Does mixing require Pro?',
				answer:
					'Yes. Add Background Music is part of the Lifetime Pro toolset, sold as a one-time unlock.',
			},
		],
		related: [
			'record-voiceover-on-iphone',
			'extract-audio-from-video-iphone',
			'video-interview-to-podcast-audio',
			'training-video-player-iphone',
		],
	},
	{
		slug: 'record-voiceover-on-iphone',
		title: 'Record a Voiceover on iPhone',
		description:
			'Record a voiceover on iPhone with VideoVault. Capture narration to M4A locally, keep it in your library, and use it beside your videos without a studio DAW.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'VideoVault includes a Record Audio tool (Lifetime Pro) for capturing narration or voice notes straight into your local library as M4A. Use it for simple voiceovers, reminders tied to a project, or scratch commentary. It is not an AI voice generator, not a multi-track studio, and microphone access is requested only when you start recording.',
		screenshot: {
			filename: 'tools.png',
			label: 'Tools Screenshot',
			alt: 'VideoVault Record Audio voiceover tool on iPhone',
		},
		scenarios: [
			{
				heading: 'Narrate a silent product demo',
				body: 'Record a voiceover take, then keep the M4A beside the demo video in your library for a later mix or external edit.',
			},
			{
				heading: 'Coach feedback on a trainee clip',
				body: 'Watch a training video, then record spoken notes explaining what to fix — stored privately on device.',
			},
			{
				heading: 'Capture interview follow-ups',
				body: 'After a taped conversation, record a short host intro or disclaimer as a separate M4A without opening a full podcast suite.',
			},
		],
		steps: [
			{
				title: 'Allow microphone access when prompted',
				body: 'Open Tools → Record Audio and grant microphone permission. Denying permission blocks recording only, not the rest of the app.',
			},
			{
				title: 'Record your take',
				body: 'Capture narration in a quiet space. Stop when finished; VideoVault saves an M4A into Library.',
			},
			{
				title: 'Rename and preview',
				body: 'Give the clip a clear title, play it back, and re-record if needed. Previous takes remain until you delete them.',
			},
			{
				title: 'Combine with video elsewhere in your workflow',
				body: 'Use the M4A with Add Background Music / volume tools where applicable, or Export & Share to finish in another editor.',
			},
		],
		howHelps: [
			'Keeps voice takes next to the related videos in one library.',
			'M4A capture fits Apple-centric editing and sharing paths.',
			'No account wall before you can record a private note.',
			'Backups can include recordings when you export a Full Library Backup.',
		],
		limits: [
			'No AI text-to-speech voices or script autodub.',
			'No multi-track punch-in timeline like a DAW.',
			'No automatic noise removal suite beyond what you capture cleanly.',
			'No direct upload to podcast hosts or social apps beyond the iOS share sheet.',
			'Output is M4A, not MP3.',
		],
		formats: [
			'Recorded voiceover output: M4A',
			'Companion video formats in library: MP4, MOV, M4V',
			'Other importable audio: MP3, M4A, AAC, WAV',
		],
		faq: [
			{
				question: 'Does VideoVault record in the background while I use another app?',
				answer:
					'Use the in-app Record Audio flow for captures. Background Playback is for playing library media, not for unattended multi-app recording sessions.',
			},
			{
				question: 'Are recordings uploaded for processing?',
				answer:
					'No. Recordings stay in on-device storage unless you choose to share or back them up yourself.',
			},
			{
				question: 'Can I export MP3 voiceovers?',
				answer:
					'VideoVault saves recordings as M4A. Convert after export if another workflow requires MP3.',
			},
			{
				question: 'What if I denied microphone access?',
				answer:
					'Re-enable Microphone for VideoVault in iOS Settings → Privacy & Security. Other library features continue to work without it.',
			},
		],
		related: [
			'add-background-music-to-video',
			'extract-audio-from-video-iphone',
			'video-interview-to-podcast-audio',
			'video-playlist-organizer',
		],
	},
	{
		slug: 'video-playlist-organizer',
		title: 'Video Playlist Organizer for iPhone',
		description:
			'Organize local videos and audio into playlists on iPhone with VideoVault. Create, reorder, and play collections offline without cloud sync or social playlist sharing.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'VideoVault’s Playlist tab is for people who want ordered collections of local videos and audio — study queues, rehearsal sets, client review reels — without a streaming account. Create playlists, add library items, reorder them, and play continuously. Playlists stay on your device; there is no collaborative cloud playlist sync.',
		screenshot: {
			filename: 'playlist.png',
			label: 'Playlist Screenshot',
			alt: 'VideoVault playlist organizer on iPhone',
		},
		scenarios: [
			{
				heading: 'Client review order',
				body: 'Import several cutdowns, drop them in a named playlist, and present in a fixed sequence during a call.',
			},
			{
				heading: 'Language practice queue',
				body: 'Keep dialogue videos and extracted M4A drills in one playlist so practice sessions run end to end.',
			},
			{
				heading: 'Event day run-of-show',
				body: 'Order opening video, speaker bumper, and closing clip so volunteers tap Play once instead of searching Files.',
			},
		],
		steps: [
			{
				title: 'Import the media you want to organize',
				body: 'Playlists reference items already in Library, so import from Photos or Files first.',
			},
			{
				title: 'Create a playlist',
				body: 'Open the Playlist tab, create a new list, and give it a specific name you will recognize later.',
			},
			{
				title: 'Add items and reorder',
				body: 'Add videos or audio from your library, then drag or adjust order until the sequence matches your run-of-show.',
			},
			{
				title: 'Play through and optionally enable background audio',
				body: 'Start the playlist in Player. With Background Playback (Pro), listening can continue when you leave the app.',
			},
		],
		howHelps: [
			'Turns a messy import list into intentional queues.',
			'Supports mixed video and audio items in one flow.',
			'Renames and library search still work on the underlying files.',
			'Full Library Backup can preserve playlists with your media when changing devices.',
		],
		limits: [
			'No Spotify-style social playlist sharing or public links.',
			'No automatic cloud sync across iPhone and iPad accounts.',
			'No smart playlists powered by AI taste models.',
			'Free vs Pro playlist limits may apply; Lifetime Pro removes Pro gates.',
			'Cannot pull playlists from YouTube.',
		],
		formats: [
			'Playlist items: imported MP4, MOV, M4V videos',
			'Playlist items: imported or extracted MP3, M4A, AAC, WAV audio',
			'Playlist metadata stored locally with your VideoVault library',
		],
		faq: [
			{
				question: 'Does deleting a playlist delete the video files?',
				answer:
					'Removing a playlist removes the list organization. Delete media from Library when you intend to remove the underlying files.',
			},
			{
				question: 'Can I sync playlists with my iPad automatically?',
				answer:
					'Not through a VideoVault cloud account. Transfer with Full Library Backup / Restore or re-import files on the other device.',
			},
			{
				question: 'Can collaborators edit the same playlist online?',
				answer:
					'No real-time collaboration. Hand off a backup file or shared originals through your own channels.',
			},
			{
				question: 'Will the next item auto-play?',
				answer:
					'Yes. Playlists are designed for continuous playback through the queued items.',
			},
		],
		related: [
			'training-video-player-iphone',
			'listen-to-lecture-video-in-background',
			'background-video-player-iphone',
			'video-interview-to-podcast-audio',
		],
	},
	{
		slug: 'video-interview-to-podcast-audio',
		title: 'Turn a Video Interview into Podcast Audio',
		description:
			'Convert a local video interview into podcast-ready M4A audio on iPhone with VideoVault. Extract on device — no YouTube download and no direct podcast hosting.',
		datePublished: '2026-07-21',
		dateModified: '2026-07-21',
		intro:
			'If your interview already exists as a video file on iPhone, VideoVault can extract the soundtrack to M4A for a podcast workflow. That covers the “video to audio” step locally. VideoVault does not download interviews from YouTube, does not transcribe guests with AI, and does not publish episodes to Apple Podcasts, Spotify, or other hosts — you export the audio and upload with your own podcasting tools.',
		screenshot: {
			filename: 'tools.png',
			label: 'Tools Screenshot',
			alt: 'Extracting interview audio to M4A in VideoVault',
		},
		scenarios: [
			{
				heading: 'Camera interview to audio episode draft',
				body: 'You filmed a guest on video. Extract Audio produces an M4A you can level in a podcast editor next.',
			},
			{
				heading: 'Zoom recording already saved to Files',
				body: 'Import the recording, extract speech to M4A, and keep the video master in Library if you still need B-roll later.',
			},
			{
				heading: 'Bonus audio feed for existing video content',
				body: 'Creators who already ship video can offer an audio-only companion file without re-recording the conversation.',
			},
		],
		steps: [
			{
				title: 'Import the interview video you own or have rights to use',
				body: 'Bring the MP4/MOV/M4V into VideoVault from Photos or Files. Do not expect URL-based imports from social sites.',
			},
			{
				title: 'Run Extract Audio',
				body: 'In Tools, choose Extract Audio (Lifetime Pro), select the interview, and save the M4A into Library.',
			},
			{
				title: 'Optional: record a host intro voiceover',
				body: 'Use Record Audio to capture an intro or disclaimer as a separate M4A, then combine files in your podcast editor of choice.',
			},
			{
				title: 'Export & Share, then publish elsewhere',
				body: 'Share the M4A through the iOS share sheet to Files, AirDrop, or your editor. Upload the finished episode from your podcast host — not from VideoVault.',
			},
		],
		howHelps: [
			'Splits picture and sound without a laptop for the first pass.',
			'Keeps raw interviews private on device during extraction.',
			'Playlists can hold episode drafts and extracted takes together.',
			'Backup protects unreleased interviews before you wipe a handset.',
		],
		limits: [
			'Extracted format is M4A, not MP3.',
			'No YouTube / TikTok / RSS download of someone else’s show.',
			'No AI transcription, show notes, or audiogram generator.',
			'No direct publish to podcast platforms.',
			'No multi-track ducking suite comparable to desktop podcast software.',
			'No cloud sync of unpublished episode drafts.',
		],
		formats: [
			'Interview video input: MP4, MOV, M4V',
			'Extracted episode audio: M4A',
			'Optional recorded intros: M4A',
		],
		faq: [
			{
				question: 'Will VideoVault submit my episode to Apple Podcasts?',
				answer:
					'No. It prepares local audio. Use a podcast host or hosting dashboard to publish and syndicate.',
			},
			{
				question: 'Can I convert to MP3 for my host?',
				answer:
					'Extract Audio outputs M4A. Convert in another tool if your host requires MP3.',
			},
			{
				question: 'Can I paste a YouTube interview link?',
				answer:
					'No. Import a file you already have. VideoVault is not an online downloader.',
			},
			{
				question: 'Does Restore Purchase bring back interview files?',
				answer:
					'Restore Purchase restores Lifetime Pro only. Media returns via Full Library Backup / Restore or original imports.',
			},
		],
		related: [
			'extract-audio-from-video-iphone',
			'record-voiceover-on-iphone',
			'add-background-music-to-video',
			'video-playlist-organizer',
		],
	},
];

export function getArticle(slug: string): SeoArticle {
	const article = seoArticles.find((item) => item.slug === slug);
	if (!article) {
		throw new Error(`Unknown SEO article slug: ${slug}`);
	}
	return article;
}

export function getRelatedArticles(article: SeoArticle): SeoArticle[] {
	return article.related.map((slug) => getArticle(slug));
}

export function articlePath(slug: string): string {
	return `/${slug}/`;
}
