export function getShortTimeFromTimestamp(timestamp: number): string {
  if (!timestamp) return "N/A";
  return new Date(timestamp)?.toLocaleTimeString(
    [], { hour: "2-digit", minute: "2-digit" }
  );
}