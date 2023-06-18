export type Match ={
  begin_at: Date,
  games: Game[],
  name: string,
  detailed_stats: boolean,
  end_at: Date | null,
  forfeit: boolean,
  id: number,
  number_of_games: number,
  original_scheduled_at: Date,
  rescheduled: boolean,
}

export type Game ={
  begin_at: Date,
  complete: boolean,
  finished: boolean,
  forfeit: boolean,
  id: number,
  match_id: number,
  position: number,
  status: string,
  winner: number | null,
}