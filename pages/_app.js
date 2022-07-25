import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { QueppelinProvider } from '../context/QueppelinContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <QueppelinProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </QueppelinProvider>
    </MoralisProvider>
  )
}

export default MyApp


