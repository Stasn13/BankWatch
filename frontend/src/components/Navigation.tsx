import { DashboardIcon } from "../assets/icons/Dasboard"
import { SearchIcon } from "../assets/icons/Search"
import { Card } from "../ui/Card"

const Navigation = () => {
    return (
        <Card className="bg-foreground-light h-[fit-content] flex flex-col gap-4 pt-4 px-2 pb-6 mt-4 items-center">
            <div className="w-[48px] h-[48px] rounded-lg bg-black grid justify-center items-center font-bold">BW</div>
            <DashboardIcon className="border rounded-lg p-2"/>
            <SearchIcon className="rounded-lg p-2"/> 
            {/* border */}
        </Card>
    )
}

export default Navigation