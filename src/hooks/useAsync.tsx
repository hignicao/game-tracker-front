import { useState, useEffect } from 'react';

type HandlerType = (...args: any[]) => Promise<any>;

interface UseAsyncReturnType {
  data: any;
  loading: boolean;
  error: any;
  act: HandlerType;
}

export default function useAsync(handler: HandlerType, immediate = true): UseAsyncReturnType {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<any>(null);

  const act: HandlerType = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act
  };
}
