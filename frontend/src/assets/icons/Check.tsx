export const CheckIcon = ({ className, size, checked }: { className?: string, size?: number, checked?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size ?? "24"} height={size ?? "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" style={{ opacity: checked ? "1" : "0" }} />
    </svg>
)