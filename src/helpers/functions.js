import { useLocation } from "react-router-dom";

export const mergeUsers = (privileged, second) => {
  return second.map(
    (baseUser) => privileged.find((user) => user.id === baseUser.id) || baseUser
  );
};

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
