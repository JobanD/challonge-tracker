// src/utils/players.ts

export const aliasMap: Record<string, string> = {
  arsh: "arshdeep",
  hvr: "harvir",
  kvr: "karnvir",
};

export function canonicalName(name: string): string {
  const trimmed = name.trim().toLowerCase();
  return aliasMap[trimmed] ?? trimmed;
}

export function titleCase(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}
