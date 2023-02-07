import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="w-[200px] flex flex-col gap-3 p-3 border rounded-xl bg-slate-200 shadow-lg">
            <Link to='/list' className="font-mono hover:text-white">List</Link>
            <Link to='/table' className="font-mono hover:text-white">Table</Link>
        </div>
    )
}

export default Navigation;