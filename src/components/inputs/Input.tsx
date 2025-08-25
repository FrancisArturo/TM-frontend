import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";



interface Props {
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    label: string,
    placeholder: string,
    type: string
}


export const Input: React.FC<Props> = ( {value, onChange, label, placeholder, type} ) => {

    const [ showPassword, setShowPassword ] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <label className="text-[13px] text-slate-800"></label>
                {label}
            <div className="input-box">
                <input 
                    type={type == 'password'? showPassword? 'text' : 'password': type }
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none"
                    value={value}
                    onChange={onChange}
                />

                {type == "password" && (
                    <>
                        {showPassword 
                            ? (
                                <FaRegEye 
                                    size={22}
                                    className="text-primary cursor-pointer"
                                    onClick={() => toggleShowPassword()}
                                />
                            )
                            : (
                                <FaRegEyeSlash 
                                    size={22}
                                    className="text-slate-400 cursor-pointer"
                                    onClick={() => toggleShowPassword()}
                                />
                            )
                        }
                    </>
                )}
            </div>
        </div>
    )
}
