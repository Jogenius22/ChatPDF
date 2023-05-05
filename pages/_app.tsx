import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { Chat, Feedback, Login, ModelTraining, Navbar, PDFProcessing, ProgressBar, UploadPDF } from '../components';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
