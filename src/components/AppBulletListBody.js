import React from 'react'
import Bullet from './Bullet.js'

const AppBulletListBody = ({bullet_list}) => (
    <div>
        {
            bullet_list.map((item) => (
                <Bullet key={item.key} type={item.type} content={item.content}/>
            ))
        }
    </div>
)

export default AppBulletListBody