import { Link } from "expo-router";

const NavLink=({ href, title })=>{
    return <Link href={href}>{title}</Link>
}
export default NavLink
