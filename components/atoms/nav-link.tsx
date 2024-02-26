import React from 'react'
import { Link } from 'expo-router'

interface IProps {
  href: string
  title: string
}
const NavLink = ({ href, title }: IProps) => {
  return <Link href={href}>{title}</Link>
}

export default NavLink
