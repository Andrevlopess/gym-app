import { supabase } from "@/lib/supabase";
import { IExercise } from "@/types/exercise";

interface SearchExercisesParams {
  search: string;
  filter?: string;
  limit?: number;
  pageParam: unknown;
}

interface FindOneParams {
  id: string;
}

export class ExerciseApi {
  private constructor() {}

  static async findOne(params: FindOneParams) {
    try {
      let { data: exercise, error } = await supabase
        .rpc("get-exercise-details", { exercise_id: params.id })
        .single();

      if (error) throw error;

      return exercise as IExercise;
    } catch (error) {
      throw error;
    }
  }

  static async search(params: SearchExercisesParams) {
    try {
      const { data: exercises, error } = await supabase.rpc("search_exercises", {
        filter: params.filter,
        page_num: params.pageParam,
        page_size: params.limit,
        query: params.search,
      });

      if (error) throw error;

      return exercises as IExercise[];
    } catch (error) {
      throw error;
    }
  }
}
