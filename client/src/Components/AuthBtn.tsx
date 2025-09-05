export function AuthBtn(prop:{text:string}) {
    return (
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
            {prop.text}
          </button>
    )
}