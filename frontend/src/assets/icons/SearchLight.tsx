
export const SearchLightIcon = ({ className, size, onClick }: { className?: string, size?: number, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size ?? "24"} height={size ?? "24"} onClick={onClick} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>);