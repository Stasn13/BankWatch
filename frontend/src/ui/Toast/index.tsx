import { Card } from "../Card"


const Toast = ({success}: {success: boolean}) => {

    return (
        <Card
            className="bg-primary-focus"
            wrapperClassName="absolute min-w-[240px] max-w-[320px] left-0 bottom-6 right-0 m-auto shadow-2xl z-20"
        >
            toast
        </Card>
    )
}

export default Toast;
