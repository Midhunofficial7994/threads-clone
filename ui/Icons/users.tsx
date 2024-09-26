type IconProps = React.HTMLAttributes<SVGSVGElement> | React.SVGProps<SVGSVGElement>

export const Icons = {
    logo: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512" {...props}>
            <path fill="currentColor" d="M331.5 235.7c2.2.9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6v-.5c.5-71.5 17.1-128.6 49.4-169.6c36.3-46.1 90.3-69.7 160.5-70.2h.3c70.3.5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8h-.7c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6.4 99.9 39.5 103.7 107.7l-.2.2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6.1-14.4.4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1.1z" /></svg>

    ),
    nextjs: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            />
        </svg>
    ),
    
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    google: ({ ...props }: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    follow: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="" fill="currentColor" height="18" role="img" viewBox="0 0 18 18" width="18" {...props}>
            <path d="M5.81283 13C5.55932 13 5.35968 12.9466 5.2139 12.8398C5.0713 12.736 5 12.5921 5 12.4082C5 12.1235 5.0919 11.8224 5.2757 11.505C5.4595 11.1876 5.72569 10.891 6.07427 10.6151C6.42286 10.3363 6.84274 10.1109 7.33393 9.93882C7.82828 9.76381 8.38285 9.67631 8.99762 9.67631C9.61557 9.67631 10.1701 9.76381 10.6613 9.93882C11.1557 10.1109 11.5756 10.3363 11.921 10.6151C12.2696 10.891 12.5357 11.1876 12.7195 11.505C12.9065 11.8224 13 12.1235 13 12.4082C13 12.5921 12.9271 12.736 12.7813 12.8398C12.6387 12.9466 12.4407 13 12.1872 13H5.81283ZM9.00238 8.87987C8.6633 8.87987 8.34957 8.79384 8.0612 8.6218C7.77283 8.44679 7.53991 8.21246 7.36245 7.9188C7.18816 7.62217 7.10101 7.28995 7.10101 6.92214C7.10101 6.56025 7.18816 6.23396 7.36245 5.94327C7.53991 5.65258 7.77283 5.42269 8.0612 5.25362C8.34957 5.08454 8.6633 5 9.00238 5C9.34145 5 9.65518 5.08306 9.94355 5.24917C10.2319 5.41528 10.4633 5.64368 10.6376 5.93437C10.815 6.2221 10.9037 6.54839 10.9037 6.91324C10.9037 7.28402 10.815 7.61772 10.6376 7.91435C10.4633 8.21098 10.2319 8.44679 9.94355 8.6218C9.65518 8.79384 9.34145 8.87987 9.00238 8.87987Z">
            </path>
        </svg>
    ),
    like: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="" fill="currentColor" height="18" role="img" viewBox="0 0 18 18" width="18" {...props}>
            <path d="M5 8.33956C5 6.84296 6.07645 5.75 7.48174 5.75C8.08884 5.75 8.61175 5.95938 9.00094 6.30299C9.3914 5.95863 9.91188 5.75 10.5183 5.75C11.9276 5.75 13 6.84345 13 8.33956C13 9.20812 12.6297 10.037 12.0266 10.7947C11.4237 11.5521 10.5712 12.2609 9.5565 12.9023L9.55379 12.904C9.48997 12.9437 9.41108 12.9882 9.32747 13.0242C9.25284 13.0563 9.1332 13.1001 9 13.1001C8.86687 13.1001 8.74693 13.0551 8.67518 13.0242C8.59318 12.9889 8.51482 12.9453 8.45151 12.9072L8.44748 12.9048L8.4435 12.9023C7.42882 12.2609 6.57626 11.5521 5.97338 10.7947C5.37032 10.037 5 9.20812 5 8.33956Z">
            </path>
        </svg>
    ),
    googleColor: ({ ...props }: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="31.27" height="32" viewBox="0 0 256 262" {...props}>
            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
        </svg>
    ),
    circleMenu: (props: IconProps) => (
        <svg aria-label="More" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"{...props}>
            <title>More</title>
            <circle cx="12" cy="12" fill="none" r="10" stroke="transparent" strokeWidth="2"></circle>
            <path clipRule="evenodd" d="M7.5 13.5C6.67157 13.5 6 12.8284 6 12C6 11.1716 6.67157 10.5 7.5 10.5C8.32843 10.5 9 11.1716 9 12C9 12.8284 8.32843 13.5 7.5 13.5Z" fillRule="evenodd">
            </path>
            <path clipRule="evenodd" d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z" fillRule="evenodd">
            </path>
            <path clipRule="evenodd" d="M16.5 13.5C15.6716 13.5 15 12.8284 15 12C15 11.1716 15.6716 10.5 16.5 10.5C17.3284 10.5 18 11.1716 18 12C18 12.8284 17.3284 13.5 16.5 13.5Z" fillRule="evenodd">
            </path>
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    home: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Home" width="24" height="24" viewBox="0 0 26 24" fill="correntColor" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Home</title>
            <path d="M23.7633 19.3452V11.3539C23.7633 10.1542 23.2841 9.00292 22.4128 8.17828C21.3913 7.21162 19.9742 5.90754 18.8301 4.9942C16.666 3.26652 15.5859 1.85492 13.0001 1.85492C10.4142 1.85492 9.33409 3.26652 7.16997 4.9942C6.0259 5.90754 4.60877 7.21162 3.58735 8.17828C2.716 9.00292 2.23682 10.1542 2.23682 11.3539V19.3452C2.23682 20.8313 3.44153 21.6378 4.92763 21.6378H8.76391C9.3162 21.6378 9.76391 21.19 9.76391 20.6378V16.3006V15.3398C9.76391 13.5289 11.2319 12.0609 13.0428 12.0609C14.8536 12.0609 16.3216 13.5289 16.3216 15.3398V16.3006V20.6378C16.3216 21.19 16.7693 21.6378 17.3216 21.6378H21.0725C22.5586 21.6378 23.7633 20.8313 23.7633 19.3452Z"
                stroke="currentColor" strokeWidth="2.5" />
        </svg>
    ),
    search: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Search" width="24" height="24" viewBox="0 0 24 25" fill="transparent" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Search</title>
            <path d="M16.5 17.725C18.0485 16.1084 19 13.9153 19 11.5C19 6.52944 14.9706 2.5 10 2.5C5.02944 2.5 1 6.52944 1 11.5C1 16.4706 5.02944 20.5 10 20.5C12.5552 20.5 14.8618 19.4351 16.5 17.725ZM16.5 17.725L22 23.225" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    ),
    activity: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Notifications" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26" {...props}><title>Notifications</title><path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
            stroke="currentColor" strokeWidth="2.5"></path></svg>

    ),
    create: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Create" width="24" height="24" viewBox="0 0 23 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Create</title>
            <path d="M11.5 2.25H7.75C4.43629 2.25 1.75 4.93629 1.75 8.25V15.75C1.75 19.0637 4.43629 21.75 7.75 21.75H15.25C18.5637 21.75 21.25 19.0637 21.25 15.75V12M11.981 11.4534L20.396 3.03838" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

    ),
    profile: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Profile" fill="transparent" height="26" role="img" viewBox="0 0 26 26" width="26" {...props}><title>Profile</title>
            <circle cx="13" cy="7.25" r="4" stroke="currentColor" strokeWidth="2.5" />
            <path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z" stroke="currentColor" strokeWidth="2.5">
            </path>
        </svg>
    ),
    menu: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 1H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 9H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    heart: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="transparent" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_2_816)">
                <path d="M0.9375 7.55625C0.9375 11.8453 4.59281 16.0744 10.3003 19.6819C10.6172 19.8722 10.9941 20.0625 11.25 20.0625C11.5153 20.0625 11.8931 19.8722 12.1997 19.6819C17.9062 16.0744 21.5625 11.8444 21.5625 7.55625C21.5625 3.8775 18.9797 1.3125 15.63 1.3125C13.6903 1.3125 12.1687 2.19375 11.25 3.5175C10.3519 2.205 8.82 1.3125 6.87 1.3125C3.53062 1.3125 0.9375 3.8775 0.9375 7.55625Z" stroke="currentColor" strokeWidth="1.875" />
            </g>
            <defs>
                <clipPath id="clip0_2_816">
                    <rect width="22.5" height="21.375" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    reply: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_2_817)">
                <path d="M19.865 15.945C21.0042 13.9745 21.387 11.6566 20.942 9.42441C20.497 7.19222 19.2545 5.19839 17.4467 3.8154C15.639 2.43241 13.3895 1.75485 11.1187 1.9093C8.84778 2.06375 6.71081 3.03965 5.10694 4.65468C3.50308 6.26972 2.54203 8.41341 2.40334 10.6853C2.26465 12.9572 2.95781 15.2019 4.35331 17C5.74882 18.7981 7.75122 20.0267 9.98644 20.4563C12.2217 20.8858 14.5368 20.4869 16.4994 19.334L21.125 20.625L19.865 15.945Z" stroke="currentColor" strokeWidth="1.875" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2_817">
                    <rect width="22.5" height="22.5" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

    ),
    reply2: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" height="18" role="img" viewBox="0 0 18 18" width="18" {...props}>
            <path d="M8.62523 12.5C8.5337 12.5 8.44836 12.4796 8.3692 12.4389C8.29004 12.4008 8.20594 12.3384 8.11688 12.2519L5.18924 9.4084C5.1175 9.33969 5.06803 9.26972 5.04082 9.19847C5.01361 9.12723 5 9.06107 5 9C5 8.93639 5.01361 8.86896 5.04082 8.79771C5.06803 8.72646 5.1175 8.65649 5.18924 8.58779L8.11688 5.77099C8.21583 5.6743 8.30117 5.6056 8.37291 5.56489C8.44465 5.52163 8.52628 5.5 8.61781 5.5C8.74892 5.5 8.85529 5.5458 8.93692 5.6374C9.01855 5.72901 9.05937 5.83842 9.05937 5.96565V7.4084H9.16698C9.83488 7.4084 10.41 7.51399 10.8924 7.72519C11.3772 7.93639 11.7743 8.24173 12.0835 8.64122C12.3952 9.04071 12.6252 9.5229 12.7737 10.0878C12.9246 10.6501 13 11.2837 13 11.9885C13 12.1539 12.9604 12.2799 12.8813 12.3664C12.8046 12.4555 12.7168 12.5 12.6178 12.5C12.5387 12.5 12.4583 12.4835 12.3766 12.4504C12.2975 12.4173 12.2257 12.3397 12.1614 12.2176C11.9462 11.8003 11.6976 11.4746 11.4156 11.2405C11.1336 11.0038 10.8083 10.8372 10.4397 10.7405C10.0711 10.6438 9.64688 10.5954 9.16698 10.5954H9.05937V12.0534C9.05937 12.1832 9.01855 12.2901 8.93692 12.374C8.85529 12.458 8.75139 12.5 8.62523 12.5Z">
            </path>
        </svg>
    ),
    share: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_2_823)">
                <path d="M21.125 2.8125L9.14188 9.45281" stroke="currentColor" strokeWidth="1.875" strokeLinejoin="round" />
                <path d="M11.4669 19.0629L21.125 2.81323H2.375L9.14188 9.45354L11.4669 19.0629Z" stroke="currentColor" strokeWidth="1.875" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2_823">
                    <rect width="22.5" height="22.5" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    ),
    verified: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Verified" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12" {...props}>
            <title>Verified</title>
            <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd">
            </path>
        </svg>
    ),
    verified2: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Verified" height="25" role="img" viewBox="-4 0 27 19" width="25" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Verified</title>
            <path d="M7.84375 17.5625C8.88281 18.6094 9.875 18.6016 10.9219 17.5625L12.0938 16.3906C12.2031 16.2812 12.2969 16.25 12.4375 16.25H14.0938C15.5703 16.25 16.2734 15.5469 16.2734 14.0703V12.4141C16.2734 12.2734 16.3125 12.1719 16.4141 12.0703L17.5859 10.8906C18.6328 9.85156 18.625 8.85938 17.5859 7.82031L16.4141 6.64844C16.3125 6.53906 16.2734 6.44531 16.2734 6.30469V4.64844C16.2734 3.17188 15.5703 2.46875 14.0938 2.46875H12.4375C12.2969 2.46875 12.1953 2.42969 12.0938 2.32812L10.9219 1.15625C9.875 0.109375 8.88281 0.109375 7.84375 1.16406L6.67188 2.32812C6.57031 2.42969 6.46875 2.46875 6.32812 2.46875H4.67188C3.19531 2.46875 2.49219 3.15625 2.49219 4.64844V6.30469C2.49219 6.44531 2.45312 6.54688 2.35156 6.64844L1.17969 7.82031C0.132812 8.85938 0.140625 9.85156 1.17969 10.8906L2.35156 12.0703C2.45312 12.1719 2.49219 12.2734 2.49219 12.4141V14.0703C2.49219 15.5469 3.19531 16.25 4.67188 16.25H6.32812C6.46875 16.25 6.5625 16.2812 6.67188 16.3906L7.84375 17.5625Z"></path><path d="M7.84375 17.5625C8.88281 18.6094 9.875 18.6016 10.9219 17.5625L12.0938 16.3906C12.2031 16.2812 12.2969 16.25 12.4375 16.25H14.0938C15.5703 16.25 16.2734 15.5469 16.2734 14.0703V12.4141C16.2734 12.2734 16.3125 12.1719 16.4141 12.0703L17.5859 10.8906C18.6328 9.85156 18.625 8.85938 17.5859 7.82031L16.4141 6.64844C16.3125 6.53906 16.2734 6.44531 16.2734 6.30469V4.64844C16.2734 3.17188 15.5703 2.46875 14.0938 2.46875H12.4375C12.2969 2.46875 12.1953 2.42969 12.0938 2.32812L10.9219 1.15625C9.875 0.109375 8.88281 0.109375 7.84375 1.16406L6.67188 2.32812C6.57031 2.42969 6.46875 2.46875 6.32812 2.46875H4.67188C3.19531 2.46875 2.49219 3.15625 2.49219 4.64844V6.30469C2.49219 6.44531 2.45312 6.54688 2.35156 6.64844L1.17969 7.82031C0.132812 8.85938 0.140625 9.85156 1.17969 10.8906L2.35156 12.0703C2.45312 12.1719 2.49219 12.2734 2.49219 12.4141V14.0703C2.49219 15.5469 3.19531 16.25 4.67188 16.25H6.32812C6.46875 16.25 6.5625 16.2812 6.67188 16.3906L7.84375 17.5625Z" stroke="currentColor" strokeWidth="5"></path><path fill="#0095f6" d="M7.84375 17.5625C8.88281 18.6094 9.875 18.6016 10.9219 17.5625L12.0938 16.3906C12.2031 16.2812 12.2969 16.25 12.4375 16.25H14.0938C15.5703 16.25 16.2734 15.5469 16.2734 14.0703V12.4141C16.2734 12.2734 16.3125 12.1719 16.4141 12.0703L17.5859 10.8906C18.6328 9.85156 18.625 8.85938 17.5859 7.82031L16.4141 6.64844C16.3125 6.53906 16.2734 6.44531 16.2734 6.30469V4.64844C16.2734 3.17188 15.5703 2.46875 14.0938 2.46875H12.4375C12.2969 2.46875 12.1953 2.42969 12.0938 2.32812L10.9219 1.15625C9.875 0.109375 8.88281 0.109375 7.84375 1.16406L6.67188 2.32812C6.57031 2.42969 6.46875 2.46875 6.32812 2.46875H4.67188C3.19531 2.46875 2.49219 3.15625 2.49219 4.64844V6.30469C2.49219 6.44531 2.45312 6.54688 2.35156 6.64844L1.17969 7.82031C0.132812 8.85938 0.140625 9.85156 1.17969 10.8906L2.35156 12.0703C2.45312 12.1719 2.49219 12.2734 2.49219 12.4141V14.0703C2.49219 15.5469 3.19531 16.25 4.67188 16.25H6.32812C6.46875 16.25 6.5625 16.2812 6.67188 16.3906L7.84375 17.5625ZM8.08594 13.3594C7.8125 13.3594 7.59375 13.2578 7.42188 13.0781L4.92188 10.2812C4.78906 10.1406 4.71875 9.94531 4.71875 9.75C4.71875 9.28125 5.05469 8.94531 5.53906 8.94531C5.80469 8.94531 6 9.03125 6.17188 9.21875L8.05469 11.3203L11.8203 5.94531C12.0078 5.67969 12.2109 5.57031 12.5234 5.57031C13.0078 5.57031 13.3516 5.90625 13.3516 6.35938C13.3516 6.51562 13.2891 6.71094 13.1719 6.875L8.78906 13.0234C8.60938 13.2578 8.375 13.3594 8.08594 13.3594Z"></path></svg>
    ),
    line: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-hidden="true" fill="none" height="284" viewBox="0 0 21 284" width="21" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 1L18 259" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18 273C18 259 4 259 4 266.12777C4 273.2555 18 273.9513 18 259" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path><path d="M18 273L18 283" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
    ),
    moreHorizontal: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3.60352 2.49561V2.51318C3.60352 2.84717 3.52441 3.14893 3.36621 3.41846C3.20801 3.68799 2.99121 3.90186 2.71582 4.06006C2.44629 4.21826 2.14453 4.29736 1.81055 4.29736H1.79297C1.45898 4.29736 1.15723 4.21826 0.887695 4.06006C0.618164 3.90186 0.401367 3.68799 0.237305 3.41846C0.0791016 3.14893 0 2.84717 0 2.51318V2.49561C0 2.16162 0.0791016 1.85986 0.237305 1.59033C0.401367 1.31494 0.618164 1.09814 0.887695 0.939941C1.15723 0.781738 1.45898 0.702637 1.79297 0.702637H1.81055C2.14453 0.702637 2.44629 0.781738 2.71582 0.939941C2.99121 1.09814 3.20801 1.31494 3.36621 1.59033C3.52441 1.85986 3.60352 2.16162 3.60352 2.49561Z" fill="currentColor" />
            <path d="M9.80176 2.49561V2.51318C9.80176 2.84717 9.72266 3.14893 9.56445 3.41846C9.40625 3.68799 9.18945 3.90186 8.91406 4.06006C8.64453 4.21826 8.34277 4.29736 8.00879 4.29736H7.99121C7.65723 4.29736 7.35547 4.21826 7.08594 4.06006C6.81641 3.90186 6.59961 3.68799 6.43555 3.41846C6.27734 3.14893 6.19824 2.84717 6.19824 2.51318V2.49561C6.19824 2.16162 6.27734 1.85986 6.43555 1.59033C6.59961 1.31494 6.81641 1.09814 7.08594 0.939941C7.35547 0.781738 7.65723 0.702637 7.99121 0.702637H8.00879C8.34277 0.702637 8.64453 0.781738 8.91406 0.939941C9.18945 1.09814 9.40625 1.31494 9.56445 1.59033C9.72266 1.85986 9.80176 2.16162 9.80176 2.49561Z" fill="currentColor" />
            <path d="M16 2.49561V2.51318C16 2.84717 15.9209 3.14893 15.7627 3.41846C15.6045 3.68799 15.3877 3.90186 15.1123 4.06006C14.8428 4.21826 14.541 4.29736 14.207 4.29736H14.1895C13.8555 4.29736 13.5537 4.21826 13.2842 4.06006C13.0146 3.90186 12.7979 3.68799 12.6338 3.41846C12.4756 3.14893 12.3965 2.84717 12.3965 2.51318V2.49561C12.3965 2.16162 12.4756 1.85986 12.6338 1.59033C12.7979 1.31494 13.0146 1.09814 13.2842 0.939941C13.5537 0.781738 13.8555 0.702637 14.1895 0.702637H14.207C14.541 0.702637 14.8428 0.781738 15.1123 0.939941C15.3877 1.09814 15.6045 1.31494 15.7627 1.59033C15.9209 1.85986 16 2.16162 16 2.49561Z" fill="currentColor" />
        </svg>

    ),
    repost: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Repost" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20" {...props}>
            <title>Repost</title>
            <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z">
            </path>
        </svg>
    ),
    repost2: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="" fill="currentColor" height="18" role="img" viewBox="0 0 18 18" width="18" {...props}>
            <path clipRule="evenodd" d="M9.60636 4.15993C9.39068 3.94669 9.041 3.94669 8.82532 4.15994C8.60965 4.37319 8.60966 4.71893 8.82534 4.93217L9.3914 5.49184H7.39323C6.0714 5.49184 5 6.55116 5 7.85809V9.66008C5 9.96165 5.24726 10.2061 5.55228 10.2061C5.85729 10.2061 6.10455 9.96165 6.10455 9.66008V7.85809C6.10455 7.15432 6.68143 6.58394 7.39323 6.58394H9.39194L8.82522 7.14459C8.6096 7.3579 8.6097 7.70364 8.82544 7.91682C9.04118 8.13001 9.39086 8.12991 9.60648 7.9166L11.1099 6.42925C11.213 6.33005 11.2771 6.19136 11.2771 6.03789C11.2771 5.88474 11.2133 5.74631 11.1106 5.64715L9.60636 4.15993ZM13 8.38044C13 8.07886 12.7527 7.83439 12.4477 7.83439C12.1427 7.83439 11.8954 8.07886 11.8954 8.38044V10.1819C11.8954 10.8857 11.3186 11.4561 10.6068 11.4561H8.41936L9.02641 10.8573C9.24234 10.6443 9.24274 10.2985 9.02731 10.085C8.81188 9.87154 8.4622 9.87114 8.24627 10.0841L6.73619 11.5738C6.63243 11.6761 6.57408 11.8151 6.57398 11.96C6.57389 12.1049 6.63205 12.2439 6.73567 12.3464L8.24575 13.84C8.46139 14.0533 8.81107 14.0533 9.02679 13.8401C9.2425 13.6269 9.24257 13.2812 9.02693 13.0679L8.50149 12.5482H10.6068C11.9286 12.5482 13 11.4889 13 10.1819V8.38044Z" fillRule="evenodd">
            </path>
        </svg>
    ),
    reposted: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Reposted" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20" {...props}>
            <title>reposted</title>
            <path d="M16.00092,6.00098c.13013,0,.2597-.02649,.3819-.07703,.24493-.10132,.43982-.29626,.54114-.54114,.10095-.24426,.10095-.51929,0-.76367-.0509-.12305-.12451-.23401-.21729-.32642L13.20697,.79297c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l1.79395,1.79395h-5.31543c-2.90625,0-5.27148,2.36426-5.27148,5.27051v4.22852c0,.55273,.44727,1,1,1s1-.44727,1-1v-4.22852c0-1.80371,1.46777-3.27051,3.27148-3.27051h7.72949Zm3.99707,3.49609c-.55273,0-1,.44727-1,1v4.22754c0,1.80371-1.4668,3.27051-3.27051,3.27051H7.99701c-.13007,0-.2597,.02649-.38184,.0769-.24487,.10132-.43982,.29626-.54114,.54126-.10107,.24426-.10107,.51953,0,.76379,.05084,.12292,.12439,.23389,.21716,.32629l3.50171,3.50366c.19531,.19531,.45117,.29297,.70703,.29297s.51172-.09766,.70703-.29297c.39062-.39062,.39062-1.02344,0-1.41406l-1.79688-1.79785h5.31738c2.90625,0,5.27051-2.36426,5.27051-5.27051v-4.22754c0-.55273-.44727-1-1-1Zm-5.20508-.51074l-3.90527,3.90625-1.68066-1.68066c-.39062-.39062-1.02344-.39062-1.41406,0s-.39062,1.02344,0,1.41406l2.3877,2.3877c.1875,.1875,.44141,.29297,.70703,.29297s.51953-.10547,.70703-.29297l4.6123-4.61328c.39062-.39062,.39062-1.02344,0-1.41406s-1.02344-.39062-1.41406,0Z">
            </path>
        </svg>
    ),
    quote: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Quote" fill="currentColor" height="20" role="img" viewBox="0 0 20 20" width="20" {...props}>
            <title>Quote</title>
            <path d="M6.362 18.772c.515 0 .913-.232 1.544-.789l2.83-2.49h4.74c2.516 0 3.985-1.494 3.985-3.976V4.984C19.46 2.502 17.99 1 15.477 1H4.984C2.47 1 1 2.494 1 4.984v6.533c0 2.49 1.536 3.976 3.876 3.976h.291v1.943c0 .821.448 1.336 1.195 1.336Zm.457-2.117v-2.332c0-.532-.233-.722-.722-.722H5.076c-1.47 0-2.175-.748-2.175-2.184v-6.34C2.9 3.64 3.606 2.9 5.076 2.9h10.31c1.46 0 2.174.739 2.174 2.175v6.342c0 1.436-.714 2.183-2.175 2.183h-4.773c-.54 0-.788.09-1.178.481l-2.615 2.573Zm-.523-8.89c0 .963.606 1.677 1.519 1.677.382 0 .73-.091.955-.357h.116c-.241.614-.83 1.08-1.494 1.237-.266.066-.374.199-.374.398 0 .233.183.382.432.382.904 0 2.473-1.08 2.473-2.972 0-1.17-.73-2.083-1.867-2.083-1.013 0-1.76.714-1.76 1.718Zm4.408 0c0 .963.606 1.677 1.519 1.677.381 0 .73-.091.954-.357h.117c-.241.614-.839 1.08-1.495 1.237-.265.066-.373.199-.373.398 0 .233.182.382.431.382.905 0 2.474-1.08 2.474-2.972 0-1.17-.73-2.083-1.868-2.083-1.012 0-1.76.714-1.76 1.718Z" fill="currentColor">
            </path>
        </svg>
    ),
    quote2: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg aria-label="Quote" fill="currentColor" role="img" viewBox="0 0 18 18" {...props}>
            <title>Quote</title>
            <path d="M5 8.6658C5 8.3518 5.07633 8.07013 5.22899 7.82078C5.38407 7.56912 5.59367 7.36941 5.85779 7.22165C6.12191 7.07388 6.42117 7 6.75557 7C7.09481 7 7.40618 7.08081 7.68969 7.24242C7.97562 7.40404 8.2046 7.63838 8.37665 7.94545C8.54869 8.25022 8.63471 8.61847 8.63471 9.05022C8.63471 9.43348 8.56323 9.78557 8.42026 10.1065C8.27972 10.4274 8.08829 10.7091 7.84598 10.9515C7.67151 11.127 7.47282 11.2817 7.24989 11.4156C7.02938 11.5472 6.79434 11.6522 6.54475 11.7307C6.46479 11.7538 6.39936 11.7711 6.34848 11.7827C6.29759 11.7942 6.24186 11.8 6.18128 11.8C6.09647 11.8 6.02862 11.7769 5.97774 11.7307C5.92685 11.6846 5.90141 11.6257 5.90141 11.5541C5.90141 11.5149 5.90868 11.4802 5.92322 11.4502C5.93776 11.4202 5.95956 11.3948 5.98864 11.374C6.01287 11.3532 6.04559 11.3348 6.08678 11.3186C6.1304 11.3025 6.18128 11.2851 6.23944 11.2667C6.43813 11.2113 6.62472 11.1362 6.79918 11.0416C6.97607 10.9469 7.136 10.8384 7.27896 10.716C7.42193 10.5913 7.5443 10.4551 7.64607 10.3074C7.75027 10.1596 7.82902 10.0038 7.88233 9.83983H7.78419C7.63395 9.99913 7.45949 10.1192 7.26079 10.2C7.06209 10.2808 6.85491 10.3212 6.63925 10.3212C6.33152 10.3212 6.05407 10.2473 5.80691 10.0996C5.55975 9.9518 5.36347 9.75325 5.21808 9.5039C5.07269 9.25224 5 8.97287 5 8.6658ZM9.36529 8.6658C9.36529 8.3518 9.44162 8.07013 9.59428 7.82078C9.74936 7.56912 9.95896 7.36941 10.2231 7.22165C10.4872 7.07388 10.7865 7 11.1209 7C11.4601 7 11.7715 7.08081 12.055 7.24242C12.3409 7.40404 12.5699 7.63838 12.7419 7.94545C12.914 8.25022 13 8.61847 13 9.05022C13 9.43348 12.9285 9.78557 12.7856 10.1065C12.645 10.4274 12.4512 10.7091 12.204 10.9515C12.032 11.127 11.8345 11.2817 11.6115 11.4156C11.391 11.5472 11.156 11.6522 10.9064 11.7307C10.8289 11.7538 10.7634 11.7711 10.7101 11.7827C10.6592 11.7942 10.6059 11.8 10.5502 11.8C10.4654 11.8 10.3963 11.7769 10.343 11.7307C10.2897 11.6846 10.2631 11.6257 10.2631 11.5541C10.2631 11.5149 10.2703 11.4802 10.2849 11.4502C10.3018 11.4202 10.3249 11.3948 10.3539 11.374C10.3782 11.3532 10.4109 11.3348 10.4521 11.3186C10.4933 11.3025 10.5429 11.2851 10.6011 11.2667C10.7998 11.2113 10.9876 11.1362 11.1645 11.0416C11.3414 10.9469 11.5013 10.8384 11.6443 10.716C11.7872 10.5913 11.9096 10.4551 12.0114 10.3074C12.1156 10.1596 12.1931 10.0038 12.244 9.83983H12.1495C11.9968 9.99913 11.8211 10.1192 11.6224 10.2C11.4262 10.2808 11.2202 10.3212 11.0045 10.3212C10.6968 10.3212 10.4194 10.2473 10.1722 10.0996C9.92503 9.9518 9.72876 9.75325 9.58337 9.5039C9.43798 9.25224 9.36529 8.97287 9.36529 8.6658Z"></path>
        </svg>
    ),
    image: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20" {...props}><title>Attach media</title><g><path clipRule="evenodd" d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z" fill="currentColor" fillRule="evenodd"></path><g id="Frame 290280"><g clipPath="url(#clip0_16905_4767)"><rect fill="none" height="15.5" rx="3.75" stroke="currentColor" strokeWidth="1.5" width="15.5" x="6.75" y="5.8894"></rect><path d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="10.75" cy="9.8894" fill="currentColor" r="1.25"></circle></g></g></g><defs><clipPath id="clip0_16905_4767"><rect fill="white" height="17" rx="4.5" width="17" x="6" y="5.1394"></rect></clipPath></defs></svg>
    ),
    loading: (props: IconProps | React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
            width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
            <g transform="rotate(0 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.6205673758865248s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(45 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.5319148936170213s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(90 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.4432624113475177s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(135 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.35460992907801414s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(180 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.26595744680851063s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(225 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.17730496453900707s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(270 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="-0.08865248226950354s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(315 50 50)">
                <rect x="47.5" y="22.5" rx="2.21" ry="2.21" width="5" height="17" fill="#696969">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.7092198581560283s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
            </g>
        </svg>
    ),
}