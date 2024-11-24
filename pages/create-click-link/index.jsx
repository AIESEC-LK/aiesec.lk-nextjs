import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace 'https://example.com' with your desired external URL
    const externalUrl = 'https://example.com';
    router.push(externalUrl);
  }, [router]);

  return null;
};

export default RedirectPage;
