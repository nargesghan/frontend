import { useRouter } from 'next/navigation';


const withAuth = WrappedComponent => {
  return (props) => {
    const router = useRouter();
    const token = localStorage.getItem('token');
    const userType=localStorage.getItem('userType')
    if (!token || userType!='employer') {
      router.replace('/authentication/employer/login');
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
