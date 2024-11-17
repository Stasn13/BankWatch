import { DashboardIcon } from "../assets/icons/Dasboard"
import { SearchIcon } from "../assets/icons/Search"
import { Card } from "../ui/Card"

const Navigation = () => {
    return (
        <Card className="bg-foreground-light">
            <DashboardIcon />
            <SearchIcon />
        </Card>
    )
}

export default Navigation