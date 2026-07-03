'use client';

import Script from 'next/script';

const APOLLO_APP_ID = '6a09a9595be6ed00104c69ba';

export default function ApolloTracker() {
  return (
    <Script
      id="apollo-tracker-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function initApollo(){
            var n=Math.random().toString(36).substring(7),
            o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"${APOLLO_APP_ID}"})},
            document.head.appendChild(o)
          }
          initApollo();
        `,
      }}
    />
  );
}
