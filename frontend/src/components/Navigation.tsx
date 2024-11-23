import { Link } from "@tanstack/react-router"
import { DashboardIcon } from "../assets/icons/Dasboard"
import { SearchIcon } from "../assets/icons/Search"
import { Card } from "../ui/Card"

const Navigation = () => {
    return (
        <Card className="bg-foreground-light h-[fit-content] flex flex-col gap-4 pt-4 px-2 pb-6 mt-4 items-center">
            <Link
                to="/"
                className="[&.active]:border-white rounded-lg border border-transparent transition"
            >
                <div className="w-[48px] h-[48px] rounded-lg bg-black grid justify-center items-center font-bold">BW</div>
            </Link>
            <Link
                to="/dashboard"
                className="[&.active]:border-white rounded-lg border border-transparent transition"
            >
                <DashboardIcon className="p-2" />
            </Link>
            <Link
                to="/discover"
                // params={{ somewhereId: 'baz' }}
                className="[&.active]:border-white rounded-lg border border-transparent transition"
            >
                <SearchIcon className="rounded-lg p-2" />
            </Link>
        </Card>
    )
}

export default Navigation