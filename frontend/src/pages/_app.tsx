import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <main>
        <Component {...pageProps} />
        <ToastContainer></ToastContainer>
      </main>
    </AuthContextProvider>
  )
}
