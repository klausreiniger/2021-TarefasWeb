import React from 'react'
import AppBulletListBody  from './AppBulletListBody'
import AppBulletListTitle from './AppBulletListTitle'

const AppBulletList = ({title, bullet_list}) => (
    <div>
        <AppBulletListTitle title={title} />
        <AppBulletListBody bullet_list={bullet_list} />
    </div>
)

export default AppBulletList