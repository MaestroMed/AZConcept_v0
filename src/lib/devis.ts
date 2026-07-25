/**
 * Deep-link helpers for the /devis form.
 * Query params understood by the form: ?projet=<option> & ?teinte=<RAL>.
 * `projet` must match one of the form's project-type options verbatim.
 */

/** Gamme slug → exact option string of the devis "Type d'ouvrage" select. */
export const GAMME_TO_PROJECT_TYPE: Record<string, string> = {
  aura: "Garde-corps — AURA",
  forge: "Garde-corps — FORGE",
  "secu-plus": "Garde-corps — SECU+",
  atelier: "Garde-corps — ATELIER",
  "jansen-design": "Porte — JANSEN DESIGN",
  firewall: "Porte — FIREWALL",
  technique: "Porte — TECHNIQUE",
  airflow: "Grille — AIRFLOW",
  decor: "Grille — DÉCOR",
  facade: "Façade — FACADE",
};

/** Gamme display name (e.g. "AURA") → project-type option. */
export const GAMME_NAME_TO_PROJECT_TYPE: Record<string, string> = {
  AURA: "Garde-corps — AURA",
  FORGE: "Garde-corps — FORGE",
  "SECU+": "Garde-corps — SECU+",
  ATELIER: "Garde-corps — ATELIER",
  "JANSEN DESIGN": "Porte — JANSEN DESIGN",
  FIREWALL: "Porte — FIREWALL",
  TECHNIQUE: "Porte — TECHNIQUE",
  AIRFLOW: "Grille — AIRFLOW",
  DECOR: "Grille — DÉCOR",
  DÉCOR: "Grille — DÉCOR",
  FACADE: "Façade — FACADE",
};

/** Build a /devis URL preselecting the project type for a gamme slug. */
export function devisHrefForGamme(gammeSlug: string): string {
  const projet = GAMME_TO_PROJECT_TYPE[gammeSlug];
  return projet ? `/devis?projet=${encodeURIComponent(projet)}` : "/devis";
}

/** Build a /devis URL preselecting the project type from a gamme display name. */
export function devisHrefForGammeName(gammeName: string): string {
  const projet = GAMME_NAME_TO_PROJECT_TYPE[gammeName];
  return projet ? `/devis?projet=${encodeURIComponent(projet)}` : "/devis";
}

/** Build a /devis URL for a thermolaquage teinte request. */
export function devisHrefForTeinte(code: string): string {
  return `/devis?projet=${encodeURIComponent("Thermolaquage seul")}&teinte=${encodeURIComponent(code)}`;
}
