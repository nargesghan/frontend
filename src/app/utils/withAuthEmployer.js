import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');

      if (!token || userType !== 'employer') {
        Router.replace('/authentication/employer/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
