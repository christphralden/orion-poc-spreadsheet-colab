import { useMsal } from "@azure/msal-react";

const Login = () => {
  const { instance } = useMsal();

  const initializeSignIn = () => {
    instance.loginRedirect();
  };

  return (
    <section className="w-full h-full flex justify-center items-center ">
      <div className="w-[500px] h-[350px] flex justify-center items-center rounded-md p-8">
        <button
          onClick={initializeSignIn}
          className="text-base font-bold w-full px-8 py-2 flex justify-center bg-white rounded-md outline outline-[1px] outline-gray-200 hover:bg-gray-200"
        >
          Login with Microsoft
        </button>
      </div>
    </section>
  );
};

export default Login;
