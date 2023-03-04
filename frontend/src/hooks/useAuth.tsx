import { RootState } from "../store";
import { Auth, authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return {
    auth,
    setAuth: (auth: Auth) => dispatch(authActions.setAuth(auth)),
    removeAuth: () => dispatch(authActions.removeAuth()),
  };
}
