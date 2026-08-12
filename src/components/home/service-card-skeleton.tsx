export function ServiceCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card p-6 shadow-xs space-y-5">
      {/* Top Bar Skeleton */}
      <div className="flex items-center justify-between">
        <div className="h-12 w-12 rounded-xl bg-muted animate-pulse" />
        <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
      </div>

      {/* Title & Subtitle Skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-24 rounded-md bg-muted animate-pulse" />
        <div className="h-6 w-3/4 rounded-md bg-muted animate-pulse" />
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 pt-1">
        <div className="h-3.5 w-full rounded-md bg-muted animate-pulse" />
        <div className="h-3.5 w-5/6 rounded-md bg-muted animate-pulse" />
      </div>

      {/* Features List Skeleton */}
      <div className="space-y-2 pt-2 border-t border-border/30">
        <div className="h-3 w-1/2 rounded-md bg-muted animate-pulse" />
        <div className="h-3 w-2/3 rounded-md bg-muted animate-pulse" />
        <div className="h-3 w-3/5 rounded-md bg-muted animate-pulse" />
      </div>

      {/* CTA Button Skeleton */}
      <div className="pt-2">
        <div className="h-10 w-full rounded-xl bg-muted animate-pulse" />
      </div>

      {/* Shimmer Overlay Highlight Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
    </div>
  );
}
