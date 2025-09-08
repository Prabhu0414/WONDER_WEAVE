export function getTypeColor(type: string): string {
  switch (type) {
    case "flight":
      return "bg-pink-500";
    case "hotel":
      return "bg-rose-500";
    case "restaurant":
      return "bg-fuchsia-500";
    case "attraction":
      return "bg-pink-600";
    case "rest":
      return "bg-purple-400";
    default:
      return "bg-gray-500";
  }
}
