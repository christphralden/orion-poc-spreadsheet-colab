import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Work = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  const initializeLogOut = () => {
    instance.logoutRedirect();
  };

  return (
    <div className="w-full h-full">
      <h1>Am i authenticated : {isAuthenticated ? "Yes" : "No"}</h1>

      {isAuthenticated && (
        <div>
          <button onClick={initializeLogOut}>Logout</button>
        </div>
      )}

      <section className="w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://docs.google.com/spreadsheets/d/1uCJi1WbVO9I72J8VzAsmQol4_NwFjCB_dB4v6WIN7Uo/edit?gid=0#gid=0"
        ></iframe>
      </section>
    </div>
  );
};

export default Work;

// <iframe
//   width="100%"
//   height="100%"
//   src="https://binusianorg-my.sharepoint.com/personal/christopher_silitonga_binus_ac_id/_layouts/15/guestaccess.aspx?share=EaW86YYYGYZEkt5fV-6Dt8ABheZpH2H6U_abU9TmX7w2WA&e=ppfSqp&action=embedview&AllowTyping=True&wdInConfigurator=True&wdInConfigurator=True"
// ></iframe>
