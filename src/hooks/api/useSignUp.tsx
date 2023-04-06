import useAsync from '../useAsync';
import * as userApi from '../../services/userApi';

type SignUpReturnType = {
  signUpLoading: boolean;
  signUpError: any;
  signUp: (...args: any[]) => Promise<any>;
};

export default function useSignUp(): SignUpReturnType {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(userApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
