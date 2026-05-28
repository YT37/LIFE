import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="LIFE — Liberal Institute For Future Education"
      width={1068}
      height={252}
      priority
      className={className}
    />
  );
}
