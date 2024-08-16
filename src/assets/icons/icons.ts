import type { LucideIcon } from "lucide-react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Copy,
  DotIcon,
  HelpCircle,
  Loader2,
  LogOut,
  User,
  LogInIcon,
  File,
  Minus,
  Check,
  Trash,
  ImagePlus,
  Pipette,
  XIcon,
  MenuIcon,
  PlusIcon,
  EditIcon,
} from "lucide-react";
import eye from "../svg/eye.svg";
import eyeHidden from "../svg/eye-hidden.svg";

export type Icon = LucideIcon;

const IconList = {
  Camera,
  ChevronLeft,
  ChevronRight,
  Copy,
  DotIcon,
  HelpCircle,
  spinner: Loader2,
  logout: LogOut,
  User,
  login: LogInIcon,
  file: File,
  minus: Minus,
  check: Check,
  trash: Trash,
  imagePlus: ImagePlus,
  colorPicker: Pipette,
  close: XIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  edit: EditIcon,
  eye,
  eyeHidden,
};

const Icons = IconList as unknown as Record<keyof typeof IconList, Icon>;

export default Icons;
