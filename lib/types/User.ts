import { z } from "zod";

// These are the roles that we can attach to the role field (CAN BE UNDEFINED)

const RoleEnum = z.enum(["CANDIDATE", "RECRUITER"]);

// This is the whole User dto that we allow to be returned

const User = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  profile_url: z.string().optional(),
  role: RoleEnum,
});

const UserDto = z.object({
  email: z.string(),
  name: z.string(),
  profile_url: z.string().optional(),
  role: RoleEnum.optional(),
});

type UserType = z.infer<typeof User>;
type RoleEnumType = z.infer<typeof RoleEnum>;
type UserDtoType = z.infer<typeof UserDto>;

export { User, RoleEnum, type RoleEnumType, type UserType, type UserDtoType };
