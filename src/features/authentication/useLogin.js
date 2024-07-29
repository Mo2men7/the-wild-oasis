import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginAPI({
        email,
        password,
      }),
    onSuccess: (user) => {
      // take the new user from the cache instead of fetching them every refresh
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
