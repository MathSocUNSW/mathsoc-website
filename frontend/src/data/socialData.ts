export interface socialData {
  name: string;
  url: string;
  iconPath: string;
  altName: string;
}

export const facebookData: socialData = {
  name: "Facebook",
  url: "https://www.facebook.com/unswmathsoc/",
  iconPath: "/images/facebookLogo.svg",
  altName: "UNSW Mathematics Society"
};

export const linkedInData: socialData = {
  name: "LinkedIn",
  url: "https://au.linkedin.com/company/unsw-mathematics-society/",
  iconPath: "/images/linkedinLogo.svg",
  altName: "UNSW Mathematics Society"
};

export const instagramData: socialData = {
  name: "Instagram",
  url: "https://instagram.com/unswmathsoc",
  iconPath: "/images/instagramLogo.svg",
  altName: "unswmathsoc"
};

export const youtubeData: socialData = {
  name: "YouTube",
  url: "https://www.youtube.com/channel/UC8FgY7QcGOrc_9b5qAoYfOg/",
  iconPath: "/images/youtubeLogo.svg",
  altName: "UNSW MathSoc Streams"
};

export const discordData: socialData = {
  name: "Discord",
  url: "https://discord.com/invite/Y7FFXxh/",
  iconPath: "/images/discordLogo.svg",
  altName: "UNSW MathSoc"
};

export const gmailData: socialData = {
  name: "Gmail",
  url: "mailto:unswmathsoc@gmail.com",
  iconPath: "/images/gmailLogo.svg",
  altName: "unswmathsoc@gmail.com"
};

export const socials: socialData[] = [
  facebookData,
  linkedInData,
  instagramData,
  youtubeData,
  discordData
];

export const contactUsSocials: socialData[] = [...socials, gmailData];

/*
NOTES:
- ARC data?
- Discord has an updated icon
- Twitch?
*/
