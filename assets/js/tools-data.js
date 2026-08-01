/* ===================================
   FLAKCREATORSTUDIO — TOOLS REGISTRY
   Single source of truth for every creator tool.
   Add a new tool = add one object here.
   status: "live" | "soon"
   url: relative to site root (e.g. "tools/hashtag-generator.html")
=================================== */

const FLAK_TOOLS = [

  // --- Downloaders ---
  { id:"video-downloader", name:"Video Downloader", icon:"🎥", category:"Downloaders",
    description:"Download TikTok videos without watermark.", status:"live", url:"index.html#download" },
  { id:"mp3-downloader", name:"MP3 Downloader", icon:"🎵", category:"Downloaders",
    description:"Convert TikTok videos to MP3 instantly.", status:"live", url:"index.html#download" },

  // --- Growth & SEO ---
  { id:"hashtag-generator", name:"Hashtag Generator", icon:"#️⃣", category:"Growth & SEO",
    description:"Generate trending TikTok hashtags.", status:"live", url:"tools/hashtag-generator.html" },
  { id:"hashtag-trend-analyzer", name:"Hashtag Trend Analyzer", icon:"📊", category:"Growth & SEO",
    description:"See which hashtags are trending right now.", status:"soon", url:"" },
  { id:"seo-keyword-generator", name:"SEO Keyword Generator", icon:"🔍", category:"Growth & SEO",
    description:"Find keywords for better TikTok reach.", status:"soon", url:"" },
  { id:"keyword-research", name:"Keyword Research Tool", icon:"🧭", category:"Growth & SEO",
    description:"Research high-traffic TikTok search terms.", status:"soon", url:"" },
  { id:"trend-finder", name:"Trend Finder", icon:"📈", category:"Growth & SEO",
    description:"Discover trending sounds, effects, and formats.", status:"soon", url:"" },
  { id:"niche-finder", name:"Niche Finder", icon:"🎯", category:"Growth & SEO",
    description:"Find a profitable content niche.", status:"soon", url:"" },

  // --- Content Writing ---
  { id:"caption-generator", name:"Caption Generator", icon:"✍️", category:"Content Writing",
    description:"Create engaging captions in seconds.", status:"soon", url:"" },
  { id:"caption-rewriter", name:"Caption Rewriter", icon:"🔁", category:"Content Writing",
    description:"Rewrite captions for a fresh angle.", status:"soon", url:"" },
  { id:"bio-generator", name:"Bio Generator", icon:"👤", category:"Content Writing",
    description:"Create a professional TikTok bio.", status:"soon", url:"" },
  { id:"bio-optimizer", name:"Bio Optimizer", icon:"✨", category:"Content Writing",
    description:"Optimize your existing bio for conversions.", status:"soon", url:"" },
  { id:"title-generator", name:"Title Generator", icon:"🏷️", category:"Content Writing",
    description:"Generate scroll-stopping video titles.", status:"soon", url:"" },
  { id:"description-generator", name:"Description Generator", icon:"📝", category:"Content Writing",
    description:"Write clear, keyword-rich descriptions.", status:"soon", url:"" },
  { id:"cta-generator", name:"CTA Generator", icon:"📢", category:"Content Writing",
    description:"Generate calls-to-action that convert.", status:"soon", url:"" },
  { id:"script-generator", name:"Script Generator", icon:"🎬", category:"Content Writing",
    description:"Draft a full video script in seconds.", status:"soon", url:"" },
  { id:"comment-generator", name:"Comment Generator", icon:"💬", category:"Content Writing",
    description:"Generate comment starters to boost engagement.", status:"soon", url:"" },
  { id:"ai-reply-generator", name:"AI Reply Generator", icon:"🤖", category:"Content Writing",
    description:"Auto-draft smart replies to comments.", status:"soon", url:"" },

  // --- Branding & Identity ---
  { id:"username-generator", name:"Username Generator", icon:"🆔", category:"Branding",
    description:"Generate unique, available usernames.", status:"soon", url:"" },
  { id:"username-checker", name:"Username Availability Checker", icon:"✅", category:"Branding",
    description:"Check if a TikTok username is available.", status:"soon", url:"" },
  { id:"font-generator", name:"Font Generator", icon:"🔤", category:"Branding",
    description:"Create stylish fonts for your bio and captions.", status:"soon", url:"" },
  { id:"emoji-generator", name:"Emoji Generator", icon:"😊", category:"Branding",
    description:"Find the perfect emoji combinations.", status:"soon", url:"" },

  // --- Ideas & Planning ---
  { id:"video-idea-generator", name:"Video Idea Generator", icon:"💡", category:"Ideas & Planning",
    description:"Get unlimited TikTok content ideas.", status:"soon", url:"" },
  { id:"hook-generator", name:"Hook Generator", icon:"🪝", category:"Ideas & Planning",
    description:"Create hooks that grab attention in 1 second.", status:"soon", url:"" },
  { id:"challenge-generator", name:"Challenge Generator", icon:"🔥", category:"Ideas & Planning",
    description:"Generate a shareable TikTok challenge idea.", status:"soon", url:"" },
  { id:"content-planner", name:"Content Planner", icon:"🗂️", category:"Ideas & Planning",
    description:"Plan your content pipeline week by week.", status:"soon", url:"" },
  { id:"calendar-generator", name:"Calendar Generator", icon:"📅", category:"Ideas & Planning",
    description:"Build a posting calendar automatically.", status:"soon", url:"" },
  { id:"thumbnail-title-generator", name:"Thumbnail Title Generator", icon:"🖼️", category:"Ideas & Planning",
    description:"Generate punchy on-screen thumbnail text.", status:"soon", url:"" },

  // --- Analytics ---
  { id:"engagement-calculator", name:"Engagement Calculator", icon:"📈", category:"Analytics",
    description:"Calculate your TikTok engagement rate.", status:"soon", url:"" },
  { id:"best-time-to-post", name:"Best Time To Post Calculator", icon:"⏰", category:"Analytics",
    description:"Find your best times to post for reach.", status:"soon", url:"" },
  { id:"profile-analyzer", name:"Profile Analyzer", icon:"🔬", category:"Analytics",
    description:"Analyze any TikTok profile's performance.", status:"soon", url:"" },
  { id:"viral-score-checker", name:"Viral Score Checker", icon:"🚀", category:"Analytics",
    description:"Score a video's viral potential before posting.", status:"soon", url:"" },

  // --- AI Assistant ---
  { id:"ai-assistant", name:"AI Assistant", icon:"🧠", category:"AI Assistant",
    description:"Your all-in-one TikTok creator co-pilot.", status:"soon", url:"" },

];
