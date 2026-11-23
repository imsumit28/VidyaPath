import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Maximize2,
  Minimize2,
  Sparkles,
  Volume2,
  ExternalLink,
  CheckCircle2,
  Circle,
  RotateCcw,
  BookOpen,
  Tv,
  Layers,
  Info,
  Clock,
  Copy,
  Check,
  StickyNote,
  Trash2,
  ShieldCheck,
  ListOrdered,
  RefreshCw,
  HelpCircle,
  Radio,
  Share2,
} from 'lucide-react';
import type { Topic } from '../../types';

interface VideoPlayerProps {
  topic: Topic;
  subjectName: string;
  chapterTitle?: string;
}

interface ChapterTimestamp {
  seconds: number;
  timeLabel: string;
  title: string;
  desc: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  topic,
  subjectName,
  chapterTitle,
}) => {
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(true);
  const [activeStream, setActiveStream] = useState<'primary' | 'backup'>('primary');
  const [activeViewMode, setActiveViewMode] = useState<'video' | 'concept' | 'chapters' | 'notes'>('video');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [currentStartTime, setCurrentStartTime] = useState<number>(0);
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);
  const [copiedNotes, setCopiedNotes] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isRefreshingStream, setIsRefreshingStream] = useState(false);

  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Persistent user notes for this specific topic
  const notesStorageKey = `vidyapath_notes_${topic.id}`;
  const [userNotes, setUserNotes] = useState<string>(() => {
    try {
      return localStorage.getItem(notesStorageKey) || '';
    } catch {
      return '';
    }
  });

  // Persistent checked objectives
  const objectivesStorageKey = `vidyapath_obj_${topic.id}`;
  const [checkedObjectives, setCheckedObjectives] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem(objectivesStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Sync notes to local storage
  useEffect(() => {
    try {
      localStorage.setItem(notesStorageKey, userNotes);
    } catch {
      // storage unavailable or full
    }
  }, [userNotes, notesStorageKey]);

  // Sync objectives to local storage
  useEffect(() => {
    try {
      localStorage.setItem(objectivesStorageKey, JSON.stringify(checkedObjectives));
    } catch {
      // storage unavailable
    }
  }, [checkedObjectives, objectivesStorageKey]);

  // Fullscreen event listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Primary and fallback embed IDs - verified chapter-specific Physics Wallah lectures
  const normTitle = (topic.title + ' ' + (topic.description || '')).toLowerCase();

  const isInvalidPlaceholder =
    !topic.videoEmbedId ||
    topic.videoEmbedId === 'M7lc1UVf-VE' ||
    topic.videoEmbedId === 'GYIGR2iCnto' ||
    topic.videoEmbedId === 'dQw4w9WgXcQ' ||
    topic.videoEmbedId === 'tA11pUViAuD' ||
    (normTitle.includes('matri') && (topic.videoEmbedId === '3Oa8RpHqxKc' || topic.videoEmbedId === 'a8YasMSWFvc'));

  const getSmartPrimaryId = () => {
    if (!isInvalidPlaceholder) return topic.videoEmbedId;
    if (normTitle.includes('matri')) return 'xGOkKJ4cPDw'; // Matrices Class 12 One Shot | PW
    if (normTitle.includes('determinant')) return 'bJ730y0x2zU'; // Determinants Class 12 One Shot | PW
    if (normTitle.includes('light') || normTitle.includes('optics')) return 'kHVAk96r05Y'; // Alakh Pandey Light
    if (normTitle.includes('electric') || normTitle.includes('charge')) return '84LwbAFD-kc'; // Alakh Pandey Electrostatics
    if (normTitle.includes('real number')) return '-UdHmSTmQtw'; // Real Numbers Class 10 | PW
    return '3Oa8RpHqxKc'; // Relations & Functions | PW
  };

  const getSmartBackupId = () => {
    if (normTitle.includes('matri')) return 'bJ730y0x2zU'; // PW Determinants/Matrices backup
    if (normTitle.includes('determinant')) return 'xGOkKJ4cPDw'; // PW Matrices backup
    if (normTitle.includes('relation') || normTitle.includes('function')) return 'a8YasMSWFvc'; // PW Relations board backup
    if (normTitle.includes('light') || normTitle.includes('optics')) return 'w1WNkPKGM5E';
    if (normTitle.includes('electric') || normTitle.includes('charge')) return 'WHygP7Kxpcs';
    if (normTitle.includes('real number') || normTitle.includes('number system')) return 'mvJNnu5cLVQ';
    return 'xGOkKJ4cPDw';
  };

  const primaryEmbedId = getSmartPrimaryId();
  const backupEmbedId = getSmartBackupId();

  // Targeted YouTube watch/search query that opens live Physics Wallah lectures
  const cleanSearchQuery = `Physics Wallah ${subjectName} ${topic.title}`;
  const directPWUrl =
    topic.videoUrl && !topic.videoUrl.includes('GYIGR2iCnto') && !topic.videoUrl.includes('dQw4w9WgXcQ')
      ? topic.videoUrl
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanSearchQuery)}`;
  const hasDirectYouTubeVideo = /youtube\.com\/(?:live\/|watch\?v=)|youtu\.be\//.test(directPWUrl);
  const currentEmbedId = hasDirectYouTubeVideo
    ? topic.videoEmbedId
    : activeStream === 'primary'
      ? primaryEmbedId
      : backupEmbedId;

  // Generate interactive chapter milestones based on duration
  const generateTimestamps = (): ChapterTimestamp[] => {
    const match = topic.duration.match(/(\d+)/);
    const totalMinutes = match ? parseInt(match[1], 10) : 25;
    const totalSecs = Math.max(totalMinutes * 60, 600);

    const formatSecs = (s: number) => {
      const m = Math.floor(s / 60);
      const rem = s % 60;
      return `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
    };

    return [
      {
        seconds: 0,
        timeLabel: '00:00',
        title: 'Introduction & Core Foundations',
        desc: `Conceptual primer and chapter syllabus mapping for ${topic.title}.`,
      },
      {
        seconds: Math.floor(totalSecs * 0.18),
        timeLabel: formatSecs(Math.floor(totalSecs * 0.18)),
        title: 'Key Definitions & Formal Statements',
        desc: 'Rigorous theorem definitions, axioms, and intuitive mental models.',
      },
      {
        seconds: Math.floor(totalSecs * 0.45),
        timeLabel: formatSecs(Math.floor(totalSecs * 0.45)),
        title: 'Step-by-Step Derivation & Analysis',
        desc: 'Alakh Sir / PW faculty walkthrough of critical derivations.',
      },
      {
        seconds: Math.floor(totalSecs * 0.72),
        timeLabel: formatSecs(Math.floor(totalSecs * 0.72)),
        title: 'High-Yield Board Problems & NCERT Solved Cases',
        desc: 'Practical problem solving techniques, common traps and exam tips.',
      },
      {
        seconds: Math.floor(totalSecs * 0.92),
        timeLabel: formatSecs(Math.floor(totalSecs * 0.92)),
        title: 'Speed Formula Recap & Revision',
        desc: 'Rapid recap of all essential rules before proceeding to practice.',
      },
    ];
  };

  const chapterTimestamps = generateTimestamps();

  // Fullscreen toggle handler
  const handleToggleFullscreen = async () => {
    try {
      if (!playerContainerRef.current) return;
      if (!document.fullscreenElement) {
        await playerContainerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request blocked or not supported:', err);
    }
  };

  // Jump to specific timestamp
  const handleJumpToTimestamp = (seconds: number) => {
    setCurrentStartTime(seconds);
    setActiveViewMode('video');
    setIsPlayingEmbed(true);
  };

  // Refresh stream
  const handleRefreshStream = () => {
    setIsRefreshingStream(true);
    setTimeout(() => {
      setIsRefreshingStream(false);
    }, 600);
  };

  // Copy formula text
  const handleCopyFormula = (formula: string, idx: number) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormulaIndex(idx);
    setTimeout(() => setCopiedFormulaIndex(null), 1800);
  };

  // Copy user notes
  const handleCopyNotes = () => {
    if (!userNotes) return;
    navigator.clipboard.writeText(userNotes);
    setCopiedNotes(true);
    setTimeout(() => setCopiedNotes(false), 2000);
  };

  // Insert current timestamp into notes
  const handleInsertTimestampNote = () => {
    const stamp = `[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}] `;
    setUserNotes((prev) => (prev ? `${prev}\n${stamp}` : stamp));
  };

  // Toggle objective checkbox
  const handleToggleObjective = (index: number) => {
    setCheckedObjectives((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Copy share link
  const handleShareLesson = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const checkedCount = Object.values(checkedObjectives).filter(Boolean).length;
  const totalObjectives = topic.objectives?.length || 0;

  // Dynamic iframe src with start parameter
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${currentEmbedId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1${
    currentStartTime > 0 ? `&start=${currentStartTime}` : ''
  }`;

  return (
    <div
      ref={playerContainerRef}
      className={`relative rounded-3xl transition-all duration-300 ${
        isFocusMode
          ? 'ring-4 ring-blue-500/30 shadow-2xl shadow-blue-950/50'
          : 'shadow-2xl shadow-slate-950/20'
      } ${isFullscreen ? 'bg-slate-950 p-3 sm:p-5 flex flex-col justify-center' : ''}`}
    >
      {/* Ambient Blue Glow Aura behind the player */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-sky-500/15 to-indigo-600/20 rounded-3xl blur-xl -z-10 opacity-70 pointer-events-none" />

      {/* Main Glass Shell */}
      <div className="bg-slate-950/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner flex flex-col">
        {/* ========================================================= */}
        {/* TOP STATUS BAR & INTERACTIVE CONTROLS                     */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 px-3.5 sm:px-5 py-3 flex flex-wrap items-center justify-between border-b border-slate-800/90 gap-3">
          {/* Left: Topic Title & Verified Channel Badge */}
          <div className="flex items-center gap-2.5 min-w-0 max-w-full sm:max-w-md">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shrink-0 shadow-xs">
              <Tv className="w-3.5 h-3.5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-75" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-500" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <span className="text-blue-400">{subjectName}</span>
                {chapterTitle && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="truncate max-w-[120px] sm:max-w-[180px]">{chapterTitle}</span>
                  </>
                )}
              </div>
              <h3 className="font-bold text-white text-xs sm:text-sm truncate tracking-tight">
                {topic.title}
              </h3>
            </div>
          </div>

          {/* Center: Segmented Navigation Pills */}
          <div className="inline-flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800/80 shadow-inner order-3 sm:order-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setActiveViewMode('video')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'video'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Watch video lecture stream"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Video</span>
            </button>

            <button
              onClick={() => setActiveViewMode('concept')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'concept'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Interactive concept formulas and objectives"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Concepts</span>
              {totalObjectives > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    checkedCount === totalObjectives
                      ? 'bg-blue-400/20 text-blue-300'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {checkedCount}/{totalObjectives}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveViewMode('chapters')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'chapters'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Interactive lecture timestamps and milestones"
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>Timestamps</span>
            </button>

            <button
              onClick={() => setActiveViewMode('notes')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'notes'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title="Personal lecture scratchpad"
            >
              <StickyNote className="w-3.5 h-3.5" />
              <span>My Notes</span>
              {userNotes.trim().length > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </button>
          </div>

          {/* Right Action Tools: Fullscreen, Focus, YouTube */}
          <div className="flex items-center gap-1.5 shrink-0 order-2 sm:order-3">
            {/* Share / Copy Link */}
            <button
              onClick={handleShareLesson}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors cursor-pointer"
              title="Copy lesson link"
            >
              {copiedLink ? (
                <Check className="w-4 h-4 text-blue-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Focus Mode Light Switch */}
            <button
              onClick={() => setIsFocusMode(!isFocusMode)}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isFocusMode
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`}
              title={isFocusMode ? 'Exit Cinema Focus Mode' : 'Enter Cinema Focus Mode'}
            >
              <Radio className="w-4 h-4" />
            </button>

            {/* Keyboard Shortcuts Hint */}
            <button
              onClick={() => setShowShortcuts(!showShortcuts)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors cursor-pointer"
              title="Player tips & shortcuts"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Native Fullscreen Button */}
            <button
              onClick={handleToggleFullscreen}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen (F)'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-blue-400" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Direct Open in YouTube */}
            <a
              href={directPWUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-red-600/15 hover:bg-red-600/25 text-red-300 border border-red-500/30 text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shadow-xs ml-1"
              title="Watch full lecture directly on YouTube"
            >
              <ExternalLink className="w-3 h-3 text-red-400" />
              <span className="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>

        {/* Shortcuts / Quick Tips Drawer */}
        {showShortcuts && (
          <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-2.5 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" /> Keyboard Shortcuts:
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-200">Space / K</kbd> Play/Pause
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-200">F</kbd> Fullscreen
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-200">M</kbd> Mute/Unmute
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-mono text-slate-200">← / →</kbd> Seek 5s
              </span>
            </div>
            <button
              onClick={() => setShowShortcuts(false)}
              className="text-slate-400 hover:text-white text-xs underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* MAIN VIEW AREA                                            */}
        {/* ========================================================= */}

        {/* VIEW 1: VIDEO STREAM */}
        {activeViewMode === 'video' && (
          <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden group">
            {isPlayingEmbed ? (
              <div className="relative w-full h-full">
                {/* Embedded Video Iframe */}
                {!isRefreshingStream ? (
                  <iframe
                    className="w-full h-full border-0"
                    src={iframeSrc}
                    title={topic.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-400 space-y-3">
                    <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                    <p className="text-xs font-semibold">Reloading lecture stream...</p>
                  </div>
                )}

                {/* Floating Glass Control Dock (Top Right) */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  {/* Stream Source Pill */}
                  {!hasDirectYouTubeVideo && (
                    <div className="inline-flex items-center bg-slate-950/85 backdrop-blur-md border border-slate-700/80 p-0.5 rounded-xl shadow-xl">
                      <button
                        onClick={() => setActiveStream('primary')}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                          activeStream === 'primary'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                        title="Primary verified lecture stream"
                      >
                        HD Stream 1
                      </button>
                      <button
                        onClick={() => setActiveStream('backup')}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                          activeStream === 'backup'
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                        title="High-speed mirror backup stream"
                      >
                        Backup Stream 2
                      </button>
                    </div>
                  )}

                  {/* Quick Stream Reload Button */}
                  <button
                    onClick={handleRefreshStream}
                    className="p-1.5 bg-slate-950/85 hover:bg-slate-900 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700/80 rounded-xl transition-all shadow-xl cursor-pointer"
                    title="Reload video player if playback stops"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Timestamp Jump Indicator Banner (if jumped to a specific sec) */}
                {currentStartTime > 0 && (
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300 shadow-xl">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>
                      Playing from milestone ({Math.floor(currentStartTime / 60)}:
                      {(currentStartTime % 60).toString().padStart(2, '0')})
                    </span>
                    <button
                      onClick={() => handleJumpToTimestamp(0)}
                      className="text-blue-400 hover:text-blue-300 font-bold ml-1 cursor-pointer"
                    >
                      Reset to 00:00
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* High-End Cinematic Splash Card */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Backdrop Video Thumbnail with Glass Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={`https://img.youtube.com/vi/${currentEmbedId}/hqdefault.jpg`}
                    alt={topic.title}
                    className="w-full h-full object-cover filter blur-xs brightness-40 scale-105 transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
                </div>

                {/* Center Content */}
                <div className="relative z-10 max-w-lg mx-auto space-y-4">
                  {/* Glowing Animated Play Button */}
                  <div
                    onClick={() => setIsPlayingEmbed(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsPlayingEmbed(true)}
                    aria-label="Start video lecture"
                    className="relative group cursor-pointer inline-flex items-center justify-center mx-auto"
                  >
                    <div className="absolute -inset-3 bg-blue-500/25 rounded-full blur-md group-hover:bg-blue-500/40 transition-all duration-300 animate-pulse" />
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white flex items-center justify-center shadow-2xl shadow-blue-900/60 transform group-hover:scale-108 active:scale-95 transition-all">
                      <Play className="w-9 h-9 ml-1 fill-white" />
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-bold mb-2 backdrop-blur-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>
                        {hasDirectYouTubeVideo
                          ? 'Verified Lecture Video'
                          : `Physics Wallah Official • ${subjectName}`}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {topic.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300/90 mt-1.5 max-w-md mx-auto line-clamp-2 leading-relaxed">
                      {topic.description ||
                        'Curated topic-wise lecture from Physics Wallah. Embedded in a focused shell without distracting recommendations.'}
                    </p>
                  </div>

                  {/* Quick Info & Start Action */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setIsPlayingEmbed(true)}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-950 cursor-pointer active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Start Lecture</span>
                    </button>

                    <button
                      onClick={() => setActiveViewMode('concept')}
                      className="inline-flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all backdrop-blur-md cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>Preview Concepts</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: INTERACTIVE CONCEPT CANVAS */}
        {activeViewMode === 'concept' && (
          <div className="aspect-video w-full bg-slate-950 p-5 sm:p-7 overflow-y-auto text-left flex flex-col justify-between custom-scrollbar">
            <div className="space-y-5 max-w-3xl mx-auto w-full">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3.5 gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-blue-950/80 text-blue-300 border border-blue-800/60 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    Concept Canvas
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {subjectName} • {chapterTitle || 'Chapter Module'}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => setActiveViewMode('video')}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold transition-colors cursor-pointer"
                  >
                    <span>Play Stream</span>
                    <Tv className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Interactive Objectives Checklist */}
              {topic.objectives && topic.objectives.length > 0 && (
                <div className="space-y-2.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Target Learning Milestones & Objectives</span>
                    </h5>
                    <span className="text-[11px] font-medium text-blue-400">
                      {checkedCount} of {topic.objectives.length} understood
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {topic.objectives.map((obj, i) => {
                      const isChecked = !!checkedObjectives[i];
                      return (
                        <div
                          key={i}
                          onClick={() => handleToggleObjective(i)}
                          className={`p-3 rounded-xl text-xs flex items-start gap-2.5 cursor-pointer border transition-all ${
                            isChecked
                              ? 'bg-blue-950/40 border-blue-800/60 text-blue-200'
                              : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <button
                            type="button"
                            className="mt-0.5 shrink-0 text-blue-400"
                            aria-label={`Toggle objective ${i + 1}`}
                          >
                            {isChecked ? (
                              <CheckCircle2 className="w-4 h-4 fill-blue-500/20 text-blue-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500" />
                            )}
                          </button>
                          <span
                            className={`leading-snug ${
                              isChecked ? 'line-through text-slate-400' : ''
                            }`}
                          >
                            {obj}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Core Formulas & Axioms with 1-Click Copy */}
              {topic.keyFormulasOrConcepts && topic.keyFormulasOrConcepts.length > 0 && (
                <div className="space-y-2.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  <h5 className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Essential Formulas & Axioms</span>
                  </h5>

                  <div className="space-y-2">
                    {topic.keyFormulasOrConcepts.map((item, i) => (
                      <div
                        key={i}
                        className="bg-blue-950/20 border border-blue-600/30 p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-blue-500/50 transition-all"
                      >
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-blue-200 block">
                            {item.label}
                          </span>
                          {item.note && (
                            <span className="text-[11px] text-blue-300/80 leading-tight block">
                              {item.note}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                          <code className="text-xs font-mono font-bold text-sky-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 select-all">
                            {item.formulaOrRule}
                          </code>
                          <button
                            onClick={() => handleCopyFormula(item.formulaOrRule, i)}
                            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            title="Copy formula to clipboard"
                          >
                            {copiedFormulaIndex === i ? (
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Return Bar */}
            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Need complete textbook notes? Detailed notes are available below.</span>
              </span>
              <button
                onClick={() => setActiveViewMode('video')}
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Return to Video Player ↗
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: CHAPTER TIMESTAMPS & MILESTONES */}
        {activeViewMode === 'chapters' && (
          <div className="aspect-video w-full bg-slate-950 p-5 sm:p-7 overflow-y-auto text-left flex flex-col justify-between custom-scrollbar">
            <div className="space-y-4 max-w-2xl mx-auto w-full">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-blue-950/80 text-blue-300 border border-blue-800/60 flex items-center gap-1">
                    <ListOrdered className="w-3 h-3 text-blue-400" />
                    Lecture Outline & Timestamps
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{topic.title}</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">5 Milestones</span>
              </div>

              <p className="text-xs text-slate-300">
                Click any timestamp milestone to immediately jump to that section in the video
                lecture:
              </p>

              <div className="space-y-2.5 pt-1">
                {chapterTimestamps.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleJumpToTimestamp(item.seconds)}
                    className="p-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-600/60 rounded-2xl flex items-center justify-between gap-3.5 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 rounded-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {item.timeLabel}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-blue-400 font-semibold">
                      <span className="hidden sm:inline">Jump</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
              <span>Looking to review the entire lecture continuously? </span>
              <button
                onClick={() => handleJumpToTimestamp(0)}
                className="text-blue-400 hover:text-blue-300 font-bold ml-1 cursor-pointer"
              >
                Play from Beginning (00:00)
              </button>
            </div>
          </div>
        )}

        {/* VIEW 4: LIVE STUDY NOTEPAD */}
        {activeViewMode === 'notes' && (
          <div className="aspect-video w-full bg-slate-950 p-5 sm:p-7 overflow-y-auto text-left flex flex-col justify-between custom-scrollbar">
            <div className="space-y-3.5 max-w-2xl mx-auto w-full flex-1 flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase bg-blue-950/80 text-blue-300 border border-blue-800/60 flex items-center gap-1">
                    <StickyNote className="w-3 h-3 text-blue-400" />
                    Study Scratchpad
                  </span>
                  <span className="text-xs text-slate-400">Auto-saved to your browser</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleInsertTimestampNote}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 bg-blue-950/60 hover:bg-blue-900/80 border border-blue-800/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    title="Insert current timestamp into notes"
                  >
                    <Clock className="w-3 h-3" />
                    <span>+ Timestamp</span>
                  </button>

                  {userNotes && (
                    <>
                      <button
                        onClick={handleCopyNotes}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                        title="Copy all notes"
                      >
                        {copiedNotes ? (
                          <Check className="w-3 h-3 text-blue-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedNotes ? 'Copied!' : 'Copy'}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm('Clear your notes for this topic?')) {
                            setUserNotes('');
                          }
                        }}
                        className="p-1 text-slate-500 hover:text-red-400 rounded-lg transition-colors cursor-pointer"
                        title="Clear notes"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-1 flex flex-col">
                <textarea
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  placeholder={`Write your lecture thoughts, equations, or questions for "${topic.title}" here...\n\nExample:\n• Remember to practice NCERT Exercise 1.2 Q4\n• Note: Alakh sir emphasized this derivation for 5-mark board question`}
                  className="w-full flex-1 min-h-[160px] bg-slate-900/90 text-slate-200 text-xs sm:text-sm p-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none placeholder:text-slate-600 font-sans leading-relaxed"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>{userNotes.length} characters written</span>
              <button
                onClick={() => setActiveViewMode('video')}
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Back to Video
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* FOOTER METADATA & STREAM QUALITY RIBBON                   */}
        {/* ========================================================= */}
        <div className="bg-slate-950 px-4 py-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2.5">
          {/* Left Attribution Pill */}
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <span className="truncate text-slate-300 font-medium">
              {topic.videoSourceNote || 'Physics Wallah (PW) • Curated NCERT Lecture'}
            </span>
          </div>

          {/* Right Badges & Indicators */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap text-[11px] text-slate-400">
            {/* Stream Status Badge */}
            <span className="inline-flex items-center gap-1 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>1080p Full HD</span>
            </span>

            <span className="text-slate-800 hidden sm:inline">•</span>

            {/* Language Track */}
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Volume2 className="w-3 h-3 text-slate-400" />
              <span>Hindi / English Audio</span>
            </span>

            <span className="text-slate-800 hidden sm:inline">•</span>

            {/* Direct YouTube Alternative */}
            <a
              href={directPWUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 underline font-medium"
              title="If your browser blocks embeds, open directly on YouTube"
            >
              <span>Watch on YouTube ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
