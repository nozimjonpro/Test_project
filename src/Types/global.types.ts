type NavbarProps = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

type SimpleData = {
  id: number;
  title: string;
};

type Styles = {
  [key: string]: React.CSSProperties;
};

type UniversalProps = {
  id: number;
  type: string;
  icon: object;
  image: object;
  heading: string;
  text: string;
  sectionBg: React.CSSProperties;
  styles?: Styles;
  nav: SimpleData[] | null;
};

type ImageType = {
  id: number;
  image: object;
  styles: React.CSSProperties;
  variants?: {};
  tailwind?: string;
};

type MainButtonProps = {
  id?: number;
  title: string;
  styles?: React.CSSProperties;
  variant?: string;
  styleClass: string;
};

type SocialMediaDataType = {
  id: number;
  icon: object;
  name: string;
};
