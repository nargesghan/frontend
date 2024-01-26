import { useRouter } from 'next/navigation';


const withAuth = WrappedComponent => {

  return (props) => {
    const router = useRouter();
    let token;
    let userType;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
      userType = localStorage.getItem('userType');
    }
    if (!token || userType!='employee') {
      router.replace('/authentication/employee/login');
      return null;
    }

    // try {
    //   jwt.verify(token, 'YOUR_SECRET_KEY');
    // } catch (err) {
    //   localStorage.removeItem('token');
    //   router.push('/login');
    //   return null;
    // }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
