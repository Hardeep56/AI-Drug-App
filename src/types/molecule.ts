export interface Molecule {
  id: string;
  smiles: string;
  molecularWeight: number;
  logP: number;
  syntheticAccessibility: number;
  image?: string;
}

export interface TargetProtein {
  id: string;
  name: string;
  disease: string;
  description: string;
}

export interface GenerationParameters {
  targetProtein: string;
  molecularWeightRange: {
    min: number;
    max: number;
  };
  logPRange: {
    min: number;
    max: number;
  };
  syntheticAccessibilityThreshold: number;
}