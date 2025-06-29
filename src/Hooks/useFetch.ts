import { useEffect, useState } from "react";

export default function UseFetch<T = any>(
  url: string, method = 'GET', body: any = null, headers: Record<string, string> = {}
) {

  const [data, setData] = useState < T | null > (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState < Error | null > (null);

  useEffect(() => {

    const fetchApi = async () => {
      setLoading(true);
      setError(null)

      try {

        const options: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          }



        }
        if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
          options.body = JSON.stringify(body);

        }

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);

        }
        const result = await response.json()
        setData(result);
        setError(null)

      }
      catch (err) {
        setData(null)
        setError(err instanceof Error ? err : new Error(String(err)))
      }
      finally {
        setLoading(false)
      }

    }
    fetchApi()



  }, [url, method, JSON.stringify(body), JSON.stringify(headers)])

  return { data, loading, error }

}