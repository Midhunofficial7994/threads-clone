'use client'
import React from 'react'
import { useAppSelector,useAppDispatch } from '@/hooks/useAppDispatch';
import style from '../../../ui/main/profile.module.scss'
const ProfilePage:React.FC = () => {
    const { users } = useAppSelector((state) => state.users);

  return (
    <div  className={style.container}>
        <h1 className={style.title}>Profile</h1>
    </div>
  )
}

export default ProfilePage
