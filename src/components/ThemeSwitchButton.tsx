import Moon from "../icons/Moon"
export default function ThemeSwitchButton() {
  return (
    <button className="hover:bg-gray-300 bg-slate-200 rounded flex items-center justify-center p-2 shadow-2xl">
      <Moon className="w-10 h-10 md:w-5 md:h-5 fill-black"/>
    </button>
  )
}
