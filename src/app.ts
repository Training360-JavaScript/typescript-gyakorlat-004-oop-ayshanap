// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero (0, "Hero1", "female", 33, 200, "family"),
    new HumanHero (1, "Hero2", "male", 45, 200),
    new HumanHero (2, "Hero3", "female", 13, 200)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
    new TransformerHero (0, "Trans1", 4, 4, "clan"),
    new TransformerHero (1, "Trans2",  5, 4, "clan"),
    new TransformerHero (2, "Trans3", 6, 4, "clan"),
];
