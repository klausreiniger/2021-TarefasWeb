import React from 'react'
import AppBullet from './AppBullet.js'

const AppBulletListBody = ({bullet_list}) => (
    <div>
        {
            bullet_list.map((item) => (
                <AppBullet key={item.key} type={item.type} content={item.content}/>
            ))
        }
    </div>
)

export default AppBulletListBody