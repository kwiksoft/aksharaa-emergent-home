/**
 * Central icon registry. Section/content data references icons by string key,
 * keeping the content layer CMS-friendly and the view layer in control of visuals.
 */
import {
  Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram,
  Search, Menu, X, ArrowRight, ArrowUpRight, ChevronDown,
  ShieldCheck, Wallet, FileText, Users, Scale, Banknote, Globe, Lock,
  CheckCircle2, MonitorCheck, ClipboardCheck, TrendingUp,
  Building2, Receipt, FileSignature, BadgeCheck,
  CalendarClock, Layers, FolderCheck, ScanSearch,
  Compass, ClipboardList, Send, Radar,
  Factory, HardHat, Truck, ShoppingBag, Cpu, HeartPulse,
  Clock, Target, Landmark, UserCheck, Map,
  FilePlus2, FileX2, RefreshCw, Edit3,
  AlertTriangle, Calculator, Percent, IndianRupee, UserPlus,
  Download, Headset, User, History, IdCard, Rocket, Gavel,
  Eye, FolderUp, UsersRound, Award, ConciergeBell, Shuffle, AlertCircle,
  Cog, Calendar, ThumbsUp, Folders, AlarmClock, LockKeyhole,
  MessagesSquare, Minus, Plus, Lightbulb, Bell, Ban, Handshake,
} from "lucide-react";

export const icons = {
  phone: Phone, mail: Mail, mapPin: MapPin,
  linkedin: Linkedin, twitter: Twitter, facebook: Facebook, instagram: Instagram,
  search: Search, menu: Menu, x: X, arrowRight: ArrowRight, arrowUpRight: ArrowUpRight, chevronDown: ChevronDown,
  shield: ShieldCheck, wallet: Wallet, fileText: FileText, users: Users, scale: Scale,
  banknote: Banknote, globe: Globe, lock: Lock,
  checkCircle: CheckCircle2, monitor: MonitorCheck, clipboardCheck: ClipboardCheck, trendingUp: TrendingUp,
  building: Building2, receipt: Receipt, fileSignature: FileSignature, badge: BadgeCheck,
  calendar: CalendarClock, layers: Layers, folderCheck: FolderCheck, scan: ScanSearch,
  compass: Compass, clipboardList: ClipboardList, send: Send, radar: Radar,
  factory: Factory, hardHat: HardHat, truck: Truck, shoppingBag: ShoppingBag, cpu: Cpu, heart: HeartPulse,
  clock: Clock, target: Target,
  landmark: Landmark, userCheck: UserCheck, map: Map,
  filePlus: FilePlus2, fileX: FileX2, refreshCw: RefreshCw, edit3: Edit3,
  alertTriangle: AlertTriangle, calculator: Calculator,
  percent: Percent, rupee: IndianRupee, userPlus: UserPlus,
  download: Download, headset: Headset,
  user: User, history: History, idCard: IdCard, rocket: Rocket, gavel: Gavel,
  eye: Eye, folderUp: FolderUp, usersRound: UsersRound, award: Award, conciergeBell: ConciergeBell, shuffle: Shuffle,
  alertCircle: AlertCircle,
  cog: Cog,
  calendarPlain: Calendar,
  thumbsUp: ThumbsUp,
  folders: Folders,
  alarmClock: AlarmClock,
  lockKeyhole: LockKeyhole,
  messagesSquare: MessagesSquare,
  minus: Minus,
  plus: Plus,
  lightbulb: Lightbulb,
  bell: Bell,
  ban: Ban,
  handshake: Handshake,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
};
