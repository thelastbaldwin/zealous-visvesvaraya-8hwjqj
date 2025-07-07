interface HittingData {
  fBattingAverage: number;
  fOnBasePercentage: number;
  fOPS: number;
  fSlugging: number;
  fStrikeoutRate: number;
  fWalkRate: number;
  fWOBA: number;
  iAtBats: number;
  iCaughtStealing: number;
  iDoubles: number;
  iGames: number;
  iHitByPitches: number;
  iHits: number;
  iHomeRuns: number;
  iPlateAppearances: number;
  iRuns: number;
  iRunsBattedIn: number;
  iSingles: number;
  iStolenBases: number;
  iStrikeOuts: number;
  iTriples: number;
  iWalks: number;
  iYear: number;
  guidPlayerId: string;
}

export interface AmateurHittingData extends HittingData {
  iIntentionalWalks: number;
  vchDivision: string;
  vchTeam: string;
}

export interface ProHittingData extends HittingData {
  iGroundIntoDoublePlays: number;
  fAge: number;
  vchLVL: string;
  vchOrg: string;
}

export interface PlayerAverage {
  iYear: number;
  vchField: string;
  vchLevel: string;
  fAverage: number;
  fStandardDeviation: number;
}
