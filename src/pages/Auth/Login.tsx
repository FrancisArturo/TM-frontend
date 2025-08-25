import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { Input } from "../../components/inputs/Input";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";



export const Login: React.FC = () => {

  const [email, setEmail] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState<string | null>(null);

  // const navigate = useNavigate();

  //handle login form
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
  }

  //handle email input
  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  //handle password input
  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input 
            value={email}
            onChange={handleOnChangeEmail}
            label="Email Address"
            placeholder="johndoe@example.com"
            type="text"
          />
          <Input 
            value={password}
            onChange={handleOnChangePassword}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          { error && <p className="text-red-500 text-xs pb-2.5">{error}</p> }

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don´t have an account?{" "}
            <Link className="font-medium text-primary underline" to={"/signup"}>
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}
