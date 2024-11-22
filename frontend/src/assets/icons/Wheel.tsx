export const WheelIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size ?? "24"} height={size ?? "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" /><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" /><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" /><circle cx="12" cy="12" r="10" />
    </svg>
)