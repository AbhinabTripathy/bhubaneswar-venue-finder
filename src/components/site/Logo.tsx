import logoAsset from "@/assets/urban-vibes-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Urban Vibes Space" className={className} loading="eager" />;
}
