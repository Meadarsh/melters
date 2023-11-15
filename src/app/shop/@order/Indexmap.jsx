import dynamic from "next/dynamic";
const Map=dynamic(()=>{
    return import("./map")}, {ssr: false})
export default Map