import React, { useState, useRef } from "react";
import {
  Home, Search, Heart, Calendar, User, Bell, BellRing,
  ChevronLeft, ChevronRight, ChevronDown, Check, MapPin, Clock,
  Pencil, X, Zap, Flame, Sprout, Star, Camera,
  MessageSquare, ThumbsUp, ThumbsDown, Flag, Plus, ArrowRight, Reply,
  Info, HelpCircle, AlertTriangle,
  MoreVertical, ListPlus, Trash2
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import noBgLogo from "@/imports/nobglogo.png";

// ─── Brand tokens (CSS custom-property references — values set on root div) ───
const PLUM         = "var(--ck-plum)";
const CORAL        = "var(--ck-coral)";
const CREAM        = "var(--ck-cream)";
const WHITE        = "var(--ck-white)";   // surface/card background
const MINT         = "var(--ck-mint)";
const PEACH        = "var(--ck-peach)";
const GOLD         = "var(--ck-gold)";
const BORDER       = "var(--ck-border)";
const MUTED        = "var(--ck-muted)";
const FWHITE       = "#FFFFFF";           // always pure white (text/icons on colored bg)
const CARD_OVERLAY = "var(--ck-card-overlay)"; // translucent surface overlay for card buttons
const PLUM_SOFT    = "var(--ck-plum-soft)";    // faint plum tint (arrow button bg)
const PLUM_ARROW   = "var(--ck-plum-arrow)";   // mid-opacity plum (arrow icon color)
const DANGER_BG    = "var(--ck-danger-bg)";    // danger zone background
const LIGHT_CORAL  = "var(--ck-light-coral)";
const LIGHT_PEACH  = "var(--ck-light-peach)";
const LIGHT_GOLD   = "var(--ck-light-gold)";
const LIGHT_MINT   = "var(--ck-light-mint)";

// ─── Light / dark theme variable sets ────────────────────────────────────────
function buildThemeVars(dark: boolean): React.CSSProperties {
  return dark ? {
    "--ck-plum":         "#F2F2F2",
    "--ck-coral":        "#EF8970",
    "--ck-cream":        "#111111",
    "--ck-white":        "#1E1E1E",
    "--ck-mint":         "#6DB895",
    "--ck-peach":        "#F4A85F",
    "--ck-gold":         "#DDBB76",
    "--ck-border":       "#2C2C2E",
    "--ck-muted":        "#9A9AA8",
    "--ck-card-overlay": "rgba(30,30,30,0.92)",
    "--ck-plum-soft":    "rgba(242,242,242,0.07)",
    "--ck-plum-arrow":   "rgba(242,242,242,0.45)",
    "--ck-danger-bg":    "rgba(185,28,28,0.22)",
    "--ck-light-coral":  "rgba(232,120,98,0.22)",
    "--ck-light-peach":  "rgba(244,168,95,0.20)",
    "--ck-light-gold":   "rgba(221,187,118,0.20)",
    "--ck-light-mint":   "rgba(109,184,149,0.20)",
  } as React.CSSProperties : {
    "--ck-plum":         "#441931",
    "--ck-coral":        "#E87862",
    "--ck-cream":        "#FAF7F2",
    "--ck-white":        "#FFFFFF",
    "--ck-mint":         "#6DB895",
    "--ck-peach":        "#F4A85F",
    "--ck-gold":         "#DDBB76",
    "--ck-border":       "#E8D5CE",
    "--ck-muted":        "#765A68",
    "--ck-card-overlay": "rgba(255,255,255,0.88)",
    "--ck-plum-soft":    "rgba(68,25,49,0.08)",
    "--ck-plum-arrow":   "rgba(68,25,49,0.55)",
    "--ck-danger-bg":    "#FFE4E4",
    "--ck-light-coral":  "#FBE2DB",
    "--ck-light-peach":  "#FFF0DD",
    "--ck-light-gold":   "#F8EBCF",
    "--ck-light-mint":   "#E1F2E9",
  } as React.CSSProperties;
}

// ─── Dark mode context ────────────────────────────────────────────────────────
const DarkModeCtx = React.createContext<{ isDark:boolean; setIsDark:(v:boolean)=>void }>({
  isDark: false, setIsDark: () => {},
});
const useDark = () => React.useContext(DarkModeCtx);

// ─── Data ────────────────────────────────────────────────────────────────────
interface CCA {
  id: number; name: string; category: string;
  commitment: "Explore" | "Commit" | "Immerse";
  img: string; bgColor: string; members: number;
  deadline: string; deadlineDays: number; rating: number;
  description: string;
}

const CCAS: CCA[] = [
  { id:1, name:"NUS Dance Blast",    category:"Dance",            commitment:"Immerse", img:"https://images.unsplash.com/photo-1547153760-18fc86324498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#F0E8FF", members:127, deadline:"Aug 31", deadlineDays:5,  rating:4.8, description:"High-energy contemporary dance team competing nationally." },
  { id:2, name:"Robotics Society",   category:"Technology",      commitment:"Commit",  img:"https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#E8F2FF", members:89,  deadline:"Sep 5",  deadlineDays:10, rating:4.6, description:"Build autonomous robots for international competitions." },
  { id:3, name:"Photography Club",   category:"Photography",     commitment:"Explore", img:"https://images.unsplash.com/photo-1774308190448-538999b627ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#FFF0F5", members:213, deadline:"Sep 10", deadlineDays:15, rating:4.7, description:"Capture campus life and develop your artistic eye." },
  { id:4, name:"NUS Basketball",     category:"Sports",          commitment:"Commit",  img:"https://images.unsplash.com/photo-1763893305634-1086983fcb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#FFF4E8", members:64,  deadline:"Sep 3",  deadlineDays:8,  rating:4.5, description:"Varsity basketball team training three times a week." },
  { id:5, name:"NUS Choir",          category:"Music",           commitment:"Commit",  img:"https://images.unsplash.com/photo-1720186576697-24c1496a07e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#F0E8FF", members:98,  deadline:"Sep 8",  deadlineDays:13, rating:4.9, description:"Award-winning choir with concerts and overseas tours." },
  { id:6, name:"Students for Nature",category:"Community Service",commitment:"Explore", img:"https://images.unsplash.com/photo-1699078109661-0269200668ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#E8FFF2", members:156, deadline:"Sep 12", deadlineDays:17, rating:4.4, description:"Environmental advocacy and sustainability initiatives." },
  { id:7, name:"NUS Hackers",        category:"Technology",      commitment:"Explore", img:"https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#E8F2FF", members:178, deadline:"Sep 6",  deadlineDays:11, rating:4.7, description:"Casual coding community with hackathons and workshops." },
  { id:8, name:"Badminton Club",     category:"Sports",          commitment:"Commit",  img:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", bgColor:"#FFF4E8", members:92,  deadline:"Sep 4",  deadlineDays:9,  rating:4.5, description:"Competitive and casual badminton for all levels." },
];

const EVENTS = [
  { id:1, ccaId:1, ccaName:"NUS Dance Blast",    title:"Audition",    date:"Aug 31", dayLabel:"Sat", time:"7:00 PM", location:"UTown Studio 3"  },
  { id:2, ccaId:4, ccaName:"NUS Basketball",     title:"Open Trial",  date:"Sep 3",  dayLabel:"Tue", time:"5:00 PM", location:"MPSH Sports Hall" },
  { id:3, ccaId:2, ccaName:"Robotics Society",   title:"Info Session",date:"Sep 5",  dayLabel:"Thu", time:"6:30 PM", location:"E4 Level 2"       },
  { id:4, ccaId:5, ccaName:"NUS Choir",          title:"Audition",    date:"Sep 8",  dayLabel:"Sun", time:"2:00 PM", location:"YST Music Room 3" },
];

const INTERESTS = [
  { id:"dance",            label:"Dance",               popular:true  },
  { id:"music",            label:"Music",               popular:true  },
  { id:"sports",           label:"Sports",              popular:true  },
  { id:"technology",       label:"Technology",          popular:true  },
  { id:"community",        label:"Community Service",   popular:true  },
  { id:"theatre",          label:"Theatre & Drama",     popular:true  },
  { id:"photography",      label:"Photography",         popular:true  },
  { id:"debate",           label:"Debate",              popular:true  },
  { id:"choir",            label:"Choir & A Cappella",  popular:false },
  { id:"esports",          label:"Esports",             popular:false },
  { id:"environment",      label:"Environmental",       popular:false },
  { id:"climbing",         label:"Climbing",            popular:false },
  { id:"frisbee",          label:"Frisbee",             popular:false },
  { id:"yoga",             label:"Yoga & Wellness",     popular:false },
  { id:"filmmaking",       label:"Filmmaking",          popular:false },
  { id:"modelun",          label:"Model UN",            popular:false },
  { id:"investment",       label:"Investment",          popular:false },
  { id:"entrepreneurship", label:"Entrepreneurship",    popular:false },
  { id:"boardgames",       label:"Board Games",         popular:false },
  { id:"language",         label:"Language Exchange",   popular:false },
  { id:"visualarts",       label:"Visual Arts",         popular:false },
  { id:"cultural",         label:"Cultural Societies",  popular:false },
  { id:"cooking",          label:"Cooking",             popular:false },
  { id:"firstaid",         label:"First Aid & Health",  popular:false },
];

const CATEGORIES = [
  { id:"sports",    label:"Sports",            img:"https://images.unsplash.com/photo-1534371517819-3cb56b0e4c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
  { id:"dance",     label:"Dance",             img:"https://images.unsplash.com/photo-1550026593-cb89847b168d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
  { id:"tech",      label:"Technology",        img:"https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
  { id:"photo",     label:"Photography",       img:"https://images.unsplash.com/photo-1774308190448-538999b627ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
  { id:"community", label:"Community Service", img:"https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
  { id:"academic",  label:"Academic",          img:"https://images.unsplash.com/photo-1531259736756-6caccf485f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80" },
];

const WEEK_DAYS  = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const WEEK_DATES = [24,25,26,27,28,29,30];

// ─── CCA Detail mock data ─────────────────────────────────────────────────────
const REVIEW_DATA = [
  { id:1, user:"bestdancer_123",    year:"AY25/26 Member",        isExco:false, upvotes:18, replies:3,  text:"Absolutely loved my time here! The team is incredibly welcoming and the choreography is top-notch. Be prepared for intense rehearsals but it is so worth it." },
  { id:2, user:"worstdancer_123",   year:"AY25/26 Member",        isExco:false, upvotes:6,  replies:0,  text:"Great community but be prepared for a big time commitment. Rehearsals are three times a week and attendance is tracked." },
  { id:3, user:"ilovedance_001",    year:"AY24/25 Member",        isExco:false, upvotes:-2, replies:1,  text:"Mixed feelings. The performances are amazing but internal politics can be tough. Worth trying out though." },
  { id:4, user:"Peter Tan Yong Hern", year:"AY24/25 Finance Head", isExco:true, upvotes:32, replies:2, text:"As an ex-finance head I can say the CCA is well-organised. Membership fees are transparent and well-managed." },
];

const REVIEW_THREADS: Record<number, { id:number; user:string; year:string; isExco:boolean; upvotes:number; text:string }[]> = {
  1: [
    { id:101, user:"worstdancer_123",    year:"AY25/26 Member",        isExco:false, upvotes:4,  text:"Agreed! The seniors were super welcoming during my first week." },
    { id:102, user:"ilovedance_001",     year:"AY24/25 Member",        isExco:false, upvotes:2,  text:"Though I'd say the first semester can feel overwhelming — stick with it!" },
    { id:103, user:"Peter Tan Yong Hern",year:"AY24/25 Finance Head",  isExco:true,  upvotes:7,  text:"From an exco perspective, we really do try our best to make everyone feel included." },
  ],
  3: [
    { id:201, user:"bestdancer_123",     year:"AY25/26 Member",        isExco:false, upvotes:3,  text:"Can you share more about the internal politics? Was it between members or exco?" },
  ],
  4: [
    { id:301, user:"bestdancer_123",     year:"AY25/26 Member",        isExco:false, upvotes:5,  text:"This is really reassuring to hear. Thanks for the transparency!" },
    { id:302, user:"worstdancer_123",    year:"AY25/26 Member",        isExco:false, upvotes:1,  text:"Yeah the fee structure is very clear, appreciated that during my time." },
  ],
};

const CCA_DETAIL_EVENTS: Record<number, { name:string; date:string; time:string }[]> = {
  1: [
    { name:"Member Auditions",      date:"18 Aug 2026", time:"2:30pm – 8:30pm"  },
    { name:"Open Class, Hiphop 1.5",date:"27 Aug 2026", time:"6:30pm – 8:00pm"  },
    { name:"Recruitment Deadline",  date:"31 Aug 2026", time:"11:59pm"           },
    { name:"Dance Production",      date:"12 Oct 2026", time:"6:30pm – 10:00pm" },
  ],
  2: [
    { name:"Info Session",         date:"5 Sep 2026",  time:"6:00pm – 7:30pm" },
    { name:"Recruitment Deadline", date:"5 Sep 2026",  time:"11:59pm"          },
    { name:"Build Workshop",       date:"12 Sep 2026", time:"2:00pm – 5:00pm" },
  ],
  3: [
    { name:"Open Day",             date:"10 Sep 2026", time:"10:00am – 1:00pm" },
    { name:"Recruitment Deadline", date:"10 Sep 2026", time:"11:59pm"           },
    { name:"Studio Workshop",      date:"17 Sep 2026", time:"2:00pm – 5:00pm"  },
  ],
  4: [
    { name:"Open Trial",           date:"3 Sep 2026",  time:"5:00pm – 7:00pm" },
    { name:"Recruitment Deadline", date:"3 Sep 2026",  time:"11:59pm"          },
    { name:"Training Session",     date:"10 Sep 2026", time:"5:00pm – 7:00pm" },
  ],
  5: [
    { name:"Choir Audition",       date:"8 Sep 2026",  time:"2:00pm – 6:00pm" },
    { name:"Recruitment Deadline", date:"8 Sep 2026",  time:"11:59pm"          },
    { name:"Welcome Concert",      date:"20 Sep 2026", time:"7:00pm – 9:30pm" },
  ],
  6: [
    { name:"Intro Talk",           date:"12 Sep 2026", time:"3:00pm – 4:30pm" },
    { name:"Recruitment Deadline", date:"12 Sep 2026", time:"11:59pm"          },
    { name:"Beach Cleanup",        date:"19 Sep 2026", time:"8:00am – 12:00pm"},
  ],
  7: [
    { name:"Hackathon Kick-off",   date:"6 Sep 2026",  time:"10:00am – 12:00pm"},
    { name:"Recruitment Deadline", date:"6 Sep 2026",  time:"11:59pm"           },
    { name:"Workshop: Web Dev",    date:"13 Sep 2026", time:"2:00pm – 5:00pm"  },
  ],
  8: [
    { name:"Open Trial",           date:"4 Sep 2026",  time:"5:00pm – 7:00pm" },
    { name:"Recruitment Deadline", date:"4 Sep 2026",  time:"11:59pm"          },
    { name:"Friendly Match",       date:"11 Sep 2026", time:"5:00pm – 7:00pm" },
  ],
};

const CCA_EXCO: Record<number, { name:string; role:string }[]> = {
  1: [
    { name:"Maya Chen",          role:"President"      },
    { name:"Sarah Lim",          role:"Vice President" },
    { name:"Peter Tan Yong Hern",role:"Finance Head"   },
  ],
  2: [
    { name:"James Koh",    role:"President"      },
    { name:"Priya Nair",   role:"Technical Lead" },
    { name:"Wei Xin Tan",  role:"Secretary"      },
  ],
  3: [
    { name:"Lena Tan",     role:"President"      },
    { name:"Marcus Yeo",   role:"Vice President" },
    { name:"Hui Ling Ng",  role:"Events Head"    },
  ],
  4: [
    { name:"Darren Ong",   role:"Captain"        },
    { name:"Janice Ho",    role:"Vice Captain"   },
    { name:"Samuel Lee",   role:"Secretary"      },
  ],
  5: [
    { name:"Aiyana Patel", role:"Conductor"      },
    { name:"Jonathan Teo", role:"Section Lead"   },
    { name:"Bernice Goh",  role:"Publicity Head" },
  ],
  6: [
    { name:"Ravi Kumar",   role:"President"      },
    { name:"Zoe Lim",      role:"Outreach Lead"  },
    { name:"Fatin Haris",  role:"Finance Head"   },
  ],
  7: [
    { name:"Brandon Chua", role:"President"      },
    { name:"Sheena Wee",   role:"Technical Lead" },
    { name:"Alex Phua",    role:"Events Head"    },
  ],
  8: [
    { name:"Calvin Ng",    role:"President"      },
    { name:"Lydia Koh",    role:"Vice President" },
    { name:"Ryan Lim",     role:"Secretary"      },
  ],
};

// ─── Notifications data ───────────────────────────────────────────────────────
const NOTIFICATION_DATA: { id:number; type:string; ccaName:string; body:string; time:string; read:boolean }[] = [];

// ─── Types ───────────────────────────────────────────────────────────────────
type Screen =
  | "welcome"
  | "signin"
  | "sso"
  | "onboard-nus"
  | "onboard-interests"
  | "onboard-commitment"
  | "onboard-profile"
  | "main";

type Tab = "home" | "discover" | "wishlist" | "events" | "profile";

// ─── Utility ─────────────────────────────────────────────────────────────────
const hideScroll: React.CSSProperties = { msOverflowStyle:"none", scrollbarWidth:"none" };

function AvatarCircle({ av, size, textSize, radius="rounded-full" }: {
  av:string; size:string; textSize:string; radius?:string;
}) {
  const isImg = av.startsWith("data:") || av.startsWith("blob:");
  if (isImg) return <img src={av} className={`${size} ${radius} object-cover flex-shrink-0`} alt="avatar" />;
  return (
    <div className={`${size} ${radius} flex items-center justify-center ${textSize} flex-shrink-0`} style={{ backgroundColor:CORAL }}>
      {av}
    </div>
  );
}
const NUS_EMAIL = "e0123456@u.nus.edu";

// ─── Micro-components ────────────────────────────────────────────────────────
function CommitBadge({ level }: { level: string }) {
  const { isDark } = useDark();
  const map: Record<string,{ bg:string; text:string; darkText:string }> = {
    Explore: { bg:LIGHT_MINT,  text:MINT,  darkText:"#6DB895" },
    Commit:  { bg:LIGHT_GOLD,  text:GOLD,  darkText:"#DDBB76" },
    Immerse: { bg:LIGHT_CORAL, text:CORAL, darkText:"#E87862" },
  };
  const c = map[level] ?? map.Explore;
  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor:c.bg, color: isDark ? c.darkText : c.text }}>
      {level}
    </span>
  );
}

function UrgencyPill({ days }: { days: number }) {
  const { isDark } = useDark();
  if (days > 12) return null;
  const hot = days <= 5;
  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{
      backgroundColor: hot ? LIGHT_CORAL : LIGHT_PEACH,
      color: hot ? (isDark ? "#EF8970" : CORAL) : (isDark ? "#F4A85F" : PEACH),
    }}>
      {days}d left
    </span>
  );
}

// ─── CCA Cards ───────────────────────────────────────────────────────────────
function CcaCardSmall({ cca, saved, onSave, onClick }: { cca:CCA; saved:boolean; onSave:()=>void; onClick?:()=>void }) {
  return (
    <div className="flex-shrink-0 w-40 rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-[0.97] transition-transform" style={{ backgroundColor:CREAM }} onClick={onClick}>
      <div className="h-24 relative overflow-hidden" style={{ backgroundColor:cca.bgColor }}>
        <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
        <button
          onClick={e => { e.stopPropagation(); onSave(); }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: saved ? CORAL : "rgba(0,0,0,0.42)" }}
        >
          <Heart size={13} fill={saved ? FWHITE : "none"} color={FWHITE} strokeWidth={2} />
        </button>
      </div>
      <div className="p-2.5">
        <p className="text-xs font-bold leading-snug mb-0.5 line-clamp-2" style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}>{cca.name}</p>
        <p className="text-[10px] mb-1.5" style={{ color:MUTED }}>{cca.category}</p>
        <div className="flex items-center gap-1.5 flex-wrap">
          <CommitBadge level={cca.commitment} />
          
        </div>
      </div>
    </div>
  );
}

function CcaCardGrid({ cca, saved, onSave, onClick }: { cca:CCA; saved:boolean; onSave:()=>void; onClick?:()=>void }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-[0.97] transition-transform" style={{ backgroundColor:CREAM }} onClick={onClick}>
      <div className="h-28 relative overflow-hidden" style={{ backgroundColor:cca.bgColor }}>
        <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
        <button
          onClick={e => { e.stopPropagation(); onSave(); }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: saved ? CORAL : "rgba(0,0,0,0.42)" }}
        >
          <Heart size={15} fill={saved ? FWHITE : "none"} color={FWHITE} strokeWidth={2} />
        </button>
      </div>
      <div className="p-3">
        <p className="text-sm font-bold leading-snug mb-0.5 line-clamp-2" style={{ color:PLUM }}>{cca.name}</p>
        <p className="text-[11px] mb-2 line-clamp-2 leading-snug" style={{ color:MUTED }}>{cca.description}</p>
        <div className="flex items-center gap-1.5 flex-wrap">
          <CommitBadge level={cca.commitment} />
        </div>
      </div>
    </div>
  );
}

