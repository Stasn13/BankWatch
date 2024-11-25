export const XIcon = ({ className, size, onClick }: { className?: string, size?: number, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size ?? "24"} height={size ?? "24"} onClick={onClick} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>);