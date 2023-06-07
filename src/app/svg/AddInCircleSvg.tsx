import { generateSvgComponent } from './generateSvgComponent'

export const AddInCircleSvg = generateSvgComponent(
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.75"
            y="0.75"
            width="22.5"
            height="22.5"
            rx="11.25"
            stroke="white"
            strokeWidth="1.5"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.66675C12.3682 6.66675 12.6667 6.96522 12.6667 7.33341V11.3334H16.6667C17.0348 11.3334 17.3333 11.6319 17.3333 12.0001C17.3333 12.3683 17.0348 12.6667 16.6667 12.6667H12.6667V16.6667C12.6667 17.0349 12.3682 17.3334 12 17.3334C11.6318 17.3334 11.3333 17.0349 11.3333 16.6667V12.6667H7.33332C6.96513 12.6667 6.66666 12.3683 6.66666 12.0001C6.66666 11.6319 6.96513 11.3334 7.33332 11.3334H11.3333V7.33341C11.3333 6.96522 11.6318 6.66675 12 6.66675Z"
            fill="white"
        />
    </svg>,
)
