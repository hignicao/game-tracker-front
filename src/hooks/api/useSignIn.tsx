import useAsync from '../useAsync';
import * as authApi from '../../services/authApi';

type SignInReturnType = {
  signInLoading: boolean;
  signInError: any;
  signIn: (...args: any[]) => Promise<any>;
};

export default function useSignIn(): SignInReturnType {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}
