import { getCardsUrl, getFoldersUrl, getTranslationUrl } from '../../utils/urls'

export const sidebarMenuItems = [
    {
        icon: (
            <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33332 0.333008C5.70151 0.333008 5.99998 0.631485 5.99998 0.999674V1.66634H9.33332C9.70151 1.66634 9.99998 1.96482 9.99998 2.33301C9.99998 2.7012 9.70151 2.99967 9.33332 2.99967H8.21882C7.87729 4.61763 7.25 6.11107 6.3765 7.42417C6.56671 7.54122 6.75577 7.64219 6.93986 7.7249C7.27571 7.87578 7.42565 8.27037 7.27476 8.60622C7.12387 8.94207 6.72929 9.09201 6.39344 8.94112C6.11828 8.8175 5.84381 8.66704 5.57557 8.49567C4.50422 9.77553 3.17158 10.8306 1.63001 11.5967C1.30029 11.7605 0.900165 11.6261 0.736308 11.2964C0.572452 10.9666 0.70691 10.5665 1.03663 10.4027C2.39614 9.72705 3.56984 8.80225 4.51653 7.68335C3.75725 6.99596 3.09298 6.14377 2.71921 5.25914C2.57592 4.91998 2.7347 4.52887 3.07386 4.38557C3.41302 4.24227 3.80412 4.40105 3.94742 4.74021C4.21747 5.37937 4.71553 6.0436 5.31734 6.60833C6.02013 5.53213 6.54212 4.31761 6.85274 2.99967H1.33332C0.965128 2.99967 0.666651 2.7012 0.666651 2.33301C0.666651 1.96482 0.965128 1.66634 1.33332 1.66634H4.66665V0.999674C4.66665 0.631485 4.96513 0.333008 5.33332 0.333008ZM10.5651 5.20509C10.8399 5.07242 11.1601 5.07242 11.4348 5.20509C11.6738 5.32049 11.8034 5.52157 11.8678 5.62977C11.9352 5.74313 12.0044 5.88784 12.0723 6.02998L15.2681 12.712C15.4269 13.0442 15.2864 13.4422 14.9543 13.6011C14.6221 13.76 14.2241 13.6195 14.0652 13.2873L12.9711 10.9997H9.02883L7.93474 13.2873C7.77588 13.6195 7.37784 13.76 7.04568 13.6011C6.71352 13.4422 6.57304 13.0442 6.7319 12.712L9.91743 6.05139C9.92083 6.04427 9.92423 6.03715 9.92764 6.03001C9.9956 5.88786 10.0648 5.74314 10.1322 5.62977C10.1966 5.52157 10.3262 5.32049 10.5651 5.20509ZM9.66651 9.66634H12.3335L11 6.87817L9.66651 9.66634Z"
                    fill="#E2E2E4"
                />
            </svg>
        ),
        name: 'Dictionary',
        link: getTranslationUrl(),
    },
    {
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8026 3.02045L11.8026 3.02046L11.8026 3.02045ZM12 3.11804L19.7639 7L16.5618 8.60106C16.5553 8.60423 16.5488 8.60747 16.5424 8.61078L12 10.882L7.45763 8.61079C7.45118 8.60747 7.44469 8.60423 7.43817 8.60106L4.23607 7L12 3.11804ZM4.76393 9.5L1.55279 7.89443C1.214 7.72504 1 7.37878 1 7C1 6.62123 1.214 6.27497 1.55279 6.10558L11.195 1.28446C11.2024 1.28076 11.211 1.27639 11.2206 1.27149C11.3139 1.22388 11.507 1.12535 11.7234 1.08474C11.9062 1.05045 12.0938 1.05045 12.2766 1.08474C12.493 1.12535 12.6861 1.22388 12.7794 1.27149C12.789 1.27639 12.7976 1.28076 12.805 1.28446L22.4472 6.10558C22.786 6.27497 23 6.62123 23 7C23 7.37878 22.786 7.72504 22.4472 7.89443L19.2361 9.5L22.4472 11.1056C22.786 11.275 23 11.6212 23 12C23 12.3788 22.786 12.725 22.4472 12.8944L19.2361 14.5L22.4472 16.1056C22.786 16.275 23 16.6212 23 17C23 17.3788 22.786 17.725 22.4472 17.8944L12.805 22.7155C12.7976 22.7192 12.789 22.7236 12.7794 22.7285C12.6861 22.7761 12.493 22.8747 12.2766 22.9153C12.0938 22.9496 11.9062 22.9496 11.7234 22.9153C11.507 22.8747 11.3139 22.7761 11.2206 22.7285C11.211 22.7236 11.2024 22.7192 11.195 22.7155L1.55279 17.8944C1.214 17.725 1 17.3788 1 17C1 16.6212 1.214 16.275 1.55279 16.1056L4.76393 14.5L1.55279 12.8944C1.214 12.725 1 12.3788 1 12C1 11.6212 1.214 11.275 1.55279 11.1056L4.76393 9.5ZM7 10.618L4.23607 12L7.43819 13.6011C7.4447 13.6042 7.45117 13.6075 7.45761 13.6108L12 15.882L16.5424 13.6108C16.5488 13.6075 16.5553 13.6042 16.5618 13.6011L19.7639 12L17 10.618L12.805 12.7155C12.7976 12.7192 12.789 12.7236 12.7794 12.7285C12.6861 12.7761 12.493 12.8747 12.2766 12.9153C12.0938 12.9496 11.9062 12.9496 11.7234 12.9153C11.507 12.8747 11.3139 12.7761 11.2206 12.7285C11.211 12.7236 11.2024 12.7192 11.195 12.7155L7 10.618ZM17 15.618L12.805 17.7155C12.7976 17.7192 12.789 17.7236 12.7794 17.7285C12.6861 17.7761 12.493 17.8747 12.2766 17.9153C12.0938 17.9496 11.9062 17.9496 11.7234 17.9153C11.507 17.8747 11.3139 17.7761 11.2206 17.7285C11.211 17.7236 11.2024 17.7192 11.195 17.7155L7 15.618L4.23607 17L12 20.882L19.7639 17L17 15.618ZM11.8026 15.9796C11.8024 15.9796 11.8024 15.9796 11.8026 15.9796L11.8026 15.9796ZM12.1974 15.9796C12.1976 15.9796 12.1976 15.9796 12.1974 15.9796L12.1974 15.9796ZM11.8026 10.9796C11.8024 10.9797 11.8024 10.9796 11.8026 10.9795L11.8026 10.9796ZM12.1974 10.9795C12.1976 10.9796 12.1976 10.9797 12.1974 10.9796L12.1974 10.9795ZM12.1974 3.02046L12.1974 3.02045L12.1974 3.02046Z"
                    fill="#BCBBC2"
                />
            </svg>
        ),
        name: 'Cards',
        link: getCardsUrl(),
    },
    {
        icon: (
            <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.72651 1.70292C6.64609 1.67518 6.54164 1.66648 6.0147 1.66648H3.46651C3.08214 1.66648 2.83395 1.667 2.64506 1.68244C2.46395 1.69723 2.39681 1.72235 2.36384 1.73915C2.2384 1.80306 2.13642 1.90505 2.0725 2.03049C2.05571 2.06345 2.03059 2.1306 2.01579 2.31171C2.00222 2.47781 2.00018 2.68975 1.99989 2.99982H7.58782L7.32653 2.47724C7.09088 2.00594 7.03638 1.9164 6.97561 1.85687C6.90501 1.78773 6.81992 1.73514 6.72651 1.70292ZM9.07853 2.99982L8.5191 1.88095C8.50663 1.85603 8.49431 1.8313 8.48209 1.80677C8.30559 1.45261 8.15037 1.14115 7.90856 0.904315C7.69677 0.696882 7.44152 0.539126 7.16127 0.442461C6.8413 0.332097 6.49332 0.332556 6.09761 0.333079C6.0702 0.333115 6.04257 0.333151 6.0147 0.333151L3.44081 0.333151C3.08938 0.333139 2.7862 0.333128 2.53649 0.353531C2.27292 0.375065 2.01078 0.422609 1.75852 0.551138C1.3822 0.742885 1.07624 1.04885 0.884492 1.42517C0.755963 1.67742 0.708419 1.93957 0.686885 2.20313C0.666482 2.45285 0.666493 2.75602 0.666504 3.10746L0.666505 9.82735C0.666496 10.364 0.666489 10.8069 0.695968 11.1677C0.726584 11.5424 0.792294 11.8869 0.957154 12.2105C1.21282 12.7122 1.62076 13.1202 2.12253 13.3758C2.44609 13.5407 2.79056 13.6064 3.16529 13.637C3.52608 13.6665 3.96898 13.6665 4.50562 13.6665H11.4941C12.0307 13.6665 12.4736 13.6665 12.8344 13.637C13.2091 13.6064 13.5536 13.5407 13.8771 13.3758C14.3789 13.1202 14.7869 12.7122 15.0425 12.2105C15.2074 11.8869 15.2731 11.5424 15.3037 11.1677C15.3332 10.8069 15.3332 10.364 15.3332 9.82737V6.83894C15.3332 6.3023 15.3332 5.85939 15.3037 5.4986C15.2731 5.12387 15.2074 4.7794 15.0425 4.45584C14.7869 3.95408 14.3789 3.54613 13.8771 3.29047C13.5536 3.12561 13.2091 3.0599 12.8344 3.02928C12.4736 2.9998 12.0307 2.99981 11.494 2.99982L9.07853 2.99982ZM8.65309 4.33315C8.66236 4.33335 8.67165 4.33335 8.68095 4.33315H11.4665C12.0376 4.33315 12.4258 4.33367 12.7258 4.35819C13.0181 4.38207 13.1676 4.42535 13.2718 4.47848C13.5227 4.60631 13.7267 4.81028 13.8545 5.06116C13.9076 5.16543 13.9509 5.3149 13.9748 5.60718C13.9993 5.90724 13.9998 6.29543 13.9998 6.86649V9.79982C13.9998 10.3709 13.9993 10.7591 13.9748 11.0591C13.9509 11.3514 13.9076 11.5009 13.8545 11.6051C13.7267 11.856 13.5227 12.06 13.2718 12.1878C13.1676 12.241 13.0181 12.2842 12.7258 12.3081C12.4258 12.3326 12.0376 12.3332 11.4665 12.3332H4.53317C3.96212 12.3332 3.57392 12.3326 3.27386 12.3081C2.98159 12.2842 2.83212 12.241 2.72785 12.1878C2.47697 12.06 2.27299 11.856 2.14516 11.6051C2.09204 11.5009 2.04875 11.3514 2.02487 11.0591C2.00036 10.7591 1.99984 10.3709 1.99984 9.79982V4.33315H8.65309Z"
                    fill="#BCBBC2"
                />
            </svg>
        ),
        name: 'Groups',
        link: getFoldersUrl(),
    },
    // {
    //     icon: (
    //         <svg
    //             width="16"
    //             height="16"
    //             viewBox="0 0 16 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M7.99994 1.89994C7.82875 1.89994 7.66458 1.96794 7.54353 2.08898C7.42248 2.21003 7.35448 2.3742 7.35448 2.54539V2.64842L7.35448 2.65068C7.35326 2.95621 7.26273 3.25472 7.09402 3.50947C6.92587 3.76338 6.68737 3.96276 6.40772 4.08324C6.1127 4.21261 5.74682 4.24406 5.44999 4.19024C5.14198 4.13439 4.85776 3.98755 4.63399 3.76866L4.62952 3.76429L4.59318 3.7279C4.53324 3.66789 4.46183 3.62006 4.38347 3.58758C4.30511 3.55509 4.22112 3.53838 4.1363 3.53838C4.05148 3.53838 3.96748 3.55509 3.88913 3.58758C3.81077 3.62006 3.73958 3.66767 3.67964 3.72768C3.61963 3.78762 3.57157 3.85926 3.53909 3.93761C3.50661 4.01597 3.48989 4.09996 3.48989 4.18478C3.48989 4.26961 3.50661 4.3536 3.53909 4.43195C3.57157 4.51031 3.61918 4.5815 3.67919 4.64144L3.7202 4.68245C3.93909 4.90622 4.08591 5.19047 4.14176 5.49848C4.19654 5.80062 4.1613 6.11206 4.04064 6.39413C3.93099 6.68209 3.73879 6.93145 3.48796 7.11085C3.23226 7.29373 2.92746 7.39546 2.61319 7.40281L2.59993 7.40297H2.54539C2.3742 7.40297 2.21003 7.47097 2.08898 7.59202C1.96794 7.71306 1.89994 7.87723 1.89994 8.04842C1.89994 8.21961 1.96794 8.38378 2.08898 8.50483C2.21003 8.62587 2.3742 8.69387 2.54539 8.69387H2.65068C2.95622 8.6951 3.25473 8.78563 3.50947 8.95433C3.76335 9.12247 3.96272 9.36094 4.08321 9.64056C4.20863 9.92622 4.24591 10.2429 4.19024 10.5499C4.13439 10.8579 3.98755 11.1421 3.76866 11.3659L3.76429 11.3704L3.7279 11.4067C3.66789 11.4666 3.62006 11.538 3.58758 11.6164C3.55509 11.6948 3.53838 11.7787 3.53838 11.8636C3.53838 11.9484 3.55509 12.0324 3.58758 12.1107C3.62006 12.1891 3.66767 12.2603 3.72768 12.3202C3.78762 12.3802 3.85925 12.4283 3.93761 12.4608C4.01597 12.4933 4.09996 12.51 4.18478 12.51C4.26961 12.51 4.3536 12.4933 4.43195 12.4608C4.51031 12.4283 4.5815 12.3807 4.64144 12.3207L4.68245 12.2797C4.90622 12.0608 5.19047 11.914 5.49848 11.8581C5.80062 11.8033 6.11206 11.8386 6.39414 11.9592C6.68209 12.0689 6.93145 12.2611 7.11085 12.5119C7.29373 12.7676 7.39546 13.0724 7.40281 13.3867L7.40297 13.3999V13.4545C7.40297 13.6257 7.47097 13.7898 7.59202 13.9109C7.71306 14.0319 7.87724 14.0999 8.04842 14.0999C8.2196 14.0999 8.38378 14.0319 8.50483 13.9109C8.62587 13.7898 8.69387 13.6257 8.69387 13.4545V13.3515L8.69388 13.3492C8.6951 13.0437 8.78563 12.7451 8.95433 12.4904C9.12247 12.2365 9.36094 12.0372 9.64056 11.9167C9.92622 11.7912 10.2429 11.754 10.5499 11.8096C10.8579 11.8655 11.1421 12.0123 11.3659 12.2312L11.3704 12.2356L11.4067 12.272C11.4666 12.332 11.538 12.3798 11.6164 12.4123C11.6948 12.4448 11.7787 12.4615 11.8636 12.4615C11.9484 12.4615 12.0324 12.4448 12.1107 12.4123C12.1891 12.3798 12.2603 12.3322 12.3202 12.2722C12.3802 12.2122 12.4283 12.1406 12.4608 12.0623C12.4933 11.9839 12.51 11.8999 12.51 11.8151C12.51 11.7303 12.4933 11.6463 12.4608 11.5679C12.4283 11.4896 12.3807 11.4184 12.3207 11.3584L12.2797 11.3174C12.0608 11.0936 11.914 10.8094 11.8581 10.5014C11.8024 10.1944 11.8397 9.87774 11.9651 9.59207C12.0856 9.31245 12.285 9.07399 12.5389 8.90585C12.7936 8.73715 13.0921 8.64661 13.3977 8.64539L13.3999 8.64539L13.4545 8.64539C13.6257 8.64539 13.7898 8.57739 13.9109 8.45634C14.0319 8.33529 14.0999 8.17112 14.0999 7.99994C14.0999 7.82875 14.0319 7.66458 13.9109 7.54353C13.7898 7.42248 13.6257 7.35448 13.4545 7.35448H13.3515L13.3492 7.35448C13.0437 7.35326 12.7451 7.26273 12.4904 7.09402C12.2365 6.92587 12.0371 6.68737 11.9166 6.40772C11.7873 6.1127 11.7558 5.74682 11.8096 5.44999C11.8655 5.14198 12.0123 4.85776 12.2312 4.63399L12.2356 4.62952L12.272 4.59318C12.332 4.53324 12.3798 4.46182 12.4123 4.38347C12.4448 4.30511 12.4615 4.22112 12.4615 4.1363C12.4615 4.05147 12.4448 3.96748 12.4123 3.88913C12.3798 3.81077 12.3322 3.73959 12.2722 3.67964C12.2122 3.61963 12.1406 3.57157 12.0623 3.53909C11.9839 3.50661 11.8999 3.48989 11.8151 3.48989C11.7303 3.48989 11.6463 3.50661 11.5679 3.53909C11.4896 3.57157 11.4184 3.61918 11.3584 3.67919L11.3174 3.7202C11.0936 3.93909 10.8094 4.08591 10.5014 4.14176C10.1944 4.19742 9.87774 4.16014 9.59207 4.03472C9.31246 3.91423 9.07399 3.71487 8.90585 3.46098C8.73715 3.20624 8.64661 2.90773 8.64539 2.6022L8.64539 2.59993V2.54539C8.64539 2.3742 8.57739 2.21003 8.45634 2.08898C8.33529 1.96794 8.17112 1.89994 7.99994 1.89994ZM6.74214 1.2876C7.07573 0.954009 7.52817 0.766602 7.99994 0.766602C8.4717 0.766602 8.92414 0.954009 9.25773 1.2876C9.59132 1.62118 9.77872 2.07363 9.77872 2.54539V2.59856C9.77923 2.68276 9.80426 2.765 9.85076 2.83521C9.89742 2.90567 9.96367 2.96095 10.0413 2.99424L10.0469 2.99663C10.1261 3.03159 10.214 3.04205 10.2992 3.02661C10.3836 3.0113 10.4615 2.97131 10.5231 2.91172L10.5566 2.87825C10.7218 2.71297 10.9181 2.58162 11.1339 2.49215C11.3499 2.40263 11.5813 2.35656 11.8151 2.35656C12.0488 2.35656 12.2803 2.40263 12.4963 2.49215C12.7122 2.58167 12.9084 2.71287 13.0736 2.87825C13.2388 3.04336 13.3698 3.23938 13.4592 3.45513C13.5488 3.67107 13.5948 3.90254 13.5948 4.1363C13.5948 4.37006 13.5488 4.60153 13.4592 4.81747C13.3697 5.03341 13.2385 5.22959 13.0731 5.39479L13.0397 5.42825C12.9801 5.48987 12.9401 5.56781 12.9248 5.65219C12.9075 5.74762 12.9238 5.88286 12.9547 5.95295L12.9572 5.95851C12.9905 6.03619 13.0457 6.10245 13.1162 6.14911C13.1864 6.19561 13.2686 6.22064 13.3528 6.22115H13.4545C13.9262 6.22115 14.3787 6.40856 14.7123 6.74214C15.0459 7.07573 15.2333 7.52817 15.2333 7.99994C15.2333 8.4717 15.0459 8.92414 14.7123 9.25773C14.3787 9.59132 13.9262 9.77872 13.4545 9.77872H13.4013C13.3171 9.77923 13.2349 9.80426 13.1647 9.85076C13.0942 9.89742 13.0389 9.96367 13.0056 10.0413L13.0032 10.0469C12.9683 10.1261 12.9578 10.214 12.9733 10.2992C12.9886 10.3836 13.0286 10.4615 13.0882 10.5231L13.1216 10.5566C13.2869 10.7218 13.4182 10.9181 13.5077 11.1339C13.5972 11.3499 13.6433 11.5813 13.6433 11.8151C13.6433 12.0488 13.5972 12.2803 13.5077 12.4963C13.4182 12.7121 13.2871 12.9082 13.1218 13.0734C12.9567 13.2386 12.7606 13.3698 12.5447 13.4592C12.3288 13.5488 12.0973 13.5948 11.8636 13.5948C11.6298 13.5948 11.3983 13.5488 11.1824 13.4592C10.9665 13.3697 10.7703 13.2385 10.6051 13.0731L10.5716 13.0397C10.51 12.9801 10.4321 12.9401 10.3477 12.9248C10.2625 12.9093 10.1746 12.9198 10.0954 12.9547L10.0898 12.9572C10.0122 12.9905 9.94591 13.0457 9.89924 13.1162C9.85275 13.1864 9.82772 13.2686 9.82721 13.3528V13.4545C9.82721 13.9262 9.6398 14.3787 9.30621 14.7123C8.97263 15.0459 8.52018 15.2333 8.04842 15.2333C7.57666 15.2333 7.12421 15.0459 6.79063 14.7123C6.45704 14.3787 6.26963 13.9262 6.26963 13.4545V13.4079C6.26661 13.3229 6.2386 13.2405 6.18903 13.1712C6.13845 13.1005 6.06776 13.0466 5.98615 13.0166C5.97495 13.0125 5.96387 13.008 5.95295 13.0032C5.87374 12.9682 5.78587 12.9578 5.70068 12.9733C5.6163 12.9886 5.53838 13.0285 5.47676 13.0881L5.44328 13.1216C5.27812 13.2869 5.0818 13.4182 4.86595 13.5077C4.65001 13.5972 4.41854 13.6433 4.18478 13.6433C3.95102 13.6433 3.71956 13.5972 3.50361 13.5077C3.28787 13.4183 3.09185 13.2872 2.92674 13.1221C2.76135 12.9569 2.63015 12.7607 2.54063 12.5447C2.45112 12.3288 2.40504 12.0973 2.40504 11.8636C2.40504 11.6298 2.45112 11.3983 2.54063 11.1824C2.63011 10.9666 2.76123 10.7705 2.92652 10.6053L2.9602 10.5716C3.0198 10.51 3.05979 10.4321 3.07509 10.3477C3.09054 10.2625 3.08011 10.1746 3.04515 10.0954L3.0427 10.0898C3.0094 10.0122 2.95416 9.94591 2.8837 9.89924C2.81348 9.85275 2.73125 9.82772 2.64705 9.82721H2.54539C2.07363 9.82721 1.62118 9.6398 1.2876 9.30621C0.954009 8.97263 0.766602 8.52018 0.766602 8.04842C0.766602 7.57666 0.954009 7.12422 1.2876 6.79063C1.62118 6.45704 2.07363 6.26963 2.54539 6.26963H2.59194C2.67701 6.26661 2.75934 6.2386 2.82864 6.18903C2.89936 6.13845 2.95324 6.06776 2.98325 5.98615C2.98737 5.97495 2.99184 5.96387 2.99666 5.95295C3.03162 5.87374 3.04205 5.78587 3.02661 5.70068C3.01131 5.6163 2.97132 5.53838 2.91173 5.47676L2.87825 5.44328C2.71297 5.27812 2.58162 5.0818 2.49215 4.86595C2.40263 4.65001 2.35656 4.41854 2.35656 4.18478C2.35656 3.95102 2.40263 3.71956 2.49215 3.50361C2.58162 3.28777 2.71275 3.09167 2.87803 2.92651C3.04318 2.76123 3.23928 2.63011 3.45513 2.54063C3.67107 2.45112 3.90254 2.40504 4.1363 2.40504C4.37006 2.40504 4.60153 2.45112 4.81747 2.54063C5.03331 2.63011 5.22941 2.76123 5.39457 2.92651L5.42827 2.96022C5.48989 3.0198 5.56781 3.05979 5.65219 3.07509C5.74762 3.09239 5.88286 3.07608 5.95295 3.04515L5.95851 3.0427C6.03619 3.0094 6.10245 2.95416 6.14911 2.8837C6.19561 2.81348 6.22064 2.73125 6.22115 2.64705V2.54539C6.22115 2.07363 6.40856 1.62118 6.74214 1.2876ZM7.99994 6.5666C7.20833 6.5666 6.5666 7.20833 6.5666 7.99994C6.5666 8.79154 7.20833 9.43327 7.99994 9.43327C8.79154 9.43327 9.43327 8.79154 9.43327 7.99994C9.43327 7.20833 8.79154 6.5666 7.99994 6.5666ZM5.43327 7.99994C5.43327 6.5824 6.5824 5.43327 7.99994 5.43327C9.41747 5.43327 10.5666 6.5824 10.5666 7.99994C10.5666 9.41747 9.41747 10.5666 7.99994 10.5666C6.5824 10.5666 5.43327 9.41747 5.43327 7.99994Z"
    //                 fill="#BCBBC2"
    //             />
    //         </svg>
    //     ),
    //     name: 'Settings',
    //     link: getFoldersUrl(),
    // },
]
