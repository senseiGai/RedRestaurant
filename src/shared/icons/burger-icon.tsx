import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props: any) => (
    <Svg
        width={60}
        height={58}
        viewBox="0 0 60 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 50.7143C0 54.4543 3.9 58 7.2 58H55.2C58.5 58 60 54.4543 60 50.7143V41H0V50.7143ZM7.2 48.2857H55.2V50.7143H7.2V48.2857Z"
            fill="#7C2828"
        />
        <Path
            d="M50.4 27C44.5471 27 44.5219 29.25 40.8 29.25C37.2282 29.25 34.5329 27 28.8 27C22.9471 27 22.9219 29.25 19.2 29.25C15.6282 29.25 15.3329 27 9.6 27C3.74707 27 3.72186 29.25 0 29.25V36C5.70285 36 6.05823 33.75 9.6 33.75C13.1718 33.75 13.4671 36 19.2 36C25.0529 36 27.4781 33.75 31.2 33.75C34.7718 33.75 35.0671 36 40.8 36C46.6529 36 46.6781 33.75 50.4 33.75C53.9718 33.75 54.2371 35.94 60 36V29.25C55.1676 28.26 55.5326 27 50.4 27Z"
            fill="#7C2828"
        />
        <Path
            d="M59.9998 19.5556C60.0598 6.98413 45.9598 0 28.7999 0C11.67 0 0 6.98413 0 19.5556V22H59.9998V19.5556ZM7.19998 14.6667C9.68996 7.78381 18.63 7.33333 28.7999 7.33333C38.7298 7.33333 46.6199 8.26222 50.3998 12.2222C51.2998 13.1965 52.4098 13.5038 52.7998 14.6667H7.19998Z"
            fill="#7C2828"
        />
    </Svg>
);
export default SVGComponent;
