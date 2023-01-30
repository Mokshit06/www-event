import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@codeday/topo/Theme';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import getConfig from 'next/config';
import nextI18NextConfig from '../../next-i18next.config';

const { publicRuntimeConfig } = getConfig();
const stripePromise = loadStripe(publicRuntimeConfig.stripeKey);

const App = ({ Component, pageProps }) => (
  <ThemeProvider brandColor="red" analyticsId="AZKCYNER" withChat>
    <Elements stripe={stripePromise} options={{ fonts: [{ cssSrc: 'https://f1.codeday.org/topo/fonts/all.css' }] }}>
      <Component {...pageProps} />
    </Elements>
  </ThemeProvider>
);
export default appWithTranslation(App, nextI18NextConfig);
