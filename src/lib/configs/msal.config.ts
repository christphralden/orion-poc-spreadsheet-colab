import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_PUBLIC_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_PUBLIC_TENANT_ID}`,
    redirectUri: import.meta.env.VITE_PUBLIC_REDIRECT_URI,
  },
};

export const pca = new PublicClientApplication(msalConfig);
