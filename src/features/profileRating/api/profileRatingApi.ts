import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface GetProfileRatingArg {
  userId: string;
  profileId: string;
}

interface RateProfileArg {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<Rating[], GetProfileRatingArg>({
      query: (arg) => ({
        url: "/profile-ratings",
        params: arg,
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: "/profile-ratings",
        method: "post",
        body: arg,
      }),
    }),
  }),
});
export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
