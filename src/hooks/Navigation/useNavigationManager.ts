import { useNavigate } from 'react-router-dom';

export default function useNavigationManager() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function navigateTo(path: string, state?: any) {
    navigate(path, { state });
  }

  function goBack() {
    navigate(-1);
  }
  function goForward() {
    navigate(1);
  }

  return {
    navigateTo,
    goBack,
    goForward,
  };
}
