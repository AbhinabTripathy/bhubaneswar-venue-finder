import logoAsset from "@/assets/urban-vibes-logo-v2.png.asset.json";

export function Logo({ className = "h-12 w-auto md:h-14" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Urban Vibes — A Space to Connect & Celebrate"
      className={`${className} object-contain drop-shadow-[0_0_18px_oklch(0.78_0.19_150/0.35)]`}
    />
  );
}
