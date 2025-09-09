interface AuthBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function AuthBtn({ text, ...props}: AuthBtnProps) {
    return (
        <button
        {...props} type="submit" 
        className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
            {text}
          </button>
    )
}