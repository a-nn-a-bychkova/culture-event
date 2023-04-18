import { useMemo, useState, useEffect } from 'react';
import Context from './context';
export default function Provider({ children }) {
  const [language, setLanguage] = useState('de');

  useEffect(() => {}, [language]);

  const providerValue = useMemo(() => {
    return {
      language,
      setLanguage,
    };
  }, [language]);
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