// ─── Bottom navigation ───────────────────────────────────────────────────────
function BottomNav({ tab, onChange }: { tab:Tab; onChange:(t:Tab)=>void }) {
  const tabs: { id:Tab; label:string; Icon:typeof Home }[] = [
    { id:"home",     label:"Home",     Icon:Home     },
    { id:"discover", label:"Discover", Icon:Search   },
    { id:"wishlist", label:"Wishlist", Icon:Heart    },
    { id:"events",   label:"Events",   Icon:Calendar },
    { id:"profile",  label:"Profile",  Icon:User     },
  ];
  return (
    <div className="flex-shrink-0 flex items-start pt-3 pb-7 px-2" style={{ backgroundColor:CREAM, borderTop:`1.5px solid ${BORDER}` }}>
      {tabs.map(({ id, label, Icon }) => {
        const active = tab === id;
        return (
          <button key={id} onClick={() => onChange(id)} className="flex-1 flex flex-col items-center gap-1">
            <Icon size={22} fill={active ? CORAL : "none"} color={active ? CORAL : MUTED} strokeWidth={active ? 2.5 : 1.8} />
            <span className="text-[10px] font-bold" style={{ color: active ? CORAL : MUTED }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Progress bar strip ───────────────────────────────────────────────────────
function ProgressStrip({ step, total=3 }: { step:number; total?:number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length:total }, (_,i) => (
        <div key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === step ? 28 : 20, backgroundColor: i === step ? PLUM : BORDER }} />
      ))}
    </div>
  );
}

// ─── Back button ─────────────────────────────────────────────────────────────
function BackBtn({ onPress }: { onPress:()=>void }) {
  return (
    <button onClick={onPress} className="w-10 h-10 flex items-center justify-center rounded-xl" style={{ backgroundColor:CREAM, color:PLUM }}>
      <ChevronLeft size={20} strokeWidth={2.5} />
    </button>
  );
}

// ─── Status bar ──────────────────────────────────────────────────────────────
function StatusBar({ light=false }) {
  const c = light ? "rgba(255,255,255,0.8)" : PLUM;
  return (
    <div className="flex items-center justify-between px-6 h-12">
      <span className="text-xs font-bold" style={{ color:c }}>9:41</span>
      <div className="flex items-center gap-1">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <rect x="0.5" y="0.5" width="14" height="9" rx="2.5" stroke={c} strokeOpacity="0.4" />
          <rect x="1.5" y="1.5" width="10" height="7" rx="1.5" fill={c} />
          <rect x="15.5" y="3" width="1" height="4" rx="0.5" fill={c} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Welcome (3 swipeable slides)
// ══════════════════════════════════════════════════════════════════════════════
function SlideDiscover() {
  return (
    <div className="flex gap-3 px-5">
      {[CCAS[2], CCAS[3], CCAS[0]].map((c, i) => (
        <div key={i} className="flex-1 rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor:CREAM }}>
          <div className="h-24 relative overflow-hidden" style={{ backgroundColor:c.bgColor }}>
            <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover" />
            <button className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor:CARD_OVERLAY }}>
              <Heart size={11} fill={i===0 ? CORAL : "none"} color={i===0 ? CORAL : MUTED} />
            </button>
          </div>
          <div className="p-2.5">
            <p className="text-[10px] font-black leading-snug mb-0.5 line-clamp-2" style={{ color:PLUM }}>{c.name}</p>
            <p className="text-[9px] mb-1.5" style={{ color:MUTED }}>{c.category}</p>
            <CommitBadge level={c.commitment} />
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideReviews() {
  return (
    <div className="px-5 flex flex-col gap-3">
      {REVIEW_DATA.slice(0, 2).map((r, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}` }}>
          <div className="flex items-center gap-2.5 px-3.5 pt-3 pb-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0" style={{ backgroundColor:CORAL, color:WHITE }}>
              {r.user[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black truncate" style={{ color:PLUM }}>{r.user}</p>
              <p className="text-[9px]" style={{ color:MUTED }}>{r.year}</p>
            </div>
            {r.isExco && <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor:CORAL }} />}
          </div>
          <p className="text-[10px] leading-relaxed px-3.5 pb-2.5 line-clamp-3" style={{ color:MUTED }}>{r.text}</p>
          <div className="flex items-center gap-2 px-3.5 pb-2.5 pt-1" style={{ borderTop:`1px solid ${BORDER}` }}>
            <span className="text-[10px] font-black" style={{ color: r.upvotes > 0 ? PLUM : "#B91C1C" }}>{r.upvotes > 0 ? "+" : ""}{r.upvotes}</span>
            <ThumbsUp size={10} color={MUTED} />
            <ThumbsDown size={10} color={MUTED} />
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideEvents() {
  const days = ["M","T","W","T","F","S","S"];
  const dates = [24,25,26,27,28,29,30];
  return (
    <div className="px-5 flex flex-col gap-3">
      <div className="rounded-xl shadow-sm px-3 py-3" style={{ backgroundColor:WHITE }}>
        <p className="text-xs font-bold mb-2" style={{ color:PLUM }}>August 2026</p>
        <div className="flex justify-between">
          {days.map((d,i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-semibold" style={{ color:MUTED }}>{d}</span>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold" style={{
                backgroundColor: i===1 ? CORAL : "transparent",
                color: i===1 ? FWHITE : PLUM,
              }}>{dates[i]}</div>
            </div>
          ))}
        </div>
      </div>
      {EVENTS.slice(0, 2).map((e, i) => (
        <div key={i} className="rounded-xl shadow-sm p-3 flex items-center gap-3" style={{ backgroundColor:CREAM }}>
          <div className="w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0" style={{ backgroundColor:LIGHT_PEACH }}>
            <p className="text-[7px] font-black uppercase" style={{ color:CORAL }}>{e.date.split(" ")[0]}</p>
            <p className="text-sm font-black" style={{ color:PLUM }}>{e.date.split(" ")[1]}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate" style={{ color:PLUM }}>{e.ccaName}</p>
            <p className="text-[10px] truncate" style={{ color:MUTED }}>{e.title} · {e.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const SLIDES = [
  { subtitle:"Explore CCAs that suit you",       Content:SlideDiscover },
  { subtitle:"Immerse yourself in the community", Content:SlideReviews  },
  { subtitle:"Commit to what excites you",        Content:SlideEvents   },
];

function WelcomeScreen({ onGetStarted }: { onGetStarted:()=>void }) {
  const [slide, setSlide] = useState(0);
  const touchStartX = React.useRef(0);
  const touchStartY = React.useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) setSlide(s => (s + 1) % SLIDES.length);
      else setSlide(s => Math.max(s - 1, 0));
    }
  };

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />

      {/* Logo */}
      <div className="px-6 pt-3 pb-1 flex items-center gap-3">
        <ImageWithFallback src={noBgLogo} alt="ok!cca" className="w-12 h-12 object-contain" />
        <h1 className="text-3xl font-black tracking-tight leading-none" style={{ color:PLUM }}>ok!cca</h1>
      </div>

      {/* Swipeable center — slides + dots grouped, vertically centered */}
      <div
        className="flex-1 flex flex-col justify-center pb-3"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Carousel wrapper (relative for arrow overlays) */}
        <div className="relative">
          {/* Overflow container clips the sliding track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                width: `${SLIDES.length * 100}%`,
                transform: `translateX(-${slide * 100 / SLIDES.length}%)`,
              }}
            >
              {SLIDES.map(({ subtitle, Content }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                  style={{ width: `${100 / SLIDES.length}%`, minHeight: 270 }}
                >
                  <p className="text-base font-semibold text-center px-6 mb-4 leading-snug w-full" style={{ color:MUTED }}>{subtitle}</p>
                  <div className="w-full"><Content /></div>
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow — hidden on first slide */}
          <button
            onClick={() => setSlide(s => Math.max(s - 1, 0))}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-opacity z-10"
            style={{
              backgroundColor: PLUM_SOFT,
              opacity: slide > 0 ? 1 : 0,
              pointerEvents: slide > 0 ? "auto" : "none",
            }}
          >
            <ChevronLeft size={17} strokeWidth={2.5} style={{ color: PLUM_ARROW }} />
          </button>

          {/* Right arrow — always visible, loops from last to first */}
          <button
            onClick={() => setSlide(s => (s + 1) % SLIDES.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10"
            style={{ backgroundColor: PLUM_SOFT }}
          >
            <ChevronRight size={17} strokeWidth={2.5} style={{ color: PLUM_ARROW }} />
          </button>
        </div>

        {/* Pagination dots — immediately below slides */}
        <div className="flex justify-center gap-2 mt-5">
          {SLIDES.map((_,i) => (
            <button key={i} onClick={() => setSlide(i)} className="h-1.5 rounded-full transition-all" style={{
              width: i===slide ? 28 : 8,
              backgroundColor: i===slide ? PLUM : BORDER,
            }} />
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="px-6 pb-10 pt-2">
        <button
          onClick={onGetStarted}
          className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform"
          style={{ backgroundColor:CORAL, color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Sign In
// ══════════════════════════════════════════════════════════════════════════════
function isNusEmail(email: string) {
  return email.endsWith("@u.nus.edu") || email.endsWith("@nus.edu.sg");
}

function SignInScreen({ onSignIn, onBack }: { onSignIn:(email:string)=>void; onBack:()=>void }) {
  const [val, setVal] = useState("");
  const valid = val.trim().length > 0 && isNusEmail(val.trim());
  const [touched, setTouched] = useState(false);
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      <div className="px-5 pt-1 mb-2"><BackBtn onPress={onBack} /></div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-36 h-36 rounded-3xl flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor:CREAM, border:`2px solid ${BORDER}` }}>
            <ImageWithFallback src={noBgLogo} alt="ok!cca" className="w-32 h-32 object-contain" />
          </div>
          <h1 className="text-3xl font-black tracking-tight"><span style={{ color:PLUM }}>ok!</span><span style={{ color:CORAL }}>cca</span></h1>
        </div>

        {/* Form */}
        <div className="w-full space-y-3">
          <div className="rounded-2xl px-4 py-3.5" style={{ backgroundColor:WHITE, border:`1.5px solid ${touched && !valid ? CORAL : BORDER}` }}>
            <p className="text-[11px] font-bold mb-1" style={{ color:MUTED }}>NUS Email</p>
            <input
              value={val}
              onChange={e => setVal(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="e1234567@u.nus.edu"
              className="w-full bg-transparent text-base outline-none"
              style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
            />
          </div>
          {touched && !valid && val.length > 0 && (
            <p className="text-xs -mt-1" style={{ color:CORAL }}>Please enter a valid NUS email (@u.nus.edu or @nus.edu.sg)</p>
          )}
          <button
            onClick={() => { if (valid) onSignIn(val.trim()); else setTouched(true); }}
            className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform"
            style={{ backgroundColor: valid ? CORAL : BORDER, color: valid ? PLUM : MUTED }}
          >
            Sign in with NUS
          </button>
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: NUS SSO
// ══════════════════════════════════════════════════════════════════════════════
function NusSSOPage({ email, onLogin, onBack }: { email:string; onLogin:(pw:string)=>void; onBack:()=>void }) {
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      <div className="px-5 pt-1 mb-2"><BackBtn onPress={onBack} /></div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        {/* NUS SSO header */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor:"#003D7C" }}>
            <span className="text-lg font-black" style={{ color:"#FFFFFF", fontFamily:"'Nunito Sans', sans-serif" }}>NUS</span>
          </div>
          <h1 className="text-xl font-black" style={{ color:PLUM }}>NUS Single Sign-On</h1>
          <p className="text-sm text-center" style={{ color:MUTED }}>Sign in to continue to ok!cca</p>
        </div>

        {/* Form */}
        <div className="w-full space-y-3">
          <div className="rounded-2xl px-4 py-3.5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <p className="text-[11px] font-bold mb-1" style={{ color:MUTED }}>NUS Email</p>
            <p className="text-base" style={{ color:PLUM }}>{email}</p>
          </div>
          <div className="rounded-2xl px-4 py-3.5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <p className="text-[11px] font-bold mb-1" style={{ color:MUTED }}>Password</p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-transparent text-base outline-none"
              style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
              onKeyDown={e => { if (e.key === "Enter" && password) onLogin(password); }}
            />
          </div>
          <button
            onClick={() => { if (password) onLogin(password); }}
            className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform"
            style={{ backgroundColor: password ? CORAL : BORDER, color: password ? PLUM : MUTED }}
          >
            Login
          </button>
        </div>

      </div>

      <div className="h-16" />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Onboard 1 — NUS welcome
// ══════════════════════════════════════════════════════════════════════════════
// These 3 CCAs are pre-filled from NUS SSO — not user-selected
const SSO_MEMBERSHIPS = [
  { ccaId: 1, role: "AY25/26 Member" },
  { ccaId: 5, role: "AY25/26 Member" },
  { ccaId: 2, role: "AY24/25 Finance Head", isExco: true },
];

function OnboardNusScreen({ onNext, onBack }: { onNext:(memberships:number[])=>void; onBack:()=>void }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      <div className="px-5 pt-1 mb-5"><BackBtn onPress={onBack} /></div>

      <div className="flex-1 px-6 overflow-y-auto" style={hideScroll}>
        <p className="text-3xl font-black mb-0.5" style={{ color:PLUM }}>Hi, Amanda! 👋</p>
        <p className="text-sm mb-6 leading-relaxed" style={{ color:MUTED }}>
          We found your CCA memberships from NUS. These will be used to personalise your experience.
        </p>

        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color:MUTED }}>Current CCA Memberships</p>

        <div className="space-y-2.5 mb-5">
          {SSO_MEMBERSHIPS.map(({ ccaId, role, isExco }) => {
            const cca = CCAS.find(c => c.id === ccaId);
            if (!cca) return null;
            return (
              <div
                key={ccaId}
                className="flex items-center gap-3 rounded-2xl p-3.5"
                style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 relative" style={{ backgroundColor:cca.bgColor }}>
                  <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black truncate" style={{ color:PLUM }}>{cca.name}</p>
                  <p className="text-xs mt-0.5" style={{ color:MUTED }}>{role}</p>
                </div>
                {isExco && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor:LIGHT_CORAL, color:CORAL }}>Exco</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl p-4 mb-4" style={{ backgroundColor:LIGHT_MINT, border:`1px solid ${BORDER}` }}>
          <p className="text-xs leading-relaxed" style={{ color:PLUM }}>
            These memberships are automatically fetched from your NUS student records.
          </p>
        </div>
      </div>

      <div className="px-6 pb-10 pt-4">
        <button
          onClick={() => onNext(SSO_MEMBERSHIPS.map(m => m.ccaId))}
          className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform"
          style={{ backgroundColor:CORAL, color:PLUM }}
        >
          Looks right, continue
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Onboard 2 — Interests
// ══════════════════════════════════════════════════════════════════════════════
function OnboardInterestsScreen({ onNext, onBack }: { onNext:(selected:Set<string>)=>void; onBack:()=>void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");

  const toggle = (id:string) => setSelected(prev => {
    const n = new Set(prev);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });

  const visible = INTERESTS.filter(i => !query || i.label.toLowerCase().includes(query.toLowerCase()));
  const popular = visible.filter(i => i.popular);
  const more    = visible.filter(i => !i.popular);

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      {/* Header with progress strip top-right */}
      <div className="px-5 pt-1 mb-4 flex items-center justify-between">
        <BackBtn onPress={onBack} />
        <ProgressStrip step={0} />
      </div>

      <div className="flex-1 px-6 overflow-y-auto" style={hideScroll}>
        <h2 className="text-2xl font-black mb-0.5" style={{ color:PLUM }}>What are you into?</h2>
        <p className="text-sm mb-4" style={{ color:MUTED }}>Choose as many as you like.</p>

        {/* Search */}
        <div className="flex items-center gap-3 rounded-2xl px-4 py-3 mb-5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <Search size={15} color={MUTED} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search all interests" className="flex-1 bg-transparent text-sm outline-none" style={{ color:PLUM }} />
          {query && <button onClick={() => setQuery("")}><X size={13} color={MUTED} /></button>}
        </div>

        {popular.length > 0 && (
          <>
            <p className="text-sm font-bold mb-3" style={{ color:PLUM }}>Popular</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {popular.map(i => {
                const on = selected.has(i.id);
                return (
                  <button key={i.id} onClick={() => toggle(i.id)} className="px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95" style={{
                    backgroundColor: on ? CORAL : CREAM,
                    color: on ? WHITE : PLUM,
                    border: `1.5px solid ${on ? CORAL : BORDER}`,
                  }}>
                    {i.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {more.length > 0 && (
          <>
            <p className="text-sm font-bold mb-3" style={{ color:PLUM }}>More</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {more.map(i => {
                const on = selected.has(i.id);
                return (
                  <button key={i.id} onClick={() => toggle(i.id)} className="px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95" style={{
                    backgroundColor: on ? CORAL : CREAM,
                    color: on ? WHITE : PLUM,
                    border: `1.5px solid ${on ? CORAL : BORDER}`,
                  }}>
                    {i.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="px-6 pb-10 pt-3">
        <button
          onClick={() => onNext(selected)}
          disabled={selected.size === 0}
          className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform"
          style={{ backgroundColor: selected.size>0 ? CORAL : BORDER, color: selected.size>0 ? PLUM : MUTED }}
        >
          Continue {selected.size > 0 && `(${selected.size} selected)`}
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Onboard 3 — Commitment
// ══════════════════════════════════════════════════════════════════════════════
function OnboardCommitmentScreen({ onNext, onBack }: { onNext:(commitment:string)=>void; onBack:()=>void }) {
  const [selected, setSelected] = useState("explore");
  const opts = [
    { id:"explore", label:"Explore",  desc:"Try things out, casual commitment",         Icon:Sprout,   iconColor:PLUM,   bg:MINT  },
    { id:"commit",  label:"Commit",   desc:"Regular sessions and activities",            Icon:Zap,      iconColor:PLUM,   bg:GOLD  },
    { id:"immerse", label:"Immerse",  desc:"Deep involvement, competitions, leadership", Icon:Flame,    iconColor:FWHITE, bg:CORAL },
  ];
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      {/* Header with progress strip top-right */}
      <div className="px-5 pt-1 mb-4 flex items-center justify-between">
        <BackBtn onPress={onBack} />
        <ProgressStrip step={1} />
      </div>

      <div className="flex-1 px-6 flex flex-col justify-center">
        <h2 className="text-2xl font-black mb-1" style={{ color:PLUM }}>How involved do you want to be?</h2>
        <p className="text-sm mb-7" style={{ color:MUTED }}>You can always change this later.</p>

        <div className="space-y-3">
          {opts.map(({ id, label, desc, Icon, iconColor, bg }) => {
            const on = selected === id;
            return (
              <button key={id} onClick={() => setSelected(id)} className="w-full rounded-2xl p-4 flex items-center gap-4 text-left transition-all active:scale-[0.98]" style={{
                backgroundColor: on ? PLUM_SOFT : CREAM,
                border: `2px solid ${on ? bg : BORDER}`,
              }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor:bg }}>
                  <Icon size={22} color={iconColor} />
                </div>
                <div className="flex-1">
                  <p className="font-black text-base" style={{ color:PLUM }}>{label}</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color:MUTED }}>{desc}</p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all" style={{
                  borderColor: on ? PLUM : BORDER,
                  backgroundColor: on ? PLUM : "transparent",
                }}>
                  {on && <Check size={11} color={WHITE} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 pb-10 pt-6">
        <button onClick={() => onNext(selected)} className="w-full py-4 rounded-2xl font-black text-lg active:scale-[0.98] transition-transform" style={{ backgroundColor:CORAL, color:PLUM }}>
          Continue
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SCREEN: Onboard 4 — Profile
// ══════════════════════════════════════════════════════════════════════════════
const AVATAR_OPTIONS = ["🦦","🐧","🦊","🐻","🦁","🐸","🐼","🐨","🦉","🦝","🐯","🐺"];

function OnboardProfileScreen({ onNext, onBack }: { onNext:(username:string,avatar:string)=>void; onBack:()=>void }) {
  const [username, setUsername] = useState("campusotter66");
  const [avatar, setAvatar] = useState("🦦");
  const valid = username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor:CREAM }}>
      <StatusBar />
      {/* Header with progress strip top-right */}
      <div className="px-5 pt-1 mb-4 flex items-center justify-between">
        <BackBtn onPress={onBack} />
        <ProgressStrip step={2} />
      </div>

      <div className="flex-1 px-6 overflow-y-auto" style={hideScroll}>
        <h2 className="text-2xl font-black mb-8" style={{ color:PLUM }}>Create your profile</h2>
       

        {/* Avatar picker */}
        <p className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color:MUTED }}>Choose your avatar</p>
        <div className="grid grid-cols-6 gap-2 mb-5">
          {AVATAR_OPTIONS.map(a => (
            <button
              key={a}
              onClick={() => setAvatar(a)}
              className="text-2xl rounded-2xl h-12 flex items-center justify-center transition-all active:scale-90"
              style={{
                backgroundColor: avatar === a ? CORAL : WHITE,
                border: `2px solid ${avatar === a ? PLUM : BORDER}`,
              }}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Username input */}
        <p className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color:MUTED }}>Enter your username</p>
        <div className="rounded-2xl px-4 py-3.5 flex items-center gap-2 mb-2" style={{ backgroundColor:WHITE, border:`2px solid ${valid ? MINT : BORDER}` }}>
          <span className="text-base font-bold" style={{ color:MUTED }}>@</span>
          <input
            value={username} onChange={e => setUsername(e.target.value)}
            maxLength={20}
            className="flex-1 bg-transparent text-base font-bold outline-none"
            style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
          />
          <Pencil size={15} color={MUTED} />
        </div>
        <p className="text-xs mb-5" style={{ color: valid ? MINT : MUTED }}>
          {valid ? "✓ Username available" : "3–20 characters, letters, numbers, underscores only."}
        </p>

        {/* Preview card */}
        <div className="rounded-2xl p-4 mb-4" style={{ backgroundColor:LIGHT_GOLD, border:`1px solid ${BORDER}` }}>
          <p className="text-xs font-bold mb-3" style={{ color:MUTED }}>How you appear in reviews</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl" style={{ backgroundColor:CORAL }}>
              {avatar}
            </div>
            <div>
              <p className="text-sm font-black" style={{ color:PLUM }}>@{username || "username"}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl p-3.5 mb-4" style={{ backgroundColor:LIGHT_MINT }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor:"rgba(255,255,255,0.6)" }}>
            <User size={14} color={PLUM} />
          </div>
          <p className="text-xs leading-relaxed flex-1" style={{ color:PLUM }}>
            Other students see your avatar and username — your NUS identity stays private.
          </p>
        </div>
      </div>

      <div className="px-6 pb-10 pt-3">
        <button
          onClick={() => onNext(username, avatar)}
          disabled={!valid}
          className="w-full py-4 rounded-2xl font-black text-base leading-tight active:scale-[0.98] transition-transform"
          style={{ backgroundColor: valid ? CORAL : BORDER, color: valid ? PLUM : MUTED }}
        >
          {"Let's find something you'll love"}
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: For You (full-screen CCA recommendations)
// ══════════════════════════════════════════════════════════════════════════════
function ForYouPage({ saved, onSave, onOpenSheet, onBack }: {
  saved:Set<number>; onSave:(id:number)=>void;
  onOpenSheet:(cca:CCA)=>void; onBack:()=>void;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  return (
    <div
      className="absolute inset-0 z-40 flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Header */}
      <div className="px-4 pt-14 pb-3 flex items-center flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <button onClick={goBack} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
        </button>
        <h1 className="flex-1 text-xl font-black text-center" style={{ color:PLUM }}>For You</h1>
        <div className="w-9" />
      </div>

      {/* 2-col grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4" style={hideScroll}>
        <div className="grid grid-cols-2 gap-3 pb-4">
          {CCAS.map(cca => (
            <CcaCardGrid
              key={cca.id}
              cca={cca}
              saved={saved.has(cca.id)}
              onSave={() => onSave(cca.id)}
              onClick={() => onOpenSheet(cca)}
            />
          ))}
        </div>
      </div>

      <BottomNav tab="home" onChange={goBack} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB: Home
// ══════════════════════════════════════════════════════════════════════════════
function HomeTab({ saved, onSave, onTabChange, onOpenSheet, onNotifications, onForYou, onOpenDiscoverWithCategory, username, hasUnread, isReturning }: {
  saved:Set<number>; onSave:(id:number)=>void;
  onTabChange:(t:Tab)=>void; onOpenSheet:(cca:CCA)=>void;
  onNotifications:()=>void; onForYou:()=>void;
  onOpenDiscoverWithCategory:(cat:string)=>void;
  username:string; hasUnread:boolean; isReturning?:boolean;
}) {
  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor:LIGHT_PEACH, ...hideScroll }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-2 flex items-start justify-between">
        <div>
          <p className="text-xl font-black leading-tight" style={{ color:PLUM }}>{isReturning ? `Welcome back, ${username}!` : `Hello, ${username}!`}</p>
        </div>
        <button
          onClick={onNotifications}
          className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
          style={{ backgroundColor:WHITE }}
        >
          {hasUnread
            ? <BellRing size={20} color={CORAL} style={{ transform:"rotate(-15deg)" }} />
            : <Bell size={20} color={PLUM} />}
          {hasUnread && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor:CORAL }} />}
        </button>
      </div>

      {/* Upcoming Deadlines */}
      <section className="px-5 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-black" style={{ color:PLUM }}>Upcoming Deadlines</h2>
          <button onClick={() => onTabChange("events")} className="text-xs font-bold" style={{ color:MUTED }}>See all →</button>
        </div>
        <div className="space-y-2.5">
          {EVENTS.slice(0,2).map(ev => (
            <div key={ev.id} className="rounded-xl p-3.5 flex items-center gap-3 shadow-sm" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
              <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0" style={{ backgroundColor:LIGHT_CORAL }}>
                <p className="text-[8px] font-black uppercase tracking-wide" style={{ color:CORAL }}>{ev.date.split(" ")[0]}</p>
                <p className="text-base font-black leading-tight" style={{ color:PLUM }}>{ev.date.split(" ")[1]}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate" style={{ color:PLUM }}>{ev.ccaName}</p>
                <p className="text-xs truncate" style={{ color:MUTED }}>{ev.title} · {ev.time}</p>
                <p className="text-xs truncate" style={{ color:MUTED }}>{ev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For You */}
      <section className="pt-6">
        <div className="px-5 flex items-center justify-between mb-3">
          <h2 className="text-base font-black" style={{ color:PLUM }}>For You</h2>
          <button onClick={onForYou} className="text-xs font-bold" style={{ color:MUTED }}>See all →</button>
        </div>
        <div className="flex gap-3 px-5 overflow-x-auto pb-2" style={hideScroll}>
          {CCAS.slice(0,5).map(cca => (
            <CcaCardSmall key={cca.id} cca={cca} saved={saved.has(cca.id)} onSave={() => onSave(cca.id)} onClick={() => onOpenSheet(cca)} />
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="pt-6 px-5 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-black" style={{ color:PLUM }}>Explore</h2>
          <button onClick={() => onOpenDiscoverWithCategory("")} className="text-xs font-bold" style={{ color:MUTED }}>See all →</button>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onOpenDiscoverWithCategory(cat.label)}
              className="rounded-2xl overflow-hidden relative active:scale-95 transition-transform"
              style={{ aspectRatio:"1" }}
            >
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 60%)" }} />
              <p className="absolute bottom-0 left-0 right-0 px-1.5 pb-2 text-[10px] font-black text-center leading-tight" style={{ color:"#fff" }}>{cat.label}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB: Discover — filter data & types
// ══════════════════════════════════════════════════════════════════════════════
const FILTER_CATS    = ["Dance","Music","Sports","Technology","Photography","Community Service","Theatre & Drama","Visual Arts","Debate","Academic"];
const FILTER_FACULTY = ["NUS-wide","Business","Computing","Design & Engineering","Social Sciences","Medicine","Dentistry","Houses","Halls","Residential Colleges"];
const EXP_LEVELS     = ["Beginner-Friendly","Some Experience","Experienced"];
const COMMIT_LEVELS  = [
  { id:"Explore", desc:"Try things out, casual commitment" },
  { id:"Commit",  desc:"Regular sessions and activities"   },
  { id:"Immerse", desc:"Deep involvement, competitions, leadership" },
];

const DISCOVER_CATS = [
  { id:"dance",     label:"Dance",             img:"https://images.unsplash.com/photo-1550026593-cb89847b168d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"music",     label:"Music",             img:"https://images.unsplash.com/photo-1565035010268-a3816f98589a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"sports",    label:"Sports",            img:"https://images.unsplash.com/photo-1534371517819-3cb56b0e4c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"tech",      label:"Technology",        img:"https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"photo",     label:"Photography",       img:"https://images.unsplash.com/photo-1774308190448-538999b627ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"community", label:"Community Service", img:"https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"theatre",   label:"Theatre & Drama",   img:"https://images.unsplash.com/photo-1514306191717-452ec28c7814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"arts",      label:"Visual Arts",       img:"https://images.unsplash.com/photo-1758522274945-7f000385a3dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"academic",  label:"Academic",          img:"https://images.unsplash.com/photo-1531259736756-6caccf485f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id:"debate",    label:"Debate",            img:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
];

interface DiscFilters {
  categories: Set<string>;
  experience: string;
  commitment: string;
  faculty: Set<string>;
}

const emptyFilters = (): DiscFilters => ({
  categories: new Set(), experience: "", commitment: "", faculty: new Set(),
});

function filterCount(f: DiscFilters) {
  return f.categories.size + (f.experience ? 1 : 0) + (f.commitment ? 1 : 0) + f.faculty.size;
}

// ── Filter Page ───────────────────────────────────────────────────────────────
function FilterPage({
  initial, onApply, onBack,
}: { initial: DiscFilters; onApply: (f: DiscFilters) => void; onBack: () => void }) {
  const [cats,   setCats]   = useState<Set<string>>(new Set(initial.categories));
  const [exp,    setExp]    = useState(initial.experience);
  const [commit, setCommit] = useState(initial.commitment);
  const [fac,    setFac]    = useState<Set<string>>(new Set(initial.faculty));

  function toggleSet<T>(set: Set<T>, val: T, setter: (s: Set<T>) => void) {
    const n = new Set(set);
    n.has(val) ? n.delete(val) : n.add(val);
    setter(n);
  }

  const handleReset = () => {
    setCats(new Set()); setExp(""); setCommit(""); setFac(new Set());
  };

  const handleApply = () => {
    onApply({ categories: cats, experience: exp, commitment: commit, faculty: fac });
  };

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor:CREAM }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0">
        <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
        </button>
        <h1 className="text-lg font-black" style={{ color:PLUM }}>Filter CCAs By</h1>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 pb-4" style={hideScroll}>

        {/* Categories */}
        <p className="text-sm font-black mb-2.5" style={{ color:PLUM }}>Categories</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {FILTER_CATS.map(c => {
            const on = cats.has(c);
            return (
              <button key={c} onClick={() => toggleSet(cats, c, setCats)}
                className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{ backgroundColor: on ? PLUM : WHITE, color: on ? WHITE : PLUM, border:`1.5px solid ${on ? PLUM : BORDER}` }}>
                {c}
              </button>
            );
          })}
        </div>

        {/* Experience Level */}
        <p className="text-sm font-black mb-2.5" style={{ color:PLUM }}>Experience Level</p>
        <div className="space-y-2 mb-5">
          {EXP_LEVELS.map(lvl => (
            <button key={lvl} onClick={() => setExp(exp === lvl ? "" : lvl)}
              className="flex items-center gap-2.5 w-full">
              <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                style={{ borderColor: exp === lvl ? CORAL : BORDER, backgroundColor: exp === lvl ? CORAL : WHITE }}>
                {exp === lvl && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <span className="text-sm font-semibold" style={{ color: exp === lvl ? PLUM : MUTED }}>{lvl}</span>
            </button>
          ))}
        </div>

        {/* Commitment Level */}
        <p className="text-sm font-black mb-2.5" style={{ color:PLUM }}>Commitment Level</p>
        <div className="space-y-2 mb-5">
          {COMMIT_LEVELS.map(({ id, desc }) => {
            const on = commit === id;
            return (
              <button key={id} onClick={() => setCommit(on ? "" : id)}
                className="flex items-center gap-3 w-full rounded-2xl p-3 text-left transition-all"
                style={{ backgroundColor: on ? PLUM_SOFT : CREAM, border:`1.5px solid ${on ? PLUM : BORDER}` }}>
                <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ borderColor: on ? CORAL : BORDER, backgroundColor: on ? CORAL : "transparent" }}>
                  {on && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-black" style={{ color:PLUM }}>{id}</p>
                  <p className="text-xs mt-0.5" style={{ color:MUTED }}>{desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Faculty / Community */}
        <p className="text-sm font-black mb-2.5" style={{ color:PLUM }}>Faculty / Community</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {FILTER_FACULTY.map(f => {
            const on = fac.has(f);
            return (
              <button key={f} onClick={() => toggleSet(fac, f, setFac)}
                className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{ backgroundColor: on ? PLUM : WHITE, color: on ? WHITE : PLUM, border:`1.5px solid ${on ? PLUM : BORDER}` }}>
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action row */}
      <div className="flex gap-3 px-5 py-4 flex-shrink-0" style={{ borderTop:`1.5px solid ${BORDER}`, backgroundColor:CREAM }}>
        <button onClick={handleReset}
          className="flex-1 py-3.5 rounded-2xl font-black text-sm"
          style={{ border:`2px solid ${BORDER}`, color:MUTED, backgroundColor:CREAM }}>
          Reset Filters
        </button>
        <button onClick={handleApply}
          className="flex-1 py-3.5 rounded-2xl font-black text-sm active:scale-[0.98] transition-transform"
          style={{ backgroundColor:PLUM, color:WHITE }}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

// ── Discover Tab ──────────────────────────────────────────────────────────────
function DiscoverTab({ saved, onSave, onOpenSheet, initialCategory = "" }: {
  saved:Set<number>; onSave:(id:number)=>void; onOpenSheet:(cca:CCA)=>void; initialCategory?:string;
}) {
  const [searchMode,  setSearchMode]  = useState(!!initialCategory);
  const [query,       setQuery]       = useState("");
  const [showFilter,  setShowFilter]  = useState(false);
  const [applied,     setApplied]     = useState<DiscFilters>(
    initialCategory
      ? { ...emptyFilters(), categories: new Set([initialCategory]) }
      : emptyFilters()
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  const results = CCAS.filter(c => {
    const q = query.toLowerCase();
    const matchQ = !query || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
    const matchCat = applied.categories.size === 0 ||
      [...applied.categories].some(cat => c.category.toLowerCase().includes(cat.toLowerCase()) || c.name.toLowerCase().includes(cat.toLowerCase()));
    const matchCommit = !applied.commitment || c.commitment === applied.commitment;
    return matchQ && matchCat && matchCommit;
  });

  const activeFilters = filterCount(applied);

  const enterSearch = () => { setSearchMode(true); setTimeout(() => inputRef.current?.focus(), 50); };
  const exitSearch  = () => { setSearchMode(false); setQuery(""); setApplied(emptyFilters()); };

  // Filter page overlays the whole tab
  if (showFilter) {
    return (
      <FilterPage
        initial={applied}
        onApply={f => { setApplied(f); setShowFilter(false); }}
        onBack={() => setShowFilter(false)}
      />
    );
  }

  // ── Search mode ──
  if (searchMode) {
    return (
      <div className="h-full flex flex-col" style={{ backgroundColor:CREAM }}>
        {/* Search header */}
        <div className="px-4 pt-14 pb-3 flex items-center gap-2 flex-shrink-0">
          <button onClick={exitSearch} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
            <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
          </button>
          <div className="flex-1 flex items-center gap-2 rounded-2xl px-3 py-2.5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <Search size={14} color={MUTED} />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={applied.categories.size === 1 && !query ? `Search ${[...applied.categories][0]}` : "Search all CCAs"}
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
            />
            {query && <button onClick={() => setQuery("")}><X size={12} color={MUTED} /></button>}
          </div>
          <button
            onClick={() => setShowFilter(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl relative flex-shrink-0"
            style={{ backgroundColor: activeFilters > 0 ? CORAL : WHITE }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeFilters > 0 ? FWHITE : PLUM} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
            </svg>
            {activeFilters > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center" style={{ backgroundColor:PLUM, color:CREAM }}>{activeFilters}</span>
            )}
          </button>
        </div>

        {/* Active filter pills */}
        {activeFilters > 0 && (
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={hideScroll}>
            {[...applied.categories].map(c => (
              <span key={c} className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style={{ backgroundColor:LIGHT_PEACH, color:PEACH }}>{c}</span>
            ))}
            {applied.commitment && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style={{ backgroundColor:LIGHT_PEACH, color:PEACH }}>{applied.commitment} commitment</span>
            )}
            {applied.experience && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style={{ backgroundColor:LIGHT_PEACH, color:PEACH }}>{applied.experience}</span>
            )}
          </div>
        )}

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-4 pb-6" style={hideScroll}>
          {query === "" && activeFilters === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-4xl mb-3">🔎</p>
              <p className="text-sm text-center" style={{ color:MUTED }}>Start typing to search CCAs</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {results.map(cca => (
                <CcaCardGrid key={cca.id} cca={cca} saved={saved.has(cca.id)} onSave={() => onSave(cca.id)} onClick={() => onOpenSheet(cca)} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24">
              <p className="text-sm text-center" style={{ color:MUTED }}>No matching results found.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Default view ──
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor:CREAM }}>
      {/* Search bar */}
      <div className="px-5 pt-14 pb-4 flex-shrink-0">
        <button onClick={enterSearch}
          className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-left"
          style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <Search size={15} color={MUTED} />
          <span className="text-sm" style={{ color:MUTED }}>Search all CCAs</span>
        </button>
      </div>

      {/* Categories grid */}
      <div className="flex-1 overflow-y-auto px-5 pb-6" style={hideScroll}>
        <p className="text-sm font-black mb-3" style={{ color:PLUM }}>Categories</p>
        <div className="grid grid-cols-2 gap-3">
          {DISCOVER_CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setApplied({ ...emptyFilters(), categories: new Set([cat.label]) }); enterSearch(); }}
              className="rounded-2xl overflow-hidden relative active:scale-[0.97] transition-transform"
              style={{ aspectRatio:"4/3" }}>
              <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
              <span className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 text-sm font-black text-left leading-tight" style={{ color:FWHITE }}>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB: Wishlist
// ══════════════════════════════════════════════════════════════════════════════
type WishList = { id: string; name: string; ccaIds: Set<number> };

function AddToListSheet({ cca, lists, setLists, onClose }: {
  cca: CCA;
  lists: WishList[];
  setLists: React.Dispatch<React.SetStateAction<WishList[]>>;
  onClose: () => void;
}) {
  const [showAddList, setShowAddList] = React.useState(false);
  const [newListName, setNewListName] = React.useState("");
  const nameError = newListName.trim() !== "" && lists.some(
    l => l.name.toLowerCase() === newListName.trim().toLowerCase()
  );

  const toggle = (listId: string) => {
    setLists(prev => prev.map(l => {
      if (l.id !== listId) return l;
      const next = new Set(l.ccaIds);
      next.has(cca.id) ? next.delete(cca.id) : next.add(cca.id);
      return { ...l, ccaIds: next };
    }));
  };

  const handleCreate = () => {
    const name = newListName.trim();
    if (!name || nameError) return;
    setLists(prev => [...prev, { id: Date.now().toString(), name, ccaIds: new Set() }]);
    setNewListName("");
    setShowAddList(false);
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end" style={{ backgroundColor:"rgba(0,0,0,0.35)" }} onClick={onClose}>
      <div className="w-full rounded-t-3xl pb-8" style={{ backgroundColor:WHITE, maxHeight:"72%" }} onClick={e => e.stopPropagation()}>
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor:BORDER }} />
        </div>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor:CREAM }}>
            <X size={14} color={PLUM} />
          </button>
          <p className="text-sm font-black" style={{ color:PLUM }}>Add to List</p>
          <button onClick={() => setShowAddList(true)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor:CORAL }}>
            <Plus size={14} color={FWHITE} strokeWidth={2.5} />
          </button>
        </div>

        <div className="overflow-y-auto" style={{ maxHeight:"52vh", ...hideScroll }}>
          <p className="text-xs font-black uppercase tracking-wider px-5 pt-4 pb-1.5" style={{ color:MUTED }}>Default Lists</p>
          {lists.filter(l => l.id === "interested" || l.id === "currently-trying").map(l => (
            <button key={l.id} className="w-full flex items-center gap-3 px-5 py-3" onClick={() => toggle(l.id)}>
              <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
                style={{ borderColor: l.ccaIds.has(cca.id) ? CORAL : BORDER, backgroundColor: l.ccaIds.has(cca.id) ? CORAL : "transparent" }}>
                {l.ccaIds.has(cca.id) && <Check size={11} color={FWHITE} strokeWidth={3} />}
              </div>
              <span className="text-sm font-semibold" style={{ color:PLUM }}>{l.name}</span>
            </button>
          ))}
          {lists.filter(l => l.id !== "interested" && l.id !== "currently-trying").length > 0 && (
            <>
              <p className="text-xs font-black uppercase tracking-wider px-5 pt-4 pb-1.5" style={{ color:MUTED }}>My Lists</p>
              {lists.filter(l => l.id !== "interested" && l.id !== "currently-trying").map(l => (
                <button key={l.id} className="w-full flex items-center gap-3 px-5 py-3" onClick={() => toggle(l.id)}>
                  <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ borderColor: l.ccaIds.has(cca.id) ? CORAL : BORDER, backgroundColor: l.ccaIds.has(cca.id) ? CORAL : "transparent" }}>
                    {l.ccaIds.has(cca.id) && <Check size={11} color={FWHITE} strokeWidth={3} />}
                  </div>
                  <span className="text-sm font-semibold" style={{ color:PLUM }}>{l.name}</span>
                </button>
              ))}
            </>
          )}
          {lists.filter(l => l.id !== "interested" && l.id !== "currently-trying").length === 0 && (
            <p className="px-5 pt-4 pb-2 text-xs" style={{ color:MUTED }}>Tap + to create custom lists.</p>
          )}
        </div>

        <div className="px-5 pt-3" style={{ borderTop:`1.5px solid ${BORDER}` }}>
          <button onClick={onClose} className="w-full py-3.5 rounded-2xl text-sm font-black" style={{ backgroundColor:CORAL, color:PLUM }}>Done</button>
        </div>
      </div>

      {/* Add List modal */}
      {showAddList && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6" style={{ backgroundColor:"rgba(0,0,0,0.4)" }} onClick={e => e.stopPropagation()}>
          <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }}>
            <h2 className="text-lg font-black mb-4" style={{ color:PLUM }}>New List</h2>
            <div className="rounded-2xl px-4 py-3.5 mb-1.5" style={{ backgroundColor:CREAM, border:`1.5px solid ${nameError ? CORAL : BORDER}` }}>
              <input autoFocus value={newListName} onChange={e => setNewListName(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleCreate(); }}
                placeholder="List name…" className="w-full bg-transparent text-sm font-semibold outline-none"
                style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }} />
            </div>
            {nameError ? <p className="text-xs mb-4" style={{ color:CORAL }}>A list with this name already exists.</p> : <div className="mb-4" />}
            <div className="flex gap-3">
              <button onClick={() => { setShowAddList(false); setNewListName(""); }}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}>Cancel</button>
              <button onClick={handleCreate} disabled={!newListName.trim() || nameError}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black transition-opacity"
                style={{ backgroundColor: !newListName.trim() || nameError ? BORDER : CORAL, color: !newListName.trim() || nameError ? MUTED : PLUM, opacity: !newListName.trim() || nameError ? 0.55 : 1 }}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WishlistTab({ saved, onOpenSheet, lists, setLists, onFullRemove }: {
  saved:Set<number>;
  onOpenSheet:(cca:CCA)=>void;
  lists: WishList[];
  setLists: React.Dispatch<React.SetStateAction<WishList[]>>;
  onFullRemove:(id:number)=>void;
}) {
  const [activeId,      setActiveId]      = React.useState<string>("all");
  const [menuOpenId,    setMenuOpenId]    = React.useState<number|null>(null);
  const [addToCca,      setAddToCca]      = React.useState<CCA|null>(null);
  const [removeCca,     setRemoveCca]     = React.useState<CCA|null>(null);
  const [removeFromAll, setRemoveFromAll] = React.useState(true);
  const [showAddList,   setShowAddList]   = React.useState(false);
  const [newListName,   setNewListName]   = React.useState("");
  const [editMenuOpen,  setEditMenuOpen]  = React.useState(false);
  const [renameOpen,    setRenameOpen]    = React.useState(false);
  const [renameValue,   setRenameValue]   = React.useState("");
  const [deleteOpen,    setDeleteOpen]    = React.useState(false);

  const nameError = newListName.trim() !== "" && lists.some(
    l => l.name.toLowerCase() === newListName.trim().toLowerCase()
  );
  const handleCreateList = () => {
    const name = newListName.trim();
    if (!name || nameError) return;
    setLists(prev => [...prev, { id: Date.now().toString(), name, ccaIds: new Set() }]);
    setNewListName(""); setShowAddList(false);
  };

  const handleRename = () => {
    const name = renameValue.trim();
    if (!name) return;
    setLists(prev => prev.map(l => l.id === activeId ? { ...l, name } : l));
    setRenameOpen(false);
  };

  const handleDeleteList = () => {
    setLists(prev => prev.filter(l => l.id !== activeId));
    setActiveId("all");
    setDeleteOpen(false);
  };

  const allSaved   = CCAS.filter(c => saved.has(c.id));
  const activeList = lists.find(l => l.id === activeId);
  const displayed  = activeId === "all" ? allSaved : allSaved.filter(c => activeList?.ccaIds.has(c.id));

  const handleRemoveConfirm = () => {
    if (!removeCca) return;
    if (removeFromAll) {
      onFullRemove(removeCca.id);
    } else if (activeId !== "all") {
      setLists(prev => prev.map(l => {
        if (l.id !== activeId) return l;
        const next = new Set(l.ccaIds);
        next.delete(removeCca.id);
        return { ...l, ccaIds: next };
      }));
    }
    setRemoveCca(null);
  };

  const Chip = ({ id, label, active }: { id:string; label:string; active:boolean }) => (
    <button
      onClick={() => setActiveId(id)}
      className="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all"
      style={{
        backgroundColor: active ? PLUM : WHITE,
        color:           active ? WHITE : PLUM,
        border:         `1.5px solid ${active ? PLUM : BORDER}`,
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="h-full flex flex-col relative" style={{ backgroundColor:CREAM }}
      onClick={() => { setMenuOpenId(null); setEditMenuOpen(false); }}>

      {/* Header */}
      <div className="px-5 pt-14 pb-3 flex-shrink-0 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-black" style={{ color:PLUM }}>My Wishlist</h1>
          <p className="text-sm mt-0.5" style={{ color:MUTED }}>
            {displayed.length} CCA{displayed.length !== 1 ? "s" : ""}
          </p>
        </div>
        {/* Edit button — only visible when a sublist is active */}
        {activeId !== "all" && (
          <div className="relative mt-1">
            <button
              onClick={e => { e.stopPropagation(); setEditMenuOpen(p => !p); }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: editMenuOpen ? PLUM_SOFT : "transparent" }}
            >
              <Pencil size={18} color={PLUM} />
            </button>
            {editMenuOpen && (
              <div
                className="absolute right-0 top-11 z-30 rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, minWidth:"148px" }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-left"
                  style={{ borderBottom:`1px solid ${BORDER}` }}
                  onClick={() => {
                    const cur = lists.find(l => l.id === activeId);
                    setRenameValue(cur?.name ?? "");
                    setRenameOpen(true); setEditMenuOpen(false);
                  }}
                >
                  <Pencil size={15} color={PLUM} />
                  <span className="text-sm font-semibold" style={{ color:PLUM }}>Rename</span>
                </button>
                <button
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-left"
                  onClick={() => { setDeleteOpen(true); setEditMenuOpen(false); }}
                >
                  <Trash2 size={15} color="#B91C1C" />
                  <span className="text-sm font-semibold" style={{ color:"#B91C1C" }}>Delete</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chips */}
      <div className="flex gap-2 px-5 pb-3 overflow-x-auto flex-shrink-0" style={hideScroll}>
        <Chip id="all" label="All" active={activeId === "all"} />
        {lists.map(l => (
          <Chip key={l.id} id={l.id} label={l.name} active={activeId === l.id} />
        ))}
        <button
          onClick={e => { e.stopPropagation(); setShowAddList(true); }}
          className="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0 flex items-center gap-1 transition-all"
          style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color:PLUM }}
        >
          <Plus size={11} strokeWidth={2.5} color={PLUM} />
          Add List
        </button>
      </div>

      {/* CCA cards */}
      {displayed.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-8">
         
          <p className="text-lg font-black mb-1.5 text-center" style={{ color:PLUM }}>
            {activeId === "all" ? "Nothing saved yet" : "No CCAs here yet!"}
          </p>
          <p className="text-sm text-center leading-relaxed mb-5" style={{ color:MUTED }}>
            {activeId === "all"
              ? "Tap the heart on any CCA to save it here."
              : "To add a CCA, go to your 'All' tab, tap the three dots (⋮) on a CCA card, and choose this list."}
          </p>
          {activeId !== "all" && (
            <button
              onClick={() => setActiveId("all")}
              className="px-5 py-3 rounded-2xl text-sm font-black active:opacity-70 transition-opacity"
              style={{ backgroundColor:CORAL, color:PLUM }}
            >
              View All CCAs
            </button>
          )}
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-5 pb-6 space-y-3" style={hideScroll}>
          {displayed.map(cca => (
            <div key={cca.id} className="relative">
              {/* Card */}
              <div
                className="rounded-2xl overflow-hidden flex cursor-pointer active:scale-[0.98] transition-transform"
                style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}
                onClick={() => { if (menuOpenId !== null) { setMenuOpenId(null); } else { onOpenSheet(cca); } }}
              >
                <div className="w-20 relative overflow-hidden flex-shrink-0" style={{ backgroundColor:cca.bgColor }}>
                  <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-3 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-black truncate" style={{ color:PLUM }}>{cca.name}</p>
                      <p className="text-xs mb-1.5" style={{ color:MUTED }}>{cca.category}</p>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <CommitBadge level={cca.commitment} />
                       
                      </div>
                    </div>
                    {/* Ellipsis */}
                    <button
                      onClick={e => { e.stopPropagation(); setMenuOpenId(menuOpenId === cca.id ? null : cca.id); }}
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ backgroundColor: menuOpenId === cca.id ? PLUM_SOFT : "transparent" }}
                    >
                      <MoreVertical size={16} color={MUTED} />
                    </button>
                  </div>
                  <p className="text-[11px] mt-1.5 leading-snug" style={{ color:MUTED }}>Deadline: {cca.deadline}</p>
                </div>
              </div>

              {/* Dropdown menu */}
              {menuOpenId === cca.id && (
                <div
                  className="absolute right-2 top-12 z-30 rounded-2xl overflow-hidden shadow-xl"
                  style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, minWidth:"148px" }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-left"
                    style={{ borderBottom:`1px solid ${BORDER}` }}
                    onClick={() => { setAddToCca(cca); setMenuOpenId(null); }}
                  >
                    <ListPlus size={15} color={PLUM} />
                    <span className="text-sm font-semibold" style={{ color:PLUM }}>Add to List</span>
                  </button>
                  <button
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-left"
                    onClick={() => { setRemoveCca(cca); setRemoveFromAll(true); setMenuOpenId(null); }}
                  >
                    <Trash2 size={15} color="#B91C1C" />
                    <span className="text-sm font-semibold" style={{ color:"#B91C1C" }}>Remove</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Add to List bottom sheet ── */}
      {addToCca && (
        <AddToListSheet
          cca={addToCca}
          lists={lists}
          setLists={setLists}
          onClose={() => setAddToCca(null)}
        />
      )}

      {/* ── Remove confirmation modal ── */}
      {removeCca && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor:"rgba(0,0,0,0.4)" }}
        >
          <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }}>
            <h2 className="text-lg font-black mb-5" style={{ color:PLUM }}>Remove CCA</h2>

            {/* Option A: remove from wishlist entirely */}
            <button className="w-full flex items-start gap-3 mb-3" onClick={() => setRemoveFromAll(true)}>
              <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                style={{ borderColor: removeFromAll ? CORAL : BORDER, backgroundColor: removeFromAll ? CORAL : "transparent" }}>
                {removeFromAll && <Check size={11} color={FWHITE} strokeWidth={3} />}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold" style={{ color:PLUM }}>Remove from Wishlist</p>
                <p className="text-xs mt-0.5" style={{ color:MUTED }}>CCA will be removed from all lists</p>
              </div>
            </button>

            {/* Option B: remove from current list only (not available on "All") */}
            {activeId !== "all" && (
              <button className="w-full flex items-center gap-3" onClick={() => setRemoveFromAll(false)}>
                <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ borderColor: !removeFromAll ? CORAL : BORDER, backgroundColor: !removeFromAll ? CORAL : "transparent" }}>
                  {!removeFromAll && <Check size={11} color={FWHITE} strokeWidth={3} />}
                </div>
                <span className="text-sm font-semibold" style={{ color:PLUM }}>
                  Remove from {activeList?.name} only
                </span>
              </button>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setRemoveCca(null)}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveConfirm}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:DANGER_BG, color:"#B91C1C", border:"1.5px solid #EF9797" }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── New List modal (from chip bar) ── */}
      {showAddList && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-6" style={{ backgroundColor:"rgba(0,0,0,0.4)" }}
          onClick={() => { setShowAddList(false); setNewListName(""); }}>
          <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }} onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black mb-4" style={{ color:PLUM }}>New List</h2>
            <div className="rounded-2xl px-4 py-3.5 mb-1.5" style={{ backgroundColor:CREAM, border:`1.5px solid ${nameError ? CORAL : BORDER}` }}>
              <input autoFocus value={newListName} onChange={e => setNewListName(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleCreateList(); }}
                placeholder="List name…" className="w-full bg-transparent text-sm font-semibold outline-none"
                style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }} />
            </div>
            {nameError ? <p className="text-xs mb-4" style={{ color:CORAL }}>A list with this name already exists.</p> : <div className="mb-4" />}
            <div className="flex gap-3">
              <button onClick={() => { setShowAddList(false); setNewListName(""); }}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}>Cancel</button>
              <button onClick={handleCreateList} disabled={!newListName.trim() || nameError}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black transition-opacity"
                style={{ backgroundColor: !newListName.trim() || nameError ? BORDER : CORAL, color: !newListName.trim() || nameError ? MUTED : PLUM, opacity: !newListName.trim() || nameError ? 0.55 : 1 }}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Rename List modal ── */}
      {renameOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-6" style={{ backgroundColor:"rgba(0,0,0,0.4)" }}
          onClick={() => setRenameOpen(false)}>
          <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }} onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black mb-4" style={{ color:PLUM }}>Rename List</h2>
            <div className="rounded-2xl px-4 py-3.5 mb-5" style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}` }}>
              <input
                autoFocus value={renameValue} onChange={e => setRenameValue(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleRename(); }}
                placeholder="List name…" className="w-full bg-transparent text-sm font-semibold outline-none"
                style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
              />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setRenameOpen(false)}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}>Cancel</button>
              <button onClick={handleRename} disabled={!renameValue.trim()}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black transition-opacity"
                style={{ backgroundColor:CORAL, color:PLUM, opacity: renameValue.trim() ? 1 : 0.45 }}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete List confirmation modal ── */}
      {deleteOpen && (() => {
        const cur = lists.find(l => l.id === activeId);
        const count = cur ? allSaved.filter(c => cur.ccaIds.has(c.id)).length : 0;
        return (
          <div className="absolute inset-0 z-50 flex items-center justify-center px-6" style={{ backgroundColor:"rgba(0,0,0,0.4)" }}
            onClick={() => setDeleteOpen(false)}>
            <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }} onClick={e => e.stopPropagation()}>
              <h2 className="text-lg font-black mb-2" style={{ color:PLUM }}>Delete "{cur?.name}"?</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color:MUTED }}>
                {count > 0
                  ? `${count} CCA${count !== 1 ? "s" : ""} in this list are still saved in My Wishlist after this action.`
                  : "This list will be permanently deleted."}
              </p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteOpen(false)}
                  className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                  style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}>Cancel</button>
                <button onClick={handleDeleteList}
                  className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                  style={{ backgroundColor:DANGER_BG, color:"#B91C1C", border:"1.5px solid #EF9797" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB: Events
// ══════════════════════════════════════════════════════════════════════════════
function EventsTab({ saved, notifiedDetailEvts, setNotifiedDetailEvts, onTabChange, notifiedEvts, setNotifiedEvts, removedEvtKeys, setRemovedEvtKeys }: {
  saved: Set<number>; notifiedDetailEvts?: Set<string>;
  setNotifiedDetailEvts?: React.Dispatch<React.SetStateAction<Set<string>>>;
  onTabChange?: (t: Tab) => void;
  notifiedEvts: Set<number>; setNotifiedEvts: React.Dispatch<React.SetStateAction<Set<number>>>;
  removedEvtKeys: Set<string>; setRemovedEvtKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const { isDark } = useDark();
  const TODAY     = new Date(2026, 7, 28);
  const MON_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const MON_LONG  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAY_LABELS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const dateKey    = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const parseEvDate = (s: string) => {
    const parts = s.split(" ");
    if (parts.length === 2) return new Date(2026, MON_SHORT.indexOf(parts[0]), +parts[1]);
    return new Date(+parts[2], MON_SHORT.indexOf(parts[1]), +parts[0]);
  };

  const [weekOffset,      setWeekOffset]      = useState(0);
  const [selIdx,          setSelIdx]          = useState(() => (TODAY.getDay() + 6) % 7);
  const [filterOpen,      setFilterOpen]      = useState(false);
  const [filterNotified,  setFilterNotified]  = useState(false);
  const [filterCcaIds,    setFilterCcaIds]    = useState<Set<number>>(new Set());
  const [upcomingOpen,    setUpcomingOpen]    = useState(true);
  const [pastOpen,        setPastOpen]        = useState(false);
  const [menuEvtKey,      setMenuEvtKey]      = useState<string | null>(null);
  const [removeConfirm,   setRemoveConfirm]   = useState<{ id: number; title: string } | null>(null);
  const [selectedEvent,   setSelectedEvent]   = useState<EventDetailData | null>(null);

  const scrollRef  = React.useRef<HTMLDivElement>(null);
  const eventRefs  = React.useRef<Map<number, HTMLDivElement>>(new Map());

  const wishlistCcas = React.useMemo(() => CCAS.filter(c => saved.has(c.id)), [saved]);

  // Base: wishlisted events OR events with bell on — minus manually removed
  const baseEvents = React.useMemo(() =>
    EVENTS.filter(ev =>
      (saved.has(ev.ccaId) || notifiedEvts.has(ev.id)) &&
      !removedEvtKeys.has(String(ev.id))
    ), [saved, notifiedEvts, removedEvtKeys]);

  const visibleEvents = React.useMemo(() => {
    let evs = baseEvents;
    if (filterNotified) evs = evs.filter(ev => notifiedEvts.has(ev.id));
    if (filterCcaIds.size > 0) evs = evs.filter(ev => filterCcaIds.has(ev.ccaId));
    return evs;
  }, [baseEvents, filterNotified, filterCcaIds, notifiedEvts]);

  const weekStart = React.useMemo(() => {
    const d = new Date(TODAY);
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - dow + weekOffset * 7);
    d.setHours(0, 0, 0, 0);
    return d;
  }, [weekOffset]);

  const weekDays = React.useMemo(() =>
    Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      return d;
    }), [weekStart]);

  const isToday = (d: Date) => dateKey(d) === dateKey(TODAY);

  const allVisibleEvents = React.useMemo(() => {
    const evs = [...visibleEvents];
    if (notifiedDetailEvts) {
      [...notifiedDetailEvts].forEach(key => {
        const [ccaIdStr, idxStr] = key.split("-");
        const ccaId = parseInt(ccaIdStr);
        const idx   = parseInt(idxStr);
        const evKey = String(-(ccaId * 100 + idx));
        if (removedEvtKeys.has(evKey)) return;
        const cca   = CCAS.find(c => c.id === ccaId);
        const ev    = CCA_DETAIL_EVENTS[ccaId]?.[idx];
        if (!ev || !cca) return;
        evs.push({
          id: -(ccaId * 100 + idx),
          ccaId,
          ccaName: cca.name,
          title: ev.name,
          date: ev.date.replace(/(\d+) (\w+) \d+/, "$2 $1"),
          dayLabel: "",
          time: ev.time,
          location: "",
        });
      });
    }
    return evs;
  }, [visibleEvents, notifiedDetailEvts, removedEvtKeys]);

  // Sort all events by date ascending
  const sortedEvents = React.useMemo(() =>
    [...allVisibleEvents].sort((a, b) => parseEvDate(a.date).getTime() - parseEvDate(b.date).getTime()),
    [allVisibleEvents]);

  const todayStart = new Date(TODAY); todayStart.setHours(0, 0, 0, 0);

  const upcomingEvents = React.useMemo(() =>
    sortedEvents.filter(ev => parseEvDate(ev.date) >= todayStart), [sortedEvents]);

  const pastEvents = React.useMemo(() =>
    [...sortedEvents.filter(ev => parseEvDate(ev.date) < todayStart)].reverse(), [sortedEvents]);

  // For calendar dots: any event on that date
  const eventsByDate = React.useMemo(() => {
    const map: Record<string, boolean> = {};
    allVisibleEvents.forEach(ev => { map[dateKey(parseEvDate(ev.date))] = true; });
    return map;
  }, [allVisibleEvents]);

  const monthLabel = React.useMemo(() => {
    const a = weekDays[0], b = weekDays[6];
    return a.getMonth() === b.getMonth()
      ? `${MON_LONG[a.getMonth()]} ${a.getFullYear()}`
      : `${MON_SHORT[a.getMonth()]} – ${MON_SHORT[b.getMonth()]} ${a.getFullYear()}`;
  }, [weekDays]);

  // Scroll to a specific event card by id
  const scrollToEvent = (evId: number) => {
    const el = eventRefs.current.get(evId);
    if (!el || !scrollRef.current) return;
    const container = scrollRef.current;
    const elTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
    container.scrollTo({ top: elTop - 8, behavior: "smooth" });
  };

  // When user taps a calendar day, find the nearest upcoming event on or after that date
  const handleDayTap = (day: Date, i: number) => {
    setSelIdx(i);
    const dayStart = new Date(day); dayStart.setHours(0, 0, 0, 0);
    const target = upcomingEvents.find(ev => parseEvDate(ev.date) >= dayStart);
    if (target) {
      if (!upcomingOpen) setUpcomingOpen(true);
      setTimeout(() => scrollToEvent(target.id), 60);
    }
  };

  React.useEffect(() => {
    setSelIdx(weekOffset === 0 ? (TODAY.getDay() + 6) % 7 : 0);
  }, [weekOffset]);

  const goToToday = () => {
    setWeekOffset(0);
    setSelIdx((TODAY.getDay() + 6) % 7);
    const target = upcomingEvents.find(ev => parseEvDate(ev.date) >= todayStart);
    if (target) {
      if (!upcomingOpen) setUpcomingOpen(true);
      setTimeout(() => scrollToEvent(target.id), 60);
    }
  };

  const prevWeek = () => setWeekOffset(o => o - 1);
  const nextWeek = () => setWeekOffset(o => o + 1);

  const toggleBell = (evId: number) => {
    if (evId > 0) {
      setNotifiedEvts(prev => { const n = new Set(prev); n.has(evId) ? n.delete(evId) : n.add(evId); return n; });
    } else {
      const ccaId = Math.floor(-evId / 100);
      const idx   = (-evId) % 100;
      const key   = `${ccaId}-${idx}`;
      if (setNotifiedDetailEvts) {
        setNotifiedDetailEvts(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });
      }
    }
  };

  const handleRemove = (evId: number) => {
    const key = String(evId);
    setRemovedEvtKeys(prev => new Set([...prev, key]));
    if (evId > 0) {
      setNotifiedEvts(prev => { const n = new Set(prev); n.delete(evId); return n; });
    } else {
      const ccaId = Math.floor(-evId / 100);
      const idx   = (-evId) % 100;
      const detailKey = `${ccaId}-${idx}`;
      if (setNotifiedDetailEvts) {
        setNotifiedDetailEvts(prev => { const n = new Set(prev); n.delete(detailKey); return n; });
      }
    }
  };

  const isBellOn = (ev: typeof EVENTS[0]) => {
    if (ev.id > 0) return notifiedEvts.has(ev.id);
    const ccaId = Math.floor(-ev.id / 100);
    const idx   = (-ev.id) % 100;
    return notifiedDetailEvts?.has(`${ccaId}-${idx}`) ?? false;
  };

  const renderEvent = (ev: typeof EVENTS[0]) => {
    const evKey = String(ev.id);
    const on    = isBellOn(ev);
    return (
      <div key={ev.id} className="relative">
        <div
          ref={el => { if (el) eventRefs.current.set(ev.id, el); else eventRefs.current.delete(ev.id); }}
          className="rounded-xl p-4 flex gap-3 items-center cursor-pointer active:opacity-80 transition-opacity"
          style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}
          onClick={() => setSelectedEvent({ title: ev.title, subtitle: ev.ccaName, date: ev.date, time: ev.time, venue: ev.location })}
        >
          <div className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0" style={{ backgroundColor: isDark ? "rgba(232,120,98,0.18)" : LIGHT_PEACH }}>
            <p className="text-[8px] font-black uppercase" style={{ color:CORAL }}>{ev.date.split(" ")[0]}</p>
            <p className="text-base font-black" style={{ color:PLUM }}>{ev.date.split(" ")[1]}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate mb-0.5" style={{ color:MUTED }}>{ev.ccaName}</p>
            <p className="text-sm font-black mb-1.5" style={{ color:PLUM }}>{ev.title}</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs" style={{ color:MUTED }}><Clock size={10} />{ev.time}</span>
              {ev.location && <span className="flex items-center gap-1 text-xs" style={{ color:MUTED }}><MapPin size={10} />{ev.location}</span>}
            </div>
          </div>
          <button
            onClick={e => { e.stopPropagation(); toggleBell(ev.id); }}
            className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: on ? CORAL : (isDark ? "rgba(255,255,255,0.10)" : LIGHT_PEACH) }}
          >
            {on ? <BellRing size={15} color={FWHITE} style={{ transform:"rotate(-15deg)" }} /> : <Bell size={15} color={PLUM} />}
          </button>
          <button
            onClick={e => { e.stopPropagation(); setMenuEvtKey(menuEvtKey === evKey ? null : evKey); }}
            className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: menuEvtKey === evKey ? PLUM_SOFT : "transparent" }}
          >
            <MoreVertical size={15} color={MUTED} />
          </button>
        </div>
      </div>
    );
  };

  const toggleFilterCca = (id: number) =>
    setFilterCcaIds(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const activeFilterCount = (filterNotified ? 1 : 0) + filterCcaIds.size;

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor:CREAM }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-3 flex-shrink-0 flex items-end justify-between">
        <div>
          <h1 className="text-xl font-black" style={{ color:PLUM }}>Events</h1>
          <p className="text-sm" style={{ color:MUTED }}>From your wishlisted CCAs</p>
        </div>
        <button
          onClick={() => setFilterOpen(true)}
          className="relative w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
          style={{ backgroundColor: activeFilterCount > 0 ? CORAL : WHITE }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={activeFilterCount > 0 ? FWHITE : PLUM} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black" style={{ backgroundColor:CORAL, color:FWHITE }}>
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Horizontal week calendar */}
      <div className="px-5 mb-3 flex-shrink-0">
        <div className="rounded-2xl shadow-sm px-3 pt-3.5 pb-4" style={{ backgroundColor:WHITE }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-black" style={{ color:PLUM }}>{monthLabel}</p>
            <div className="flex items-center gap-1">
              <button onClick={prevWeek} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor:CREAM }}>
                <ChevronLeft size={14} color={PLUM} />
              </button>
              <button onClick={goToToday} className="px-2.5 py-1 rounded-lg text-[11px] font-black" style={{ backgroundColor:CREAM, color:CORAL }}>
                Today
              </button>
              <button onClick={nextWeek} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor:CREAM }}>
                <ChevronRight size={14} color={PLUM} />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            {weekDays.map((day, i) => {
              const active = i === selIdx;
              const isT    = isToday(day);
              const hasDot = !!eventsByDate[dateKey(day)];
              return (
                <button key={i} onClick={() => handleDayTap(day, i)} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold" style={{ color: active ? CORAL : MUTED }}>{DAY_LABELS[i]}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all"
                    style={{
                      backgroundColor: active ? CORAL : "transparent",
                      color:           active ? FWHITE : isT ? CORAL : PLUM,
                      outline:         isT && !active ? `2px solid ${CORAL}` : "2px solid transparent",
                      outlineOffset:   "1px",
                    }}
                  >
                    {day.getDate()}
                  </div>
                  <div className="w-1 h-1 rounded-full transition-opacity" style={{ backgroundColor:CORAL, opacity: hasDot && !active ? 1 : 0 }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scrollable event sections */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-8" style={hideScroll}>

        {/* Upcoming Events */}
        <div>
          <button
            onClick={() => setUpcomingOpen(p => !p)}
            className="w-full flex items-center justify-between px-5 py-3 sticky top-0 z-10"
            style={{ backgroundColor:CREAM }}
          >
            <span className="text-sm font-black" style={{ color:PLUM }}>Upcoming Events</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor:LIGHT_CORAL, color:CORAL }}>
                {upcomingEvents.length}
              </span>
              <ChevronDown
                size={16}
                color={MUTED}
                style={{ transform: upcomingOpen ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.2s" }}
              />
            </div>
          </button>

          {upcomingOpen && (
            <div className="px-5 pb-4 space-y-3">
              {upcomingEvents.length === 0 ? (
                <div className="flex flex-col items-center gap-4 py-10">
                  <p className="text-sm font-bold text-center" style={{ color:MUTED }}>Go to Discover to explore Events</p>
                  <button
                    onClick={() => onTabChange?.("discover")}
                    className="px-5 py-2.5 rounded-2xl text-sm font-black"
                    style={{ backgroundColor:CORAL, color:FWHITE }}
                  >
                    Go to Discover
                  </button>
                </div>
              ) : (
                upcomingEvents.map(ev => renderEvent(ev))
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mx-5 mb-1" style={{ height:"1px", backgroundColor:BORDER }} />

        {/* Past Events */}
        <div>
          <button
            onClick={() => setPastOpen(p => !p)}
            className="w-full flex items-center justify-between px-5 py-3 sticky top-0 z-10"
            style={{ backgroundColor:CREAM }}
          >
            <span className="text-sm font-black" style={{ color:PLUM }}>Past Events</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor:PLUM_SOFT, color:MUTED }}>
                {pastEvents.length}
              </span>
              <ChevronDown
                size={16}
                color={MUTED}
                style={{ transform: pastOpen ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.2s" }}
              />
            </div>
          </button>

          {pastOpen && (
            <div className="px-5 pb-4 space-y-3">
              {pastEvents.length === 0 ? (
                <p className="text-sm font-bold text-center py-8" style={{ color:MUTED }}>No Past Events Saved</p>
              ) : (
                pastEvents.map(ev => renderEvent(ev))
              )}
            </div>
          )}
        </div>

      </div>

      {/* Event options action sheet */}
      {menuEvtKey !== null && (
        <div
          className="absolute inset-0 z-[75] flex flex-col justify-end"
          style={{ backgroundColor:"rgba(0,0,0,0.35)" }}
          onClick={() => setMenuEvtKey(null)}
        >
          <div
            className="rounded-t-3xl overflow-hidden pb-8"
            style={{ backgroundColor:WHITE }}
            onClick={e => e.stopPropagation()}
          >
            <div className="px-4 pt-4 pb-3" style={{ borderBottom:`1px solid ${BORDER}` }}>
              <div className="w-10 h-1 rounded-full mx-auto mb-3" style={{ backgroundColor:BORDER }} />
              <p className="text-xs font-bold text-center" style={{ color:MUTED }}>Event Options</p>
            </div>
            <button
              className="w-full flex items-center gap-3 px-5 py-4 active:opacity-70"
              onClick={() => {
                const ev = allVisibleEvents.find(e => String(e.id) === menuEvtKey);
                if (ev) setRemoveConfirm({ id: ev.id, title: ev.title });
                setMenuEvtKey(null);
              }}
            >
              <Trash2 size={16} color="#B91C1C" />
              <span className="text-sm font-semibold" style={{ color:"#B91C1C" }}>Remove Event</span>
            </button>
          </div>
        </div>
      )}

      {/* Remove confirmation modal */}
      {removeConfirm && (
        <div
          className="absolute inset-0 z-[80] flex items-center justify-center px-6"
          style={{ backgroundColor:"rgba(0,0,0,0.45)" }}
          onClick={() => setRemoveConfirm(null)}
        >
          <div
            className="w-full rounded-3xl p-6"
            style={{ backgroundColor:WHITE, maxWidth:"340px" }}
            onClick={e => e.stopPropagation()}
          >
            <p className="text-base font-black mb-2" style={{ color:PLUM }}>Remove this event?</p>
            <p className="text-sm leading-relaxed mb-5" style={{ color:MUTED }}>
              Removing <span className="font-bold" style={{ color:PLUM }}>{removeConfirm.title}</span> will delete it from your Events page.
              If you only want to hide events you're not interested in, use the{" "}
              <span
                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg align-middle"
                style={{ backgroundColor:isDark ? "rgba(255,255,255,0.10)" : LIGHT_PEACH }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={PLUM} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                <span className="text-[11px] font-bold" style={{ color:PLUM }}>Filter</span>
              </span>
              {" "}instead.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setRemoveConfirm(null)}
                className="flex-1 py-3 rounded-2xl text-sm font-black"
                style={{ backgroundColor:isDark ? "rgba(255,255,255,0.08)" : CREAM, color:PLUM }}
              >
                Cancel
              </button>
              <button
                onClick={() => { handleRemove(removeConfirm.id); setRemoveConfirm(null); }}
                className="flex-1 py-3 rounded-2xl text-sm font-black"
                style={{ backgroundColor:"#B91C1C", color:FWHITE }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event detail overlay */}
      {selectedEvent && (
        <EventDetailPage event={selectedEvent} onBack={() => setSelectedEvent(null)} />
      )}

      {filterOpen && (
        <div className="absolute inset-0 z-[70] flex flex-col" style={{ backgroundColor:CREAM }}>
          <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1px solid ${BORDER}` }}>
            <button onClick={() => setFilterOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor:PLUM_SOFT }}>
              <X size={16} color={PLUM} />
            </button>
            <h2 className="text-base font-black flex-1" style={{ color:PLUM }}>Filter Events</h2>
            {activeFilterCount > 0 && (
              <button
                onClick={() => { setFilterNotified(false); setFilterCcaIds(new Set()); }}
                className="text-xs font-bold px-3 py-1.5 rounded-xl"
                style={{ backgroundColor:LIGHT_CORAL, color:CORAL }}
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6" style={hideScroll}>
            <div>
              <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color:MUTED }}>Notified Events</p>
              <button
                onClick={() => setFilterNotified(p => !p)}
                className="w-full flex items-center gap-3 rounded-2xl px-4 py-3.5"
                style={{ backgroundColor:WHITE, border:`1.5px solid ${filterNotified ? CORAL : BORDER}` }}
              >
                <div
                  className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ borderColor:filterNotified ? CORAL : BORDER, backgroundColor:filterNotified ? CORAL : "transparent" }}
                >
                  {filterNotified && <Check size={11} color={FWHITE} strokeWidth={3} />}
                </div>
                <span className="text-sm font-bold flex-1 text-left" style={{ color:PLUM }}>Show notified events only</span>
              </button>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color:MUTED }}>Wishlist CCAs</p>
              {wishlistCcas.length === 0 ? (
                <p className="text-sm" style={{ color:MUTED }}>No wishlisted CCAs yet.</p>
              ) : (
                <div className="space-y-2">
                  {wishlistCcas.map(cca => {
                    const on = filterCcaIds.has(cca.id);
                    return (
                      <button
                        key={cca.id}
                        onClick={() => toggleFilterCca(cca.id)}
                        className="w-full flex items-center gap-3 rounded-2xl px-4 py-3.5"
                        style={{ backgroundColor:WHITE, border:`1.5px solid ${on ? CORAL : BORDER}` }}
                      >
                        <div
                          className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                          style={{ borderColor:on ? CORAL : BORDER, backgroundColor:on ? CORAL : "transparent" }}
                        >
                          {on && <Check size={11} color={FWHITE} strokeWidth={3} />}
                        </div>
                        <span className="text-sm font-bold flex-1 text-left" style={{ color:PLUM }}>{cca.name}</span>
                        <span className="text-xs" style={{ color:MUTED }}>{cca.category}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="px-5 py-5 flex-shrink-0" style={{ borderTop:`1px solid ${BORDER}` }}>
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full py-3.5 rounded-2xl text-sm font-black"
              style={{ backgroundColor:PLUM, color:FWHITE }}
            >
              Apply Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Edit Profile
// ══════════════════════════════════════════════════════════════════════════════
function EditProfilePage({ initialUsername, initialAvatar, onSave, onBack }: {
  initialUsername:string; initialAvatar:string;
  onSave:(username:string, avatar:string)=>void; onBack:()=>void;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const [username, setUsername] = React.useState(initialUsername);
  const [avatar,   setAvatar]   = React.useState(initialAvatar);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const goBack = () => { setVis(false); setTimeout(onBack, 280); };
  const valid = username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_]+$/.test(username);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => { if (ev.target?.result) setAvatar(ev.target.result as string); };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="absolute inset-0 z-[60] flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <BackBtn onPress={goBack} />
        <h1 className="text-lg font-black" style={{ color:PLUM }}>Edit Profile</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-4" style={hideScroll}>
        {/* Avatar preview + upload */}
        <div className="flex flex-col items-center py-6 gap-3">
          <AvatarCircle av={avatar} size="w-24 h-24" textSize="text-4xl" />
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-bold"
            style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color:PLUM }}
          >
            <Camera size={14} color={PLUM} />
            Upload Photo
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-px" style={{ backgroundColor:BORDER }} />
          <p className="text-xs font-bold" style={{ color:MUTED }}>or choose an emoji</p>
          <div className="flex-1 h-px" style={{ backgroundColor:BORDER }} />
        </div>

        {/* Avatar grid */}
        <div className="grid grid-cols-6 gap-2 mb-5">
          {AVATAR_OPTIONS.map(a => (
            <button
              key={a}
              onClick={() => setAvatar(a)}
              className="text-2xl rounded-2xl h-12 flex items-center justify-center transition-all active:scale-90"
              style={{
                backgroundColor: avatar === a ? CORAL : WHITE,
                border: `2px solid ${avatar === a ? PLUM : BORDER}`,
              }}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Username */}
        <p className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color:MUTED }}>Username</p>
        <div className="rounded-2xl px-4 py-3.5 flex items-center gap-2 mb-2" style={{ backgroundColor:WHITE, border:`2px solid ${valid ? MINT : BORDER}` }}>
          <span className="text-base font-bold" style={{ color:MUTED }}>@</span>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            maxLength={20}
            className="flex-1 bg-transparent text-base font-bold outline-none"
            style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
          />
          <Pencil size={15} color={MUTED} />
        </div>
        <p className="text-xs mb-5" style={{ color: valid ? MINT : MUTED }}>
          {valid ? "✓ Valid username" : "3–20 characters, letters, numbers, underscores only."}
        </p>
      </div>

      <div className="px-5 pb-8 pt-3 flex-shrink-0" style={{ borderTop:`1.5px solid ${BORDER}` }}>
        <button
          onClick={() => { if (valid) { onSave(username, avatar); goBack(); } }}
          disabled={!valid}
          className="w-full py-4 rounded-2xl font-black text-base active:scale-[0.98] transition-transform"
          style={{ backgroundColor: valid ? CORAL : BORDER, color: valid ? PLUM : MUTED }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Notification Settings
// ══════════════════════════════════════════════════════════════════════════════
function NotificationSettingsPage({ onBack }: { onBack:()=>void }) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  const [settings, setSettings] = React.useState({
    deadlines:   false,
    newEvents:   false,
    wishlist:    false,
    reviewReply: false,
  });
  const [savedBanner, setSavedBanner] = React.useState(false);

  const handleSave = () => {
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 2000);
  };

  const Toggle = ({ on, onToggle }: { on:boolean; onToggle:()=>void }) => (
    <button
      onClick={e => { e.stopPropagation(); onToggle(); }}
      className="w-11 h-6 rounded-full transition-colors flex-shrink-0 relative"
      style={{ backgroundColor: on ? CORAL : BORDER }}
    >
      <div
        className="absolute top-1 w-4 h-4 rounded-full transition-transform"
        style={{ backgroundColor:FWHITE, transform: on ? "translateX(22px)" : "translateX(4px)" }}
      />
    </button>
  );

  const Row = ({ label, desc, value, field }: { label:string; desc:string; value:boolean; field:keyof typeof settings }) => (
    <div className="flex items-center gap-3 py-4" style={{ borderTop:`1px solid ${BORDER}` }}>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold" style={{ color:PLUM }}>{label}</p>
        <p className="text-xs mt-0.5" style={{ color:MUTED }}>{desc}</p>
      </div>
      <Toggle on={value} onToggle={() => setSettings(s => ({ ...s, [field]: !s[field] }))} />
    </div>
  );

  return (
    <div
      className="absolute inset-0 z-[60] flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <BackBtn onPress={goBack} />
        <h1 className="text-lg font-black" style={{ color:PLUM }}>Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-6" style={hideScroll}>
        <p className="text-xs mt-5 mb-1 font-black uppercase tracking-wider" style={{ color:MUTED }}>CCA Alerts</p>
        <div className="rounded-2xl px-4" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <Row label="Recruitment Deadlines" desc="Alerts when a CCA you saved is closing recruitment" value={settings.deadlines} field="deadlines" />
          <Row label="New Events" desc="Info sessions, auditions and open days from CCAs you follow" value={settings.newEvents} field="newEvents" />
          <Row label="Wishlist Updates" desc="Changes to recruitment details for wishlisted CCAs" value={settings.wishlist} field="wishlist" />
        </div>

        <p className="text-xs mt-5 mb-1 font-black uppercase tracking-wider" style={{ color:MUTED }}>Social</p>
        <div className="rounded-2xl px-4" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <Row label="Review Replies" desc="When someone replies to your CCA reviews" value={settings.reviewReply} field="reviewReply" />
        </div>
      </div>

      <div className="px-5 pb-8 pt-3 flex-shrink-0" style={{ borderTop:`1.5px solid ${BORDER}` }}>
        {savedBanner && (
          <div className="mb-3 py-2.5 rounded-xl text-center text-sm font-black" style={{ backgroundColor:LIGHT_MINT, color:MINT }}>
            Saved!
          </div>
        )}
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-2xl font-black text-base active:scale-[0.98] transition-transform"
          style={{ backgroundColor:CORAL, color:PLUM }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Deactivate Account
// ══════════════════════════════════════════════════════════════════════════════
function DeactivateAccountPage({ onBack, onConfirm }: { onBack:()=>void; onConfirm:()=>void }) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const [step, setStep] = React.useState<"warn"|"confirm">("warn");
  const [typed, setTyped] = React.useState("");
  const TARGET = "DEACTIVATE";
  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  return (
    <div
      className="absolute inset-0 z-[70] flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <BackBtn onPress={goBack} />
        <h1 className="text-lg font-black" style={{ color:"#B91C1C" }}>Deactivate Account</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-10" style={hideScroll}>
        {step === "warn" ? (
          <>
            {/* Warning icon */}
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor:"#FFE4E4" }}>
                <AlertTriangle size={36} color="#B91C1C" />
              </div>
            </div>
            <h2 className="text-xl font-black text-center mb-2" style={{ color:PLUM }}>Are you sure?</h2>
            <p className="text-sm text-center mb-6" style={{ color:MUTED }}>
              Deactivating your account will remove your profile, wishlist, and all activity from ok!cca. This cannot be undone.
            </p>

            <div className="rounded-2xl p-4 mb-6" style={{ backgroundColor:DANGER_BG, border:"1.5px solid #EF9797" }}>
              <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color:"#B91C1C" }}>What you will lose</p>
              {["Your saved wishlist and CCA matches","All reviews and contributions you made","Your onboarding preferences and history","Access to your account permanently"].map(item => (
                <div key={item} className="flex items-start gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor:"#B91C1C" }} />
                  <p className="text-xs" style={{ color:"#B91C1C" }}>{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep("confirm")}
              className="w-full py-3.5 rounded-2xl font-black text-sm mb-3"
              style={{ backgroundColor:"#B91C1C", color:FWHITE }}
            >
              Continue to Deactivate
            </button>
            <button
              onClick={goBack}
              className="w-full py-3.5 rounded-2xl font-black text-sm"
              style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color:PLUM }}
            >
              Keep My Account
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-center mt-8 mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor:"#FFE4E4" }}>
                <AlertTriangle size={36} color="#B91C1C" />
              </div>
            </div>
            <h2 className="text-xl font-black text-center mb-2" style={{ color:PLUM }}>Final Confirmation</h2>
            <p className="text-sm text-center mb-6" style={{ color:MUTED }}>
              Type <span className="font-black" style={{ color:"#B91C1C" }}>{TARGET}</span> below to confirm you want to permanently deactivate your account.
            </p>

            <input
              type="text"
              value={typed}
              onChange={e => setTyped(e.target.value)}
              placeholder={TARGET}
              className="w-full px-4 py-3.5 rounded-2xl text-sm font-bold mb-5 outline-none"
              style={{
                backgroundColor:WHITE,
                border:`1.5px solid ${typed === TARGET ? "#B91C1C" : BORDER}`,
                color:PLUM,
              }}
            />

            <button
              disabled={typed !== TARGET}
              onClick={() => { setVis(false); setTimeout(onConfirm, 280); }}
              className="w-full py-3.5 rounded-2xl font-black text-sm mb-3 transition-opacity"
              style={{
                backgroundColor:"#B91C1C",
                color:FWHITE,
                opacity: typed === TARGET ? 1 : 0.4,
                cursor: typed === TARGET ? "pointer" : "not-allowed",
              }}
            >
              Permanently Deactivate
            </button>
            <button
              onClick={() => setStep("warn")}
              className="w-full py-3.5 rounded-2xl font-black text-sm"
              style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color:PLUM }}
            >
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Manage Account (settings overlay)
// ══════════════════════════════════════════════════════════════════════════════
function ManageAccountPage({ onBack, onSignOut, username, avatar, onUpdateProfile, userEmail }: {
  onBack:()=>void; onSignOut:()=>void; username:string; avatar:string; userEmail?:string;
  onUpdateProfile:(username:string, avatar:string)=>void;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const { isDark, setIsDark } = useDark();
  const [showEditProfile, setShowEditProfile] = React.useState(false);
  const [showNotifications, setShowNotifSettings] = React.useState(false);
  const [showDeactivate, setShowDeactivate] = React.useState(false);
  const [showAboutApp, setShowAboutApp] = React.useState(false);

  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  const SettingRow = ({
    icon: Icon, label, onPress, right, danger=false,
  }: {
    icon: React.ElementType; label: string; onPress?: ()=>void;
    right?: React.ReactNode; danger?: boolean;
  }) => (
    <button
      onClick={onPress}
      className="w-full flex items-center gap-3.5 px-4 py-4 text-left"
      style={{ borderTop:`1px solid ${BORDER}` }}
    >
      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: danger ? DANGER_BG : LIGHT_PEACH }}>
        <Icon size={15} color={danger ? "#B91C1C" : PLUM} />
      </div>
      <span className="flex-1 text-sm font-semibold" style={{ color: danger ? "#B91C1C" : PLUM }}>{label}</span>
      {right ?? <ChevronRight size={15} color={MUTED} />}
    </button>
  );

  const Toggle = ({ on, onToggle }: { on:boolean; onToggle:()=>void }) => (
    <button
      onClick={e => { e.stopPropagation(); onToggle(); }}
      className="w-11 h-6 rounded-full transition-colors flex-shrink-0 relative"
      style={{ backgroundColor: on ? CORAL : BORDER }}
    >
      <div
        className="absolute top-1 w-4 h-4 rounded-full transition-transform"
        style={{ backgroundColor:FWHITE, transform: on ? "translateX(22px)" : "translateX(4px)" }}
      />
    </button>
  );

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <BackBtn onPress={goBack} />
        <h1 className="text-lg font-black" style={{ color:PLUM }}>Manage Account</h1>
      </div>

      <div className="flex-1 overflow-y-auto" style={hideScroll}>
        {/* Profile row */}
        <div className="px-5 pt-5 pb-4">
          <button
            onClick={() => setShowEditProfile(true)}
            className="w-full flex items-center gap-4 rounded-2xl p-4 text-left active:scale-[0.98] transition-transform"
            style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}
          >
            <AvatarCircle av={avatar} size="w-12 h-12" textSize="text-2xl" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black" style={{ color:PLUM }}>@{username}</p>
              <p className="text-xs mt-0.5" style={{ color:MUTED }}>{userEmail || NUS_EMAIL}</p>
            </div>
            <ChevronRight size={15} color={MUTED} className="flex-shrink-0" />
          </button>
        </div>

        {/* Account section */}
        <div className="px-5 mb-5">
          <p className="text-xs font-black mb-2 uppercase tracking-wider" style={{ color:MUTED }}>Account</p>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <SettingRow icon={Bell} label="Notifications" onPress={() => setShowNotifSettings(true)}
              right={<div className="flex items-center gap-1.5"><span className="text-xs font-bold" style={{ color:MUTED }}>Off</span><ChevronRight size={15} color={MUTED} /></div>}
            />
            <SettingRow
              icon={Star}
              label="Dark Mode"
              right={<Toggle on={isDark} onToggle={() => setIsDark(v => !v)} />}
            />
          </div>
        </div>

        {/* Other settings section */}
        <div className="px-5 mb-5">
          <p className="text-xs font-black mb-2 uppercase tracking-wider" style={{ color:MUTED }}>Other Settings</p>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <SettingRow icon={Info} label="About App" onPress={() => setShowAboutApp(true)} />
            <SettingRow icon={HelpCircle} label="Help / FAQ" />
            <SettingRow icon={AlertTriangle} label="Deactivate Account" danger onPress={() => setShowDeactivate(true)} />
          </div>
        </div>
      </div>

      {showEditProfile && (
        <EditProfilePage
          initialUsername={username}
          initialAvatar={avatar}
          onSave={onUpdateProfile}
          onBack={() => setShowEditProfile(false)}
        />
      )}
      {showNotifications && (
        <NotificationSettingsPage onBack={() => setShowNotifSettings(false)} />
      )}
      {showDeactivate && (
        <DeactivateAccountPage
          onBack={() => setShowDeactivate(false)}
          onConfirm={onSignOut}
        />
      )}

      {/* About App full-screen overlay */}
      {showAboutApp && (
        <div className="absolute inset-0 z-[80] flex flex-col" style={{ backgroundColor:CREAM }}>
          <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
            <button
              onClick={() => setShowAboutApp(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ backgroundColor:CREAM }}
            >
              <X size={18} color={PLUM} />
            </button>
            <h1 className="text-lg font-black" style={{ color:PLUM }}>About ok!cca</h1>
          </div>
          <iframe
            src="https://infernoxthecat.github.io/okcca/"
            className="flex-1 w-full border-none"
            title="About ok!cca"
          />
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Refine Preferences
// ══════════════════════════════════════════════════════════════════════════════
function RefinePreferencesPage({ initialInterests, initialCommitment, onSave, onBack }: {
  initialInterests:Set<string>; initialCommitment:string;
  onSave:(interests:Set<string>, commitment:string)=>void; onBack:()=>void;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const [selected, setSelected] = React.useState<Set<string>>(new Set(initialInterests));
  const [commitment, setCommitment] = React.useState(initialCommitment);
  const [query, setQuery] = React.useState("");

  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  const toggle = (id:string) => setSelected(prev => {
    const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
  });

  const visible  = INTERESTS.filter(i => !query || i.label.toLowerCase().includes(query.toLowerCase()));
  const popular  = visible.filter(i => i.popular);
  const more     = visible.filter(i => !i.popular);

  const commitOpts = [
    { id:"explore", label:"Explore",  desc:"Try things out, casual commitment",         Icon:Sprout, iconColor:PLUM,   bg:MINT  },
    { id:"commit",  label:"Commit",   desc:"Regular sessions and activities",            Icon:Zap,    iconColor:PLUM,   bg:GOLD  },
    { id:"immerse", label:"Immerse",  desc:"Deep involvement, competitions, leadership", Icon:Flame,  iconColor:FWHITE, bg:CORAL },
  ];

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <BackBtn onPress={goBack} />
        <h1 className="text-lg font-black" style={{ color:PLUM }}>Refine Preferences</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-4" style={hideScroll}>
        {/* Interests */}
        <p className="text-sm font-black mt-5 mb-1" style={{ color:PLUM }}>What are you into?</p>
        <p className="text-xs mb-3" style={{ color:MUTED }}>Choose as many as you like.</p>

        <div className="flex items-center gap-2 rounded-2xl px-3 py-2.5 mb-4" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <Search size={14} color={MUTED} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search interests"
            className="flex-1 bg-transparent text-sm outline-none" style={{ color:PLUM }} />
          {query && <button onClick={() => setQuery("")}><X size={12} color={MUTED} /></button>}
        </div>

        {popular.length > 0 && (
          <>
            <p className="text-xs font-bold mb-2" style={{ color:MUTED }}>Popular</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {popular.map(i => {
                const on = selected.has(i.id);
                return (
                  <button key={i.id} onClick={() => toggle(i.id)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95"
                    style={{ backgroundColor: on ? CORAL : CREAM, color: on ? WHITE : PLUM, border:`1.5px solid ${on ? CORAL : BORDER}` }}>
                    {i.label}
                  </button>
                );
              })}
            </div>
          </>
        )}
        {more.length > 0 && (
          <>
            <p className="text-xs font-bold mb-2" style={{ color:MUTED }}>More</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {more.map(i => {
                const on = selected.has(i.id);
                return (
                  <button key={i.id} onClick={() => toggle(i.id)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95"
                    style={{ backgroundColor: on ? CORAL : CREAM, color: on ? WHITE : PLUM, border:`1.5px solid ${on ? CORAL : BORDER}` }}>
                    {i.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Commitment */}
        <p className="text-sm font-black mb-1 mt-2" style={{ color:PLUM }}>How involved do you want to be?</p>
        <p className="text-xs mb-4" style={{ color:MUTED }}>You can always change this later.</p>
        <div className="space-y-3 mb-6">
          {commitOpts.map(({ id, label, desc, Icon, iconColor, bg }) => {
            const on = commitment === id;
            return (
              <button key={id} onClick={() => setCommitment(id)} className="w-full rounded-2xl p-4 flex items-center gap-4 text-left transition-all active:scale-[0.98]" style={{
                backgroundColor: on ? PLUM_SOFT : CREAM, border:`2px solid ${on ? bg : BORDER}`,
              }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor:bg }}>
                  <Icon size={20} color={iconColor} />
                </div>
                <div className="flex-1">
                  <p className="font-black text-sm" style={{ color:PLUM }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color:MUTED }}>{desc}</p>
                </div>
                <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: on ? PLUM : BORDER, backgroundColor: on ? PLUM : "transparent" }}>
                  {on && <Check size={11} color={WHITE} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 pb-8 pt-3 flex-shrink-0" style={{ borderTop:`1.5px solid ${BORDER}` }}>
        <button
          onClick={() => { onSave(selected, commitment); goBack(); }}
          className="w-full py-4 rounded-2xl font-black text-base active:scale-[0.98] transition-transform"
          style={{ backgroundColor:CORAL, color:PLUM }}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// TAB: Profile
// ══════════════════════════════════════════════════════════════════════════════
function ProfileTab({ onSignOut, username, avatar, selectedInterests, commitmentLevel, onUpdateProfile, onUpdateInterests, onUpdateCommitment, onNavigateToInterest, userMemberships, onOpenCca, userEmail }: {
  onSignOut:()=>void; username:string; avatar:string;
  selectedInterests:Set<string>; commitmentLevel:string;
  onUpdateProfile:(username:string, avatar:string)=>void;
  onUpdateInterests:(interests:Set<string>)=>void;
  onUpdateCommitment:(commitment:string)=>void;
  onNavigateToInterest:(label:string)=>void;
  userMemberships?: number[];
  onOpenCca?: (cca:CCA)=>void;
  userEmail?: string;
}) {
  const [showManage, setShowManage] = React.useState(false);
  const [showRefine, setShowRefine] = React.useState(false);

  const memberships = userMemberships && userMemberships.length > 0
    ? userMemberships.map(id => CCAS.find(c => c.id === id)).filter(Boolean) as CCA[]
    : [];

  return (
    <div className="h-full relative overflow-hidden" style={{ backgroundColor:CREAM }}>
      <div className="h-full overflow-y-auto" style={hideScroll}>
        {/* Header */}
        <div className="px-5 pt-14 pb-2">
          <h1 className="text-xl font-black" style={{ color:PLUM }}>Profile</h1>
        </div>

        {/* Centered avatar + identity */}
        <div className="flex flex-col items-center px-5 pb-5 pt-2">
          <AvatarCircle av={avatar} size="w-24 h-24" textSize="text-5xl" />
          <p className="text-xl font-black mb-0.5" style={{ color:PLUM }}>@{username}</p>
          <p className="text-sm mb-3" style={{ color:MUTED }}>{userEmail || NUS_EMAIL}</p>
          <button
            onClick={() => setShowManage(true)}
            className="flex items-center gap-1 text-sm font-bold active:opacity-70"
            style={{ color:PLUM }}
          >
            Manage account <ChevronRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Your preferences */}
        <div className="px-5 mb-5">
          <div className="rounded-2xl p-4" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <p className="text-sm font-black mb-3" style={{ color:PLUM }}>Your Preferences</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedInterests.size > 0
                ? [...selectedInterests].map(id => {
                    const label = INTERESTS.find(i => i.id === id)?.label ?? id;
                    return (
                      <button
                        key={id}
                        onClick={() => onNavigateToInterest(label)}
                        className="text-xs font-bold px-3 py-1.5 rounded-full active:opacity-70 transition-opacity"
                        style={{ backgroundColor:LIGHT_PEACH, color:PEACH }}
                      >
                        {label}
                      </button>
                    );
                  })
                : <span className="text-xs" style={{ color:MUTED }}>No interests selected yet</span>
              }
              {commitmentLevel && (
                <button
                  onClick={() => onNavigateToInterest(commitmentLevel)}
                  className="text-xs font-bold px-3 py-1.5 rounded-full active:opacity-70 transition-opacity"
                  style={{ backgroundColor:LIGHT_GOLD, color:GOLD }}
                >
                  {commitmentLevel.charAt(0).toUpperCase() + commitmentLevel.slice(1)}
                </button>
              )}
            </div>
            <button
              onClick={() => setShowRefine(true)}
              className="flex items-center gap-1 text-sm font-bold active:opacity-70"
              style={{ color:CORAL }}
            >
              Refine your preferences <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* CCA Memberships */}
        <div className="px-5 mb-5">
          <div className="rounded-2xl p-4" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <p className="text-sm font-black mb-3" style={{ color:PLUM }}>CCA Memberships</p>
            {memberships.length === 0 ? (
              <p className="text-xs" style={{ color:MUTED }}>No memberships added yet. Update during onboarding or via Preferences.</p>
            ) : (
              <div className="space-y-2">
                {memberships.map((cca, i) => (
                  <div key={cca.id} className="relative flex items-start gap-3">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center pt-1 flex-shrink-0" style={{ width:14 }}>
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor:CORAL }} />
                    </div>
                    {/* Connector line (absolute, not inside dot column) */}
                    {i < memberships.length - 1 && (
                      <div className="absolute w-0.5" style={{ backgroundColor:BORDER, left:5, top:14, bottom:0 }} />
                    )}
                    <button
                      className="flex-1 pb-2 text-left"
                      onClick={() => onOpenCca?.(cca)}
                    >
                      <p className="text-sm font-black leading-snug" style={{ color:PLUM }}>{cca.name}</p>
                      <p className="text-xs mt-0.5" style={{ color:MUTED }}>{cca.category}</p>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{
                        backgroundColor:LIGHT_MINT,
                        color:MINT,
                      }}>
                        AY25/26 Member
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sign Out */}
        <div className="px-5 pb-8">
          <button
            onClick={onSignOut}
            className="w-full py-4 rounded-2xl font-black text-sm active:scale-[0.98] transition-transform"
            style={{ backgroundColor:WHITE, border:`2px solid ${BORDER}`, color:"#B91C1C" }}
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Manage Account overlay */}
      {showManage && (
        <ManageAccountPage
          onBack={() => setShowManage(false)}
          onSignOut={onSignOut}
          username={username}
          avatar={avatar}
          onUpdateProfile={onUpdateProfile}
          userEmail={userEmail}
        />
      )}

      {/* Refine Preferences overlay */}
      {showRefine && (
        <RefinePreferencesPage
          initialInterests={selectedInterests}
          initialCommitment={commitmentLevel}
          onSave={(interests, commitment) => {
            onUpdateInterests(interests);
            onUpdateCommitment(commitment);
          }}
          onBack={() => setShowRefine(false)}
        />
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: Notifications
// ══════════════════════════════════════════════════════════════════════════════
function NotificationsPage({ onBack, read, setRead, items = [] }: {
  onBack:()=>void;
  read: Set<number>;
  setRead: React.Dispatch<React.SetStateAction<Set<number>>>;
  items?: { id:number; type:string; ccaName:string; body:string; time:string; read:boolean }[];
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const [activeTab, setActiveTab] = React.useState<"updates"|"messages">("updates");

  const goBack = () => { setVis(false); setTimeout(onBack, 280); };

  const { isDark } = useDark();
  const tabUnreadCount = activeTab === "updates"
    ? items.filter(n => !read.has(n.id)).length
    : 0;
  const unreadCount = items.filter(n => !read.has(n.id)).length;

  const iconForType = (type: string) => {
    if (type === "deadline") return { bg: isDark ? "rgba(232,120,98,0.18)" : "#FFE8E0", icon:Clock, color:CORAL };
    if (type === "event")    return { bg: isDark ? "rgba(59,130,246,0.18)" : "#E8F2FF", icon:Calendar, color:"#3B82F6" };
    if (type === "wishlist") return { bg:PEACH, icon:Heart, color:PLUM };
    return { bg:GOLD, icon:Bell, color:PLUM };
  };

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Header */}
      <div className="px-5 pt-14 pb-0 flex items-center gap-3 flex-shrink-0">
        <BackBtn onPress={goBack} />
        <h1 className="flex-1 text-lg font-black" style={{ color:PLUM }}>Notifications</h1>
        {tabUnreadCount > 0 && (
          <button
            onClick={() => {
              if (activeTab === "updates") {
                setRead(new Set(items.map(n => n.id)));
              }
            }}
            className="text-xs font-bold"
            style={{ color:MUTED }}
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Tab bar */}
      <div className="flex px-5 pt-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        {/* Updates tab */}
        <button
          onClick={() => setActiveTab("updates")}
          className="relative flex items-center gap-1.5 px-1 pb-3 mr-6"
        >
          <span
            className="text-sm font-black"
            style={{ color: activeTab === "updates" ? PLUM : MUTED }}
          >
            Updates
          </span>
          {unreadCount > 0 && (
            <span
              className="text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor:CORAL, color:WHITE }}
            >
              {unreadCount}
            </span>
          )}
          {activeTab === "updates" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor:PLUM }} />
          )}
        </button>

        {/* Messages tab */}
        <button
          onClick={() => setActiveTab("messages")}
          className="relative px-1 pb-3"
        >
          <span
            className="text-sm font-black"
            style={{ color: activeTab === "messages" ? PLUM : MUTED }}
          >
            Messages
          </span>
          {activeTab === "messages" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor:PLUM }} />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto" style={hideScroll}>
        {activeTab === "updates" ? (
          <div className="px-5 py-4 space-y-3">
            {items.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 px-8">
                <p className="text-5xl mb-4">🔔</p>
                <p className="text-base font-black mb-1.5 text-center" style={{ color:PLUM }}>No notifications yet</p>
                <p className="text-sm text-center leading-relaxed" style={{ color:MUTED }}>
                  Updates on CCA events and deadlines will appear here.
                </p>
              </div>
            )}
            {items.map(n => {
              const isRead = read.has(n.id);
              const typeInfo = iconForType(n.type);
              const TypeIcon = typeInfo.icon;
              return (
                <button
                  key={n.id}
                  onClick={() => setRead(prev => { const s = new Set(prev); s.add(n.id); return s; })}
                  className="w-full flex items-start gap-3.5 rounded-2xl p-4 text-left active:scale-[0.98] transition-transform"
                  style={{
                    backgroundColor: isRead ? WHITE : LIGHT_GOLD,
                    border:`1.5px solid ${isRead ? BORDER : PEACH}`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor:typeInfo.bg }}
                  >
                    <TypeIcon size={17} color={typeInfo.color} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-black" style={{ color:PLUM }}>{n.ccaName}</p>
                      <span className="text-[10px] flex-shrink-0" style={{ color:MUTED }}>{n.time}</span>
                    </div>
                    <p className="text-[13px] mt-0.5 leading-relaxed" style={{ color:MUTED }}>{n.body}</p>
                  </div>

                  {/* Unread dot */}
                  {!isRead && (
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor:CORAL }} />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 px-8">
            <p className="text-5xl mb-4">💬</p>
            <p className="text-base font-black mb-1.5 text-center" style={{ color:PLUM }}>No messages yet</p>
            <p className="text-sm text-center leading-relaxed" style={{ color:MUTED }}>
              When someone replies to your reviews, their messages will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CCA BOTTOM SHEET
// ══════════════════════════════════════════════════════════════════════════════
function CcaBottomSheet({ cca, saved, onSave, onClose, onViewDetail }: {
  cca: CCA; saved: boolean; onSave: ()=>void; onClose: ()=>void; onViewDetail: ()=>void;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);

  const close = () => { setVis(false); setTimeout(onClose, 280); };
  const view  = () => { setVis(false); setTimeout(onViewDetail, 280); };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{ backgroundColor: vis ? "rgba(0,0,0,0.45)" : "transparent" }}
        onClick={close}
      />
      {/* Sheet */}
      <div
        className="relative rounded-t-3xl overflow-hidden flex flex-col transition-transform duration-300"
        style={{ backgroundColor:CREAM, transform: vis ? "translateY(0)" : "translateY(100%)", maxHeight:"82%" }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor:BORDER }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
          <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor:CREAM }}>
            <X size={16} color={PLUM} />
          </button>
          <p className="font-black text-base" style={{ color:PLUM }}>{cca.name}</p>
          <div className="w-8" />
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-4 pb-4" style={hideScroll}>
          {/* Hero image */}
          <div className="rounded-2xl h-44 overflow-hidden mb-4 relative" style={{ backgroundColor:cca.bgColor }}>
            <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Info rows */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <CommitBadge level={cca.commitment} />
            <UrgencyPill days={cca.deadlineDays} />
            <span className="text-[10px] font-semibold" style={{ color:MUTED }}>{cca.members} members</span>
          </div>

          {/* About section */}
          <p className="text-xs font-black mb-1.5" style={{ color:PLUM }}>About</p>
          <p className="text-sm leading-relaxed mb-4" style={{ color:MUTED }}>{cca.description} We welcome members of all backgrounds and experience levels.</p>

          {/* Exco section */}
          {(() => {
            const exco = CCA_EXCO[cca.id];
            if (!exco || exco.length === 0) return null;
            return (
              <div className="mb-4">
                <p className="text-xs font-black mb-2" style={{ color:PLUM }}>Exco</p>
                <div className="space-y-2">
                  {exco.map((e, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl p-2.5" style={{ backgroundColor:WHITE, border:`1px solid ${BORDER}` }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0" style={{ backgroundColor:CORAL, color:FWHITE }}>
                        {e.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black truncate" style={{ color:PLUM }}>{e.name}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor:LIGHT_CORAL, color:CORAL }}>{e.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

  
         
        </div>

        {/* CTA */}
        <div className="px-4 pb-8 pt-3 flex-shrink-0" style={{ borderTop:`1px solid ${BORDER}` }}>
          <button
            onClick={view}
            className="w-full py-3.5 rounded-2xl font-black text-sm active:scale-[0.98] transition-transform"
            style={{ border:`2px solid ${PLUM}`, color:PLUM, backgroundColor:CREAM }}
          >
            Go to Details Page
          </button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CCA DETAIL PAGE — sub-tab components
// ══════════════════════════════════════════════════════════════════════════════
function DetailHomeTab({ cca }: { cca: CCA }) {
  const exco = CCA_EXCO[cca.id] ?? [];
  const handle = cca.name.toLowerCase().replace(/ /g, "");
  return (
    <div className="px-5 py-4 space-y-5 pb-10">
      <section>
        <p className="text-sm font-black mb-2" style={{ color:PLUM }}>Links</p>
        <div className="space-y-1.5">
          <p className="text-sm font-semibold" style={{ color:CORAL }}>IG: @{handle}</p>
          <p className="text-sm font-semibold" style={{ color:CORAL }}>Linktree: linktr.ee/{handle}</p>
        </div>
      </section>
      <section>
        <p className="text-sm font-black mb-3" style={{ color:PLUM }}>Exco</p>
        {exco.length > 0 ? (
          <div className="space-y-2">
            {exco.map((e,i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-3" style={{ backgroundColor:CREAM }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ backgroundColor:CORAL, color:WHITE }}>
                  {e.name[0]}
                </div>
                <div>
                  <p className="text-xs font-black" style={{ color:PLUM }}>{e.name}</p>
                  <p className="text-[11px]" style={{ color:MUTED }}>{e.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {[85,65,75].map((w,i) => (
              <div key={i} className="h-12 rounded-xl" style={{ backgroundColor:BORDER, width:`${w}%` }} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function DetailAboutTab({ cca, username }: { cca: CCA; username?: string }) {
  const commitDesc: Record<string,string> = {
    Explore: "Low to moderate time commitment. Great for exploring new interests casually.",
    Commit:  "Regular sessions 2–3× per week. Members are expected to attend most activities.",
    Immerse: "High commitment with competitions, performances, and leadership responsibilities.",
  };

  const isExcoMember = React.useMemo(() =>
    username ? (CCA_EXCO[cca.id] ?? []).some(e => e.name === username) : false,
    [cca.id, username]
  );

  const [editAbout, setEditAbout] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(
    `${cca.description} We welcome members of all backgrounds and experience levels. Our community is built on mutual support, growth, and a shared passion for what we do.`
  );
  const [editCommit, setEditCommit] = React.useState(false);
  const [commitLevel, setCommitLevel] = React.useState(cca.commitment);

  return (
    <div className="px-5 py-4 space-y-5 pb-10">
      <section>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm font-black" style={{ color:PLUM }}>About</p>
          {isExcoMember && !editAbout && (
            <button onClick={() => setEditAbout(true)} className="opacity-60 active:opacity-100">
              <Pencil size={13} color={PLUM} />
            </button>
          )}
        </div>
        {editAbout ? (
          <div>
            <textarea
              value={aboutText}
              onChange={e => setAboutText(e.target.value)}
              rows={5}
              className="w-full text-sm rounded-xl px-3 py-2.5 outline-none resize-none mb-2"
              style={{ backgroundColor:WHITE, border:`1.5px solid ${CORAL}`, color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
            />
            <div className="flex gap-2">
              <button
                onClick={() => setEditAbout(false)}
                className="flex-1 py-2 rounded-xl text-xs font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}
              >Cancel</button>
              <button
                onClick={() => setEditAbout(false)}
                className="flex-1 py-2 rounded-xl text-xs font-black"
                style={{ backgroundColor:CORAL, color:PLUM }}
              >Save</button>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-relaxed" style={{ color:MUTED }}>{aboutText}</p>
        )}
      </section>
      <section>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm font-black" style={{ color:PLUM }}>Commitment Level</p>
          {isExcoMember && !editCommit && (
            <button onClick={() => setEditCommit(true)} className="opacity-60 active:opacity-100">
              <Pencil size={13} color={PLUM} />
            </button>
          )}
        </div>
        {editCommit ? (
          <div className="space-y-2 mb-2">
            {(["Explore","Commit","Immerse"] as const).map(lvl => (
              <button key={lvl} onClick={() => { setCommitLevel(lvl); setEditCommit(false); }}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left"
                style={{ backgroundColor: commitLevel === lvl ? PLUM_SOFT : WHITE, border:`1.5px solid ${commitLevel === lvl ? PLUM : BORDER}` }}>
                <CommitBadge level={lvl} />
                <span className="text-sm font-semibold" style={{ color:PLUM }}>{commitLevel === lvl ? "Currently selected" : "Select"}</span>
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-2"><CommitBadge level={commitLevel} /></div>
            <p className="text-xs leading-relaxed" style={{ color:MUTED }}>{commitDesc[commitLevel]}</p>
          </>
        )}
      </section>
      <section>
        <p className="text-sm font-black mb-2" style={{ color:PLUM }}>Financial Costs</p>
        {(() => {
          const costs: Record<number, { label:string; amount:string }[]> = {
            1: [{ label:"Annual membership fee", amount:"S$80" }, { label:"Costume & attire", amount:"S$50–120" }],
            2: [{ label:"Annual membership fee", amount:"S$40" }, { label:"Component materials", amount:"S$20–60" }],
            3: [{ label:"Annual membership fee", amount:"S$30" }, { label:"Film & printing", amount:"S$10–40" }],
            4: [{ label:"Annual membership fee", amount:"S$40" }, { label:"Sports equipment", amount:"S$20–50" }],
            5: [{ label:"Annual membership fee", amount:"S$60" }, { label:"Concert attire", amount:"S$40–80" }],
            6: [{ label:"Annual membership fee", amount:"Free" }, { label:"Event transport", amount:"S$5–15" }],
            7: [{ label:"Annual membership fee", amount:"Free" }, { label:"Hackathon food & misc", amount:"S$10–30" }],
            8: [{ label:"Annual membership fee", amount:"S$40" }, { label:"Shuttlecocks & kit", amount:"S$20–40" }],
          };
          const rows = costs[cca.id] ?? [{ label:"Annual membership fee", amount:"Contact CCA for details" }];
          return (
            <div className="space-y-2">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl px-3.5 py-2.5" style={{ backgroundColor:WHITE, border:`1px solid ${BORDER}` }}>
                  <span className="text-xs" style={{ color:MUTED }}>{r.label}</span>
                  <span className="text-xs font-bold" style={{ color:PLUM }}>{r.amount}</span>
                </div>
              ))}
            </div>
          );
        })()}
      </section>
      <p className="text-xs" style={{ color:MUTED }}>Information last updated Aug 2026</p>
    </div>
  );
}

// ── Event Detail Page ─────────────────────────────────────────────────────────
type EventDetailData = { title: string; subtitle?: string; date: string; time: string; venue?: string };

function EventDetailPage({ event, onBack }: { event: EventDetailData; onBack: ()=>void }) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const goBack = () => { setVis(false); setTimeout(onBack, 260); };

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col transition-transform duration-[260ms]"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      <div className="px-4 pt-14 pb-3 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <button onClick={goBack} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
        </button>
        <p className="text-base font-black" style={{ color:PLUM }}>Event Details</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6" style={hideScroll}>
        <p className="text-2xl font-black leading-tight mb-1" style={{ color:PLUM }}>{event.title}</p>
        {event.subtitle && <p className="text-sm mb-6" style={{ color:MUTED }}>{event.subtitle}</p>}
        {!event.subtitle && <div className="mb-6" />}

        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor:LIGHT_CORAL }}>
              <Calendar size={18} color={CORAL} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color:MUTED }}>Date</p>
              <p className="text-sm font-black mt-0.5" style={{ color:PLUM }}>{event.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor:LIGHT_PEACH }}>
              <Clock size={18} color={PEACH} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color:MUTED }}>Time</p>
              <p className="text-sm font-black mt-0.5" style={{ color:PLUM }}>{event.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor:LIGHT_MINT }}>
              <MapPin size={18} color={MINT} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide" style={{ color:MUTED }}>Venue</p>
              <p className="text-sm font-black mt-0.5" style={{ color: event.venue ? PLUM : MUTED }}>{event.venue ?? "TBA"}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5">
          <p className="text-[11px] font-bold uppercase tracking-wide mb-3" style={{ color:MUTED }}>Description</p>
          <div className="rounded-2xl p-4 space-y-2.5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            {[90, 75, 100, 60, 85, 45].map((w, i) => (
              <div key={i} className="h-2.5 rounded-full" style={{ width:`${w}%`, backgroundColor:BORDER }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailEventsTab({ cca, notifiedDetailEvts, setNotifiedDetailEvts, removedEvtKeys, setRemovedEvtKeys, onOpenEvent }: {
  cca: CCA;
  notifiedDetailEvts?: Set<string>;
  setNotifiedDetailEvts?: React.Dispatch<React.SetStateAction<Set<string>>>;
  removedEvtKeys?: Set<string>;
  setRemovedEvtKeys?: React.Dispatch<React.SetStateAction<Set<string>>>;
  onOpenEvent?: (ev: EventDetailData) => void;
}) {
  const { isDark } = useDark();
  const events = CCA_DETAIL_EVENTS[cca.id] ?? [
    { name:"Info Session",  date:"20 Aug 2026", time:"6:00pm – 7:30pm" },
    { name:"Open Trial",    date:"3 Sep 2026",  time:"5:00pm – 7:00pm" },
  ];

  const toggleEvt = (key: string) => {
    if (!setNotifiedDetailEvts) return;
    const [ccaIdStr, idxStr] = key.split("-");
    const evKey = String(-(parseInt(ccaIdStr) * 100 + parseInt(idxStr)));
    setNotifiedDetailEvts(prev => {
      const n = new Set(prev);
      if (n.has(key)) {
        n.delete(key);
      } else {
        n.add(key);
        // If this event was manually removed, un-remove it
        if (setRemovedEvtKeys && removedEvtKeys?.has(evKey)) {
          setRemovedEvtKeys(p => { const m = new Set(p); m.delete(evKey); return m; });
        }
      }
      return n;
    });
  };

  const cardBg   = isDark ? "#2A2A2A" : LIGHT_GOLD;
  const bellBg   = isDark ? "rgba(255,255,255,0.10)" : LIGHT_PEACH;

  return (
    <div className="px-5 py-4 pb-10">
      <p className="text-base font-black mb-4" style={{ color:PLUM }}>Upcoming Events</p>
      <div className="space-y-3">
        {events.map((e,i) => {
          const key = `${cca.id}-${i}`;
          const on = notifiedDetailEvts ? notifiedDetailEvts.has(key) : false;
          return (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl p-4 cursor-pointer active:opacity-80 transition-opacity"
              style={{ backgroundColor:cardBg, border:`1.5px solid ${BORDER}` }}
              onClick={() => onOpenEvent?.({ title: e.name, subtitle: cca.name, date: e.date, time: e.time })}
            >
              <div className="flex-1">
                <p className="text-sm font-black" style={{ color:PLUM }}>{e.name}</p>
                <p className="text-xs mt-0.5" style={{ color:MUTED }}>{e.date}, {e.time}</p>
              </div>
              <button
                onClick={ev => { ev.stopPropagation(); toggleEvt(key); }}
                className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
                style={{ backgroundColor: on ? CORAL : bellBg }}
              >
                {on
                  ? <BellRing size={15} color={FWHITE} style={{ transform:"rotate(-15deg)" }} />
                  : <Bell size={15} color={PLUM} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ReportPage({ review, onBack, onBackToCca }: { review: typeof REVIEW_DATA[0]; onBack: ()=>void; onBackToCca?: ()=>void }) {
  const [cat, setCat] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submittedCat, setSubmittedCat] = React.useState("");
  const [submittedDesc, setSubmittedDesc] = React.useState("");

  const handleSubmit = () => {
    setSubmittedCat(cat);
    setSubmittedDesc(desc);
    setSubmitted(true);
  };

  if (submitted) {
    const backFn = onBackToCca ?? onBack;
    return (
      <div className="px-5 py-4 pb-10">
        <div className="flex items-center gap-2 mb-6">
          <button onClick={backFn} className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
            <ChevronLeft size={16} color={PLUM} strokeWidth={2.5} />
          </button>
          <p className="text-base font-black" style={{ color:PLUM }}>Report Submitted</p>
        </div>
        {/* Thank-you banner */}
        <div className="rounded-2xl p-5 mb-5 flex flex-col items-center text-center" style={{ backgroundColor:LIGHT_MINT }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor:MINT }}>
            <Check size={22} color={FWHITE} strokeWidth={2.5} />
          </div>
          <p className="text-base font-black mb-1" style={{ color:PLUM }}>Thank you for your feedback!</p>
          <p className="text-xs leading-relaxed" style={{ color:MUTED }}>{"We've received your report and will review it shortly."}</p>
        </div>
        {/* Reported review */}
        <p className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color:MUTED }}>Reported Review</p>
        <div className="rounded-2xl p-3.5 mb-5" style={{ backgroundColor:LIGHT_PEACH, border:`1.5px solid ${BORDER}` }}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor:CORAL, color:FWHITE }}>{review.user[0].toUpperCase()}</div>
            <p className="text-xs font-black" style={{ color:PLUM }}>{review.user}</p>
          </div>
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color:MUTED }}>{review.text}</p>
        </div>
        {/* Report details */}
        <p className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color:MUTED }}>Report Details</p>
        <div className="rounded-2xl overflow-hidden mb-6" style={{ border:`1.5px solid ${BORDER}` }}>
          <div className="px-4 py-3" style={{ backgroundColor:WHITE, borderBottom:`1px solid ${BORDER}` }}>
            <p className="text-[11px]" style={{ color:MUTED }}>Category</p>
            <p className="text-sm font-black mt-0.5" style={{ color:PLUM }}>{submittedCat || "Not specified"}</p>
          </div>
          <div className="px-4 py-3" style={{ backgroundColor:WHITE }}>
            <p className="text-[11px]" style={{ color:MUTED }}>Description</p>
            <p className="text-sm mt-0.5 leading-relaxed" style={{ color:PLUM }}>{submittedDesc || "No description provided."}</p>
          </div>
        </div>
        <button
          className="w-full py-3.5 rounded-2xl font-black text-sm active:scale-[0.98] transition-transform"
          style={{ backgroundColor:PLUM, color:FWHITE }}
          onClick={backFn}
        >
          Back to CCA Profile
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 py-4 pb-10">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={16} color={PLUM} strokeWidth={2.5} />
        </button>
        <p className="text-base font-black" style={{ color:PLUM }}>Report This Review</p>
      </div>
      {/* Review preview */}
      <div className="rounded-2xl p-3.5 mb-5" style={{ backgroundColor:LIGHT_PEACH }}>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor:CORAL, color:FWHITE }}>{review.user[0].toUpperCase()}</div>
          <p className="text-xs font-black" style={{ color:PLUM }}>{review.user}</p>
        </div>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color:MUTED }}>{review.text}</p>
      </div>
      <p className="text-sm font-black mb-3" style={{ color:PLUM }}>Tell us what happened?</p>
      <p className="text-xs mb-1.5" style={{ color:MUTED }}>Category</p>
      <div className="relative mb-3">
        <select value={cat} onChange={e => setCat(e.target.value)} className="w-full text-sm rounded-xl px-3 py-3 outline-none appearance-none" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color: cat ? PLUM : MUTED }}>
          <option value="">Select a category</option>
          {["Misinformation","Inappropriate content","Spam","Harassment","Other"].map(o => <option key={o}>{o}</option>)}
        </select>
        <ChevronRight size={14} color={MUTED} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90" />
      </div>
      <p className="text-xs mb-1.5" style={{ color:MUTED }}>Description</p>
      <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Describe what you saw…" rows={4} className="w-full text-sm rounded-xl px-3 py-3 outline-none resize-none mb-5" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}`, color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }} />
      <button
        className="w-full py-3.5 rounded-2xl font-black text-sm active:scale-[0.98] transition-transform"
        style={{ backgroundColor:PLUM, color:FWHITE }}
        onClick={handleSubmit}
      >
        Submit Report
      </button>
    </div>
  );
}

// ── Review Thread Page ────────────────────────────────────────────────────────
function ReviewThreadPage({ review, onBack }: { review: typeof REVIEW_DATA[0]; onBack: ()=>void }) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);
  const { isDark } = useDark();

  const [replyText, setReplyText] = React.useState("");
  const [replyPosition, setReplyPosition] = React.useState("");
  const [replyTarget, setReplyTarget] = React.useState<string>(review.user);
  const [reportId, setReportId] = React.useState<number|null>(null);
  const [threadVotes, setThreadVotes] = React.useState<Record<string, 1|-1|0>>({});
  const inputRef = React.useRef<HTMLInputElement>(null);
  const replies = REVIEW_THREADS[review.id] ?? [];

  const goBack = () => { setVis(false); setTimeout(onBack, 260); };

  const handleThreadVote = (itemId: string, dir: 1 | -1) => {
    setThreadVotes(prev => ({ ...prev, [itemId]: prev[itemId] === dir ? 0 : dir }));
  };

  const focusReply = (targetUser: string) => {
    setReplyTarget(targetUser);
    setReplyText("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleSend = () => {
    if (!replyText.trim()) return;
    setReplyText("");
    setReplyTarget(review.user);
    inputRef.current?.blur();
  };

  if (reportId !== null) {
    const rev = REVIEW_DATA.find(r => r.id === reportId) ?? review;
    return <ReportPage review={rev} onBack={() => setReportId(null)} onBackToCca={goBack} />;
  }

  const ThreadItem = ({
    itemId, user, year, isExco, upvotes, text, onReport, small = false,
  }: {
    itemId:string; user:string; year:string; isExco:boolean; upvotes:number; text:string; onReport:()=>void; small?:boolean;
  }) => {
    const myVote = threadVotes[itemId] ?? 0;
    const effectiveUpvotes = upvotes + myVote;
    const active = replyTarget === user;
    return (
      <div
        className="rounded-2xl overflow-hidden transition-all"
        style={{
          backgroundColor: active ? (isDark ? "rgba(221,187,118,0.15)" : "#F9E8C4") : CREAM,
          border: `1.5px solid ${active ? GOLD : BORDER}`,
        }}
      >
        <div className="flex items-center gap-2.5 px-3.5 pt-3.5 pb-2">
          <div
            className={`${small ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm"} rounded-full flex items-center justify-center font-black flex-shrink-0`}
            style={{ backgroundColor:CORAL, color:FWHITE }}
          >
            {user[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className={`${small ? "text-[12px]" : "text-[13px]"} font-black truncate`} style={{ color:PLUM }}>{user}</p>
              {isExco && <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor:CORAL }} />}
            </div>
            <p className="text-[11px]" style={{ color:MUTED }}>{year}</p>
          </div>
          <button onClick={onReport} className="flex-shrink-0 opacity-50">
            <Flag size={12} color={MUTED} />
          </button>
        </div>
        <p className={`${small ? "text-[12px]" : "text-[13px]"} leading-relaxed px-3.5 pb-2.5`} style={{ color:MUTED }}>{text}</p>
        <div className="flex items-center gap-2.5 px-3.5 pb-3 pt-1.5" style={{ borderTop:`1px solid ${BORDER}` }}>
          <button
            onClick={() => focusReply(user)}
            className="flex items-center gap-1 active:opacity-60"
          >
            <Reply size={13} color={active ? CORAL : MUTED} strokeWidth={2} />
          </button>
          <span className="text-[11px]" style={{ color:BORDER }}>|</span>
          <span className="text-[12px] font-black" style={{ color: effectiveUpvotes > 0 ? PLUM : effectiveUpvotes < 0 ? "#B91C1C" : MUTED }}>
            {effectiveUpvotes > 0 ? "+" : ""}{effectiveUpvotes}
          </span>
          <button onClick={() => handleThreadVote(itemId, 1)} className="active:scale-110 transition-transform">
            <ThumbsUp size={12} color={myVote === 1 ? PLUM : MUTED} fill={myVote === 1 ? PLUM : "none"} />
          </button>
          <button onClick={() => handleThreadVote(itemId, -1)} className="active:scale-110 transition-transform">
            <ThumbsDown size={12} color={myVote === -1 ? "#B91C1C" : MUTED} fill={myVote === -1 ? "#B91C1C" : "none"} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col transition-transform duration-[260ms]"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Header */}
      <div className="px-4 pt-14 pb-3 flex items-center gap-3 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        <button onClick={goBack} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-base font-black truncate" style={{ color:PLUM }}>Thread</p>
          <p className="text-xs truncate" style={{ color:MUTED }}>@{review.user}</p>
        </div>
      </div>

      {/* Scrollable thread body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-2" style={hideScroll}>
        {/* Original review */}
        <ThreadItem
          itemId={String(review.id)}
          user={review.user} year={review.year} isExco={review.isExco}
          upvotes={review.upvotes} text={review.text}
          onReport={() => setReportId(review.id)}
        />

        {/* Replies with indent + vertical connecting line */}
        {replies.length > 0 ? (
          <div className="flex mt-3">
            <div className="flex flex-col items-center mr-3 flex-shrink-0" style={{ width:2 }}>
              <div className="flex-1 w-0.5 rounded-full" style={{ backgroundColor:BORDER }} />
            </div>
            <div className="flex-1 space-y-3">
              {replies.map(r => (
                <ThreadItem
                  key={r.id}
                  itemId={String(r.id)}
                  user={r.user} year={r.year} isExco={r.isExco}
                  upvotes={r.upvotes} text={r.text}
                  onReport={() => setReportId(r.id)}
                  small
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-xs text-center py-6" style={{ color:MUTED }}>No replies yet. Be the first!</p>
        )}
      </div>

      {/* Reply composer */}
      <div className="px-4 pb-8 pt-3 flex-shrink-0" style={{ borderTop:`1.5px solid ${BORDER}` }}>
        {replyTarget !== review.user && (
          <div className="flex items-center gap-1.5 mb-2">
            <Reply size={11} color={CORAL} strokeWidth={2} />
            <span className="text-[11px] font-bold" style={{ color:CORAL }}>@{replyTarget}</span>
            <button
              className="ml-auto text-[10px] font-bold"
              style={{ color:MUTED }}
              onClick={() => setReplyTarget(review.user)}
            >
              ✕
            </button>
          </div>
        )}
        {/* Position field */}
        <div className="rounded-xl px-3 py-2 mb-2" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <input
            value={replyPosition}
            onChange={e => setReplyPosition(e.target.value)}
            placeholder="Your position, e.g. AY24/25 Member"
            className="w-full bg-transparent text-xs outline-none"
            style={{ color:MUTED, fontFamily:"'Nunito Sans',sans-serif" }}
          />
        </div>
        {/* Reply input */}
        <div className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ backgroundColor:WHITE, border:`1.5px solid ${replyText.trim() ? GOLD : BORDER}` }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0" style={{ backgroundColor:CORAL, color:WHITE }}>A</div>
          <input
            ref={inputRef}
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            placeholder={`Reply to @${replyTarget}…`}
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
          />
          <button
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: replyText.trim() ? CORAL : BORDER }}
            onClick={handleSend}
          >
            <ArrowRight size={14} color={replyText.trim() ? PLUM : MUTED} />
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailReviewsTab({ cca, onOpenThread, username, isMember }: { cca: CCA; onOpenThread: (r: typeof REVIEW_DATA[0]) => void; username?: string; isMember?: boolean }) {
  const [reportId, setReportId] = React.useState<number|null>(null);
  const [newReview, setNewReview] = React.useState("");
  const [position, setPosition] = React.useState(isMember ? "AY25/26 Member" : "");
  const [anonymous, setAnonymous] = React.useState(false);
  const [localReviews, setLocalReviews] = React.useState<typeof REVIEW_DATA>([]);
  const [reviewVotes, setReviewVotes] = React.useState<Record<number, 1 | -1 | 0>>({});

  const allReviews = [...localReviews, ...REVIEW_DATA];

  const handleVote = (id: number, dir: 1 | -1) => {
    setReviewVotes(prev => {
      const current = prev[id] ?? 0;
      return { ...prev, [id]: current === dir ? 0 : dir };
    });
  };

  const handleSubmit = () => {
    if (!newReview.trim()) return;
    const review = {
      id: Date.now(),
      user: username ?? "you",
      year: anonymous ? "Anonymous" : (position.trim() || "AY25/26 Member"),
      isExco: false,
      upvotes: 0,
      replies: 0,
      text: newReview.trim(),
    };
    setLocalReviews(prev => [review, ...prev]);
    setNewReview("");
  };

  const tabScrollRef = React.useRef<HTMLDivElement>(null);

  if (reportId !== null) {
    const rev = allReviews.find(r => r.id === reportId) ?? REVIEW_DATA[0];
    return (
      <div ref={tabScrollRef} className="overflow-y-auto h-full" style={hideScroll}>
        <ReportPage review={rev} onBack={() => { setReportId(null); }} />
      </div>
    );
  }

  return (
    <div className="px-5 py-4 pb-10">
      <p className="text-sm font-black mb-3" style={{ color:PLUM }}>Reviews ({allReviews.length})</p>
      {/* Add a review */}
      <div className="rounded-2xl p-3.5 mb-4" style={{ border:`1.5px solid ${BORDER}`, backgroundColor:CREAM }}>
        {/* Position field — hidden when anonymous */}
        {!anonymous && (
          <div className="rounded-xl px-3 py-2 mb-2" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
            <input
              value={position}
              onChange={e => setPosition(e.target.value)}
              placeholder="Your position e.g. AY25/26 Member"
              className="w-full bg-transparent text-xs outline-none"
              style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
            />
          </div>
        )}
        {/* Anonymous checkbox */}
        <button
          onClick={() => setAnonymous(p => !p)}
          className="flex items-center gap-2 mb-2"
        >
          <div className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors"
            style={{ borderColor: anonymous ? CORAL : BORDER, backgroundColor: anonymous ? CORAL : "transparent" }}>
            {anonymous && <Check size={9} color={FWHITE} strokeWidth={3} />}
          </div>
          <span className="text-xs" style={{ color:MUTED }}>Stay anonymous (hide position)</span>
        </button>
        {/* Review text */}
        <textarea
          value={newReview} onChange={e => setNewReview(e.target.value)}
          placeholder="Write a review…"
          className="w-full bg-transparent text-[13px] outline-none resize-none"
          rows={2}
          style={{ color:PLUM, fontFamily:"'Nunito Sans',sans-serif" }}
        />
        <div className="flex justify-end mt-1">
          <button
            onClick={handleSubmit}
            disabled={!newReview.trim()}
            className="px-3 py-1 rounded-xl text-xs font-black transition-opacity"
            style={{ backgroundColor: newReview.trim() ? CORAL : BORDER, color: newReview.trim() ? PLUM : MUTED, opacity: newReview.trim() ? 1 : 0.5 }}
          >
            Submit
          </button>
        </div>
      </div>
      {/* Reviews */}
      <div className="space-y-3">
        {allReviews.map(r => {
          const threadCount = (REVIEW_THREADS[r.id] ?? []).length;
          const vote = reviewVotes[r.id] ?? 0;
          const displayUpvotes = r.upvotes + vote;
          return (
            <div key={r.id} className="rounded-2xl overflow-hidden" style={{ border:`1.5px solid ${BORDER}`, backgroundColor:CREAM }}>
              <div className="flex items-center gap-2.5 px-3.5 pt-3.5 pb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ backgroundColor:CORAL, color:FWHITE }}>
                  {r.user[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[13px] font-black truncate" style={{ color:PLUM }}>{r.user}</p>
                    {r.isExco && <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor:CORAL }} />}
                  </div>
                  <p className="text-[11px]" style={{ color:MUTED }}>{r.year}</p>
                </div>
                <button onClick={() => setReportId(r.id)} className="flex-shrink-0 opacity-60">
                  <Flag size={13} color={MUTED} />
                </button>
              </div>
              <p className="text-[13px] leading-relaxed px-3.5 pb-2.5" style={{ color:MUTED }}>{r.text}</p>
              {/* Reactions */}
              <div className="flex items-center gap-3 px-3.5 pb-3 pt-2" style={{ borderTop:`1px solid ${BORDER}` }}>
                <button onClick={() => onOpenThread(r)} className="flex items-center gap-1 active:opacity-70">
                  <MessageSquare size={13} color={threadCount > 0 ? CORAL : MUTED} />
                  <span className="text-[11px] font-semibold" style={{ color: threadCount > 0 ? CORAL : MUTED }}>
                    {threadCount > 0 ? threadCount : r.replies}
                  </span>
                </button>
                <span className="text-[11px]" style={{ color:BORDER }}>|</span>
                <span className="text-[12px] font-black" style={{ color: displayUpvotes > 0 ? CORAL : displayUpvotes < 0 ? "#B91C1C" : MUTED }}>
                  {displayUpvotes > 0 ? "+" : ""}{displayUpvotes}
                </span>
                <button onClick={() => handleVote(r.id, 1)} className="active:scale-110 transition-transform">
                  <ThumbsUp size={13} fill={vote === 1 ? CORAL : "none"} color={vote === 1 ? CORAL : MUTED} />
                </button>
                <button onClick={() => handleVote(r.id, -1)} className="active:scale-110 transition-transform">
                  <ThumbsDown size={13} fill={vote === -1 ? "#B91C1C" : "none"} color={vote === -1 ? "#B91C1C" : MUTED} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CCA DETAIL PAGE
// ══════════════════════════════════════════════════════════════════════════════
type DetailTab = "home" | "about" | "events" | "reviews";

function CcaDetailPage({ cca, saved, onSave, onBack, onMainTabChange, username, notifiedDetailEvts, setNotifiedDetailEvts, userMemberships, removedEvtKeys, setRemovedEvtKeys }: {
  cca: CCA; saved: boolean; onSave: ()=>void;
  onBack: ()=>void; onMainTabChange: (t: Tab)=>void;
  username?: string;
  notifiedDetailEvts?: Set<string>;
  setNotifiedDetailEvts?: React.Dispatch<React.SetStateAction<Set<string>>>;
  userMemberships?: number[];
  removedEvtKeys?: Set<string>;
  setRemovedEvtKeys?: React.Dispatch<React.SetStateAction<Set<string>>>;
}) {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = requestAnimationFrame(() => setVis(true)); return () => cancelAnimationFrame(t); }, []);

  const [tab, setTab] = React.useState<DetailTab>("home");
  const [threadReview, setThreadReview] = React.useState<typeof REVIEW_DATA[0] | null>(null);
  const [selectedDetailEvent, setSelectedDetailEvent] = React.useState<EventDetailData | null>(null);

  const goBack = () => { setVis(false); setTimeout(onBack, 280); };
  const switchTab = (t: Tab) => { onMainTabChange(t); };

  const DETAIL_TABS: { id: DetailTab; label: string }[] = [
    { id:"home",    label:"Home"         },
    { id:"about",   label:"About"        },
    { id:"events",  label:"Events"       },
    { id:"reviews", label:`Reviews (${REVIEW_DATA.length})` },
  ];

  return (
    <div
      className="absolute inset-0 z-40 flex flex-col transition-transform duration-300"
      style={{ backgroundColor:CREAM, transform: vis ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Top bar */}
      <div className="px-4 pt-14 pb-3 flex items-center gap-2 flex-shrink-0" style={{ backgroundColor:CREAM }}>
        <button onClick={goBack} className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor:CREAM }}>
          <ChevronLeft size={18} color={PLUM} strokeWidth={2.5} />
        </button>
        <div className="flex-1 flex items-center px-3 py-2 rounded-2xl" style={{ backgroundColor:WHITE, border:`1.5px solid ${BORDER}` }}>
          <span className="text-sm" style={{ color:MUTED }}>{cca.name.toLowerCase()}</span>
        </div>
        {/* Filter icon */}
        <button className="w-9 h-9 flex items-center justify-center rounded-xl" style={{ backgroundColor:CREAM }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Hero image */}
      <div className="mx-4 rounded-2xl h-44 overflow-hidden relative flex-shrink-0" style={{ backgroundColor:cca.bgColor }}>
        <img src={cca.img} alt={cca.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Name + save */}
      <div className="px-5 pt-3 pb-2 flex items-start justify-between flex-shrink-0">
        <div>
          <p className="text-xl font-black leading-tight" style={{ color:PLUM }}>{cca.name}</p>
          <p className="text-sm mt-0.5" style={{ color:MUTED }}>{cca.category}</p>
        </div>
        <button onClick={e => { e.stopPropagation(); onSave(); }} className="w-9 h-9 flex items-center justify-center rounded-full mt-1 transition-colors" style={{ backgroundColor: PEACH }}>
          <Heart size={18} fill={saved ? CORAL : "none"} color={saved ? CORAL : MUTED} strokeWidth={saved ? 0 : 2} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-5 gap-1 flex-shrink-0" style={{ borderBottom:`1.5px solid ${BORDER}` }}>
        {DETAIL_TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="px-3 py-2.5 text-xs font-black transition-all relative"
            style={{ color: tab === t.id ? PLUM : MUTED }}
          >
            {t.label}
            {tab === t.id && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full" style={{ backgroundColor:CORAL }} />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto" style={{ backgroundColor:CREAM, ...hideScroll }}>
        {tab === "home"    && <DetailHomeTab    cca={cca} />}
        {tab === "about"   && <DetailAboutTab   cca={cca} username={username} />}
        {tab === "events"  && <DetailEventsTab  cca={cca} notifiedDetailEvts={notifiedDetailEvts} setNotifiedDetailEvts={setNotifiedDetailEvts} removedEvtKeys={removedEvtKeys} setRemovedEvtKeys={setRemovedEvtKeys} onOpenEvent={setSelectedDetailEvent} />}
        {tab === "reviews" && <DetailReviewsTab cca={cca} onOpenThread={setThreadReview} username={username} isMember={userMemberships?.includes(cca.id) ?? false} />}
      </div>

      {/* Event detail overlay */}
      {selectedDetailEvent && (
        <EventDetailPage event={selectedDetailEvent} onBack={() => setSelectedDetailEvent(null)} />
      )}

      {/* Review thread overlay */}
      {threadReview && (
        <ReviewThreadPage review={threadReview} onBack={() => setThreadReview(null)} />
      )}

      {/* Bottom nav */}
      <BottomNav tab="discover" onChange={switchTab} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN APP (tabs)
// ══════════════════════════════════════════════════════════════════════════════
function MainApp({ onSignOut, username, avatar, selectedInterests, commitmentLevel, onUpdateProfile, onUpdateInterests, onUpdateCommitment, userMemberships, userEmail, isReturning }: {
  onSignOut:()=>void; username:string; avatar:string;
  selectedInterests:Set<string>; commitmentLevel:string;
  onUpdateProfile:(username:string, avatar:string)=>void;
  onUpdateInterests:(interests:Set<string>)=>void;
  onUpdateCommitment:(commitment:string)=>void;
  userMemberships?: number[];
  userEmail?: string;
  isReturning?: boolean;
}) {
  const [tab, setTab] = useState<Tab>("home");
  const [saved, setSaved] = useState<Set<number>>(new Set());
  const [notifPermAsked, setNotifPermAsked] = useState(false);
  const [showNotifPerm,  setShowNotifPerm]  = useState(false);
  const [lists, setLists] = useState<WishList[]>([
    { id:"interested",       name:"Interested",       ccaIds: new Set() },
    { id:"currently-trying", name:"Currently Trying", ccaIds: new Set() },
  ]);
  const [pendingRemoveCca, setPendingRemoveCca] = useState<CCA|null>(null);
  const [addToListCca, setAddToListCca] = useState<CCA|null>(null);
  const [toast, setToast] = useState<{ msg: string; undoFn: () => void; ccaId?: number } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [sheetCca,  setSheetCca]  = useState<CCA|null>(null);
  const [detailCca, setDetailCca] = useState<CCA|null>(null);
  const [detailCcaOrigin, setDetailCcaOrigin] = useState<Tab>("discover");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showForYou, setShowForYou] = useState(false);
  const [notifiedDetailEvts, setNotifiedDetailEvts] = useState<Set<string>>(new Set());
  const [notifiedEvts,       setNotifiedEvts]       = useState<Set<number>>(new Set());
  const [removedEvtKeys,     setRemovedEvtKeys]     = useState<Set<string>>(new Set());
  const [notifsEnabled, setNotifsEnabled] = useState(false);
  type NotifItem = { id:number; type:string; ccaName:string; body:string; time:string; read:boolean };
  const [notificationItems, setNotificationItems] = useState<NotifItem[]>([]);
  // Notification read state
  const [notifRead, setNotifRead] = useState<Set<number>>(new Set());
  const hasUnread = notificationItems.some(n => !notifRead.has(n.id));
  // Discover category navigation
  const [discoverKey, setDiscoverKey] = useState(0);
  const [discoverInitialCategory, setDiscoverInitialCategory] = useState("");
  const openDiscoverWithCategory = (cat: string) => {
    setDiscoverInitialCategory(cat);
    setDiscoverKey(k => k + 1);
    setDetailCca(null);
    setTab("discover");
  };

  const showToast = (msg: string, undoFn: () => void, ccaId?: number) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, undoFn, ccaId });
    toastTimer.current = setTimeout(() => setToast(null), 5000);
  };

  const handleFullRemove = (id: number) => {
    setSaved(prev => { const n = new Set(prev); n.delete(id); return n; });
    setLists(prev => prev.map(l => {
      const next = new Set(l.ccaIds); next.delete(id); return { ...l, ccaIds: next };
    }));
    const cca = CCAS.find(c => c.id === id);
    showToast(`${cca?.name} removed`, () => {
      setSaved(prev => { const n = new Set(prev); n.add(id); return n; });
    });
  };

  const handleSave = (id: number) => {
    const isCurrentlySaved = saved.has(id);
    const cca = CCAS.find(c => c.id === id);
    if (isCurrentlySaved) {
      const inAnyList = lists.some(l => l.ccaIds.has(id));
      if (inAnyList) {
        setPendingRemoveCca(cca ?? null);
        return;
      }
      setSaved(prev => { const n = new Set(prev); n.delete(id); return n; });
      showToast(`${cca?.name} removed`, () => {
        setSaved(prev => { const n = new Set(prev); n.add(id); return n; });
      });
    } else {
      setSaved(prev => { const n = new Set(prev); n.add(id); return n; });
      showToast(`${cca?.name} added to Wishlist`, () => {
        setSaved(prev => { const n = new Set(prev); n.delete(id); return n; });
      }, id);
      if (!notifPermAsked) {
        setNotifPermAsked(true);
        setTimeout(() => setShowNotifPerm(true), 400);
      }
    }
  };

  return (
    <div className="flex flex-col h-full relative" style={{ backgroundColor:CREAM }}>
      <div className="flex-1 overflow-hidden">
        {tab === "home"     && <HomeTab saved={saved} onSave={handleSave} onTabChange={setTab} onOpenSheet={setSheetCca} onNotifications={() => setShowNotifications(true)} onForYou={() => setShowForYou(true)} onOpenDiscoverWithCategory={openDiscoverWithCategory} username={username} hasUnread={hasUnread} isReturning={isReturning} />}
        {tab === "discover" && <DiscoverTab key={discoverKey} saved={saved} onSave={handleSave} onOpenSheet={setSheetCca} initialCategory={discoverInitialCategory} />}
        {tab === "wishlist" && <WishlistTab saved={saved} onOpenSheet={setSheetCca} lists={lists} setLists={setLists} onFullRemove={handleFullRemove} />}
        {tab === "events"   && <EventsTab saved={saved} notifiedDetailEvts={notifiedDetailEvts} setNotifiedDetailEvts={setNotifiedDetailEvts} onTabChange={setTab} notifiedEvts={notifiedEvts} setNotifiedEvts={setNotifiedEvts} removedEvtKeys={removedEvtKeys} setRemovedEvtKeys={setRemovedEvtKeys} />}
        {tab === "profile"  && <ProfileTab onSignOut={onSignOut} username={username} avatar={avatar} selectedInterests={selectedInterests} commitmentLevel={commitmentLevel} onUpdateProfile={onUpdateProfile} onUpdateInterests={onUpdateInterests} onUpdateCommitment={onUpdateCommitment} onNavigateToInterest={label => { openDiscoverWithCategory(label); }} userMemberships={userMemberships} onOpenCca={(cca) => { setDetailCca(cca); setDetailCcaOrigin("profile"); }} userEmail={userEmail} />}
      </div>
      <BottomNav tab={tab} onChange={setTab} />

      {/* Toast */}
      {toast && (
        <div
          className="absolute bottom-24 left-4 right-4 z-[90] flex items-center gap-2 px-4 py-3.5 rounded-2xl shadow-lg pointer-events-auto"
          style={{ backgroundColor:PLUM, color:WHITE }}
        >
          <span className="text-sm font-semibold flex-1">{toast.msg}</span>
          {toast.ccaId !== undefined && (
            <button
              onClick={() => {
                const cca = CCAS.find(c => c.id === toast.ccaId);
                if (cca) { setAddToListCca(cca); setToast(null); if (toastTimer.current) clearTimeout(toastTimer.current); }
              }}
              className="text-sm font-black px-3 py-1.5 rounded-xl flex-shrink-0 whitespace-nowrap"
              style={{ backgroundColor:"rgba(255,255,255,0.18)", color:WHITE }}
            >
              Move to Sublist
            </button>
          )}
          <button
            onClick={() => { toast.undoFn(); setToast(null); if (toastTimer.current) clearTimeout(toastTimer.current); }}
            className="text-sm font-black px-3 py-1.5 rounded-xl flex-shrink-0"
            style={{ backgroundColor:"rgba(255,255,255,0.18)", color:WHITE }}
          >
            Undo
          </button>
        </div>
      )}

      {/* Pending remove modal (CCA is in a list, triggered from heart toggle outside WishlistTab) */}
      {pendingRemoveCca && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor:"rgba(0,0,0,0.4)" }}
          onClick={() => setPendingRemoveCca(null)}
        >
          <div className="w-full rounded-3xl p-6" style={{ backgroundColor:WHITE }} onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black mb-2" style={{ color:PLUM }}>Remove from Wishlist?</h2>
            <p className="text-sm mb-5 leading-relaxed" style={{ color:MUTED }}>
              <span className="font-bold" style={{ color:PLUM }}>{pendingRemoveCca.name}</span> is in one or more of your lists. Removing it will clear it from all lists.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setPendingRemoveCca(null)}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:CREAM, border:`1.5px solid ${BORDER}`, color:PLUM }}
              >
                Cancel
              </button>
              <button
                onClick={() => { handleFullRemove(pendingRemoveCca.id); setPendingRemoveCca(null); }}
                className="flex-1 py-3.5 rounded-2xl text-sm font-black"
                style={{ backgroundColor:DANGER_BG, color:"#B91C1C", border:"1.5px solid #EF9797" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS-style Notification Permission Dialog */}
      {showNotifPerm && (
        <div
          className="absolute inset-0 z-[100] flex items-center justify-center px-8"
          style={{ backgroundColor:"rgba(0,0,0,0.45)", backdropFilter:"blur(4px)" }}
        >
          <div
            className="w-full rounded-[18px] overflow-hidden"
            style={{ backgroundColor:"rgba(242,242,247,0.97)", maxWidth:"270px", boxShadow:"0 20px 60px rgba(0,0,0,0.35)" }}
          >
            {/* App icon + title */}
            <div className="pt-6 pb-4 px-5 text-center">
              {/* Rounded app icon */}
              <div className="w-14 h-14 rounded-[14px] mx-auto mb-3 flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor:PLUM }}>
                <ImageWithFallback src={noBgLogo} alt="ok!cca" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-[17px] font-semibold leading-snug mb-1.5" style={{ color:"#1C1C1E", fontFamily:"'Nunito Sans', sans-serif" }}>
                "ok!cca" Would Like to Send You Notifications
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color:"#3C3C43CC", fontFamily:"'Nunito Sans', sans-serif" }}>
                Don't miss important updates like new CCA events and recruitment deadlines.
              </p>
            </div>

            {/* Divider */}
            <div style={{ height:"0.5px", backgroundColor:"rgba(60,60,67,0.29)" }} />

            {/* Buttons */}
            <div className="flex">
              <button
                onClick={() => setShowNotifPerm(false)}
                className="flex-1 py-3 text-center text-[17px]"
                style={{
                  color:"#007AFF",
                  fontFamily:"'Nunito Sans', sans-serif",
                  fontWeight:400,
                  borderRight:"0.5px solid rgba(60,60,67,0.29)",
                }}
              >
                Don't Allow
              </button>
              <button
                onClick={() => {
                  setShowNotifPerm(false);
                  setNotifsEnabled(true);
                  setNotificationItems(prev => [{
                    id: Date.now(),
                    type: "event",
                    ccaName: "ok!cca",
                    body: "Notifications enabled! You'll now receive updates on CCA events and recruitment deadlines.",
                    time: "just now",
                    read: false,
                  }, ...prev]);
                }}
                className="flex-1 py-3 text-center text-[17px]"
                style={{
                  color:"#007AFF",
                  fontFamily:"'Nunito Sans', sans-serif",
                  fontWeight:600,
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Add-to-List sheet (opened from toast or elsewhere) */}
      {addToListCca && (
        <AddToListSheet
          cca={addToListCca}
          lists={lists}
          setLists={setLists}
          onClose={() => setAddToListCca(null)}
        />
      )}

      {/* Bottom sheet overlay */}
      {sheetCca && (
        <CcaBottomSheet
          cca={sheetCca}
          saved={saved.has(sheetCca.id)}
          onSave={() => handleSave(sheetCca.id)}
          onClose={() => setSheetCca(null)}
          onViewDetail={() => { setDetailCca(sheetCca); setDetailCcaOrigin(tab); setSheetCca(null); setShowForYou(false); }}
        />
      )}

      {/* Full detail page overlay — kept mounted for instant tab switching; hidden when on another tab */}
      {detailCca && (
        <div style={{ display: tab === detailCcaOrigin ? undefined : 'none' }}>
          <CcaDetailPage
            cca={detailCca}
            saved={saved.has(detailCca.id)}
            onSave={() => handleSave(detailCca.id)}
            onBack={() => setDetailCca(null)}
            onMainTabChange={t => setTab(t)}
            username={username}
            notifiedDetailEvts={notifiedDetailEvts}
            setNotifiedDetailEvts={setNotifiedDetailEvts}
            userMemberships={userMemberships}
            removedEvtKeys={removedEvtKeys}
            setRemovedEvtKeys={setRemovedEvtKeys}
          />
        </div>
      )}

      {/* For You overlay */}
      {showForYou && (
        <ForYouPage
          saved={saved}
          onSave={handleSave}
          onOpenSheet={(cca) => { setSheetCca(cca); }}
          onBack={() => setShowForYou(false)}
        />
      )}

      {/* Notifications overlay */}
      {showNotifications && (
        <NotificationsPage
          onBack={() => setShowNotifications(false)}
          read={notifRead}
          setRead={setNotifRead}
          items={notificationItems}
        />
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [username, setUsername] = useState("campusotter66");
  const [avatar, setAvatar] = useState("🦦");
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(new Set());
  const [commitmentLevel, setCommitmentLevel] = useState("explore");
  const [isDark, setIsDark] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [userMemberships, setUserMemberships] = useState<number[]>([]);
  const [isReturning, setIsReturning] = useState(false);

  return (
    <DarkModeCtx.Provider value={{ isDark, setIsDark }}>
    <div className="min-h-dvh flex items-center justify-center" style={{ backgroundColor: isDark ? "#000000" : "#C8B5A8" }}>
      <div
        className="relative overflow-hidden sm:rounded-[44px] sm:shadow-2xl"
        style={{
          width:  "min(390px, 100vw)",
          height: "min(844px, 100dvh)",
          backgroundColor: CREAM,
          fontFamily: "'Nunito Sans', sans-serif",
          ...buildThemeVars(isDark),
        }}
      >
        {/* Phone top notch (decorative, desktop only) */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-50" style={{ backgroundColor: isDark ? "#000000" : "#1a0d14" }} />

        {screen === "welcome" && (
          <WelcomeScreen
            onGetStarted={() => setScreen("signin")}
          />
        )}
        {screen === "signin" && (
          <SignInScreen
            onSignIn={(email) => { setUserEmail(email); setScreen("sso"); }}
            onBack={() => setScreen("welcome")}
          />
        )}
        {screen === "sso" && (
          <NusSSOPage
            email={userEmail}
            onLogin={(pw) => {
              if (pw === "newuser") {
                setIsReturning(false);
                setScreen("onboard-nus");
              } else {
                setIsReturning(true);
                setScreen("main");
              }
            }}
            onBack={() => setScreen("signin")}
          />
        )}
        {screen === "onboard-nus" && (
          <OnboardNusScreen
            onNext={(memberships) => { setUserMemberships(memberships); setScreen("onboard-interests"); }}
            onBack={() => setScreen("sso")}
          />
        )}
        {screen === "onboard-interests" && (
          <OnboardInterestsScreen
            onNext={(sel) => { setSelectedInterests(sel); setScreen("onboard-commitment"); }}
            onBack={() => setScreen("onboard-nus")}
          />
        )}
        {screen === "onboard-commitment" && (
          <OnboardCommitmentScreen
            onNext={(commitment) => { setCommitmentLevel(commitment); setScreen("onboard-profile"); }}
            onBack={() => setScreen("onboard-interests")}
          />
        )}
        {screen === "onboard-profile" && (
          <OnboardProfileScreen
            onNext={(uname, av) => { setUsername(uname); setAvatar(av); setHasAccount(true); setScreen("main"); }}
            onBack={() => setScreen("onboard-commitment")}
          />
        )}
        {screen === "main" && (
          <MainApp
            onSignOut={() => { setHasAccount(false); setScreen("welcome"); }}
            username={username}
            avatar={avatar}
            selectedInterests={selectedInterests}
            commitmentLevel={commitmentLevel}
            onUpdateProfile={(u, a) => { setUsername(u); setAvatar(a); }}
            onUpdateInterests={setSelectedInterests}
            onUpdateCommitment={setCommitmentLevel}
            userMemberships={userMemberships}
            userEmail={userEmail}
            isReturning={isReturning}
          />
        )}
      </div>
    </div>
    </DarkModeCtx.Provider>
  );
}
