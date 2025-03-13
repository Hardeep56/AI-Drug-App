import axios from 'axios';
import type { GenerationParameters, Molecule, TargetProtein } from '../types/molecule';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateMolecules = async (params: GenerationParameters): Promise<Molecule[]> => {
  // Simulated API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          smiles: 'CC1=CC=C(C=C1)C2=CC=C(C=C2)C(=O)N',
          molecularWeight: 225.28,
          logP: 2.5,
          syntheticAccessibility: 0.85,
          image: 'https://example.com/molecule1.svg',
        },
        // Add more simulated molecules
      ]);
    }, 1500);
  });
};

export const getTargetProteins = async (): Promise<TargetProtein[]> => {
  // Simulated API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'er-alpha',
          name: 'Estrogen Receptor Alpha',
          disease: 'ER+/HER2- Breast Cancer',
          description: 'Nuclear hormone receptor involved in breast cancer progression',
        },
        {
          id: 'tau',
          name: 'Tau Protein',
          disease: 'Alzheimer\'s Disease',
          description: 'Protein involved in microtubule stabilization and neurodegenerative disorders',
        },
        // Add more target proteins
      ]);
    }, 1000);
  });
};

export const analyzeMolecule = async (smiles: string): Promise<Partial<Molecule>> => {
  // Simulated API call - replace with actual endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        molecularWeight: 225.28,
        logP: 2.5,
        syntheticAccessibility: 0.85,
      });
    }, 1000);
  });
};