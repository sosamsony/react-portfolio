import { Title } from 'components'
import React from 'react'
import './works.css'

const Works = () => {
    const works = [
        {
            id: 1,
            title: 'Sosamson Links',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/WAR.png',
            live: 'https://womenaboverubies.org/',
        },
        {
            id: 2,
            title: 'Food App',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/HUB.png',
            live: 'https://thebloominghub.com/',
        },
        {
            id: 3,
            title: 'Website | Oversea Real Estate',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/ORM.png',
            live: 'http://ormuae.com/',
        },
        {
            id: 4,
            title: 'Davidic Music App',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/BRIE.png',
            live: 'https://davidicapp.sosamson.com',
        },
        {
            id: 5,
            title: 'UI Design | Kidsitter App',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/KIDS.png',
            live: 'https://www.figma.com/proto/YuXjYDsC7aRE2eLydmtupd/Kidsitter?page-id=0%3A1&node-id=2%3A32&viewport=241%2C48%2C0.15&scaling=scale-down&starting-point-node-id=2%3A32',
        },
        {
            id: 6,
            title: 'Branding | Sudan Navy School',
            github: 'https://www.behance.net/gallery/144787451/SUDAN-MARITIME-ACADEMY',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd8566144787451.62928b609967b.png',
            live: 'https://masudan.com',
        },
        {
            id: 7,
            title: 'Marketech Agency',
            github: 'https://github.com/sosamsony',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd8566144787451.62928b609967b.png',
            live: 'https://marketech.ae',
        },
        {
            id: 8,
            title: 'Abu Dhabi Projects',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/KIDS.png',
            live: 'https://fcpwebs.com/',
        },
        {
            id: 9,
            title: 'Mountzion Film Academy',
            github: 'https://github.com/sosamsony',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd8566144787451.62928b609967b.png',
            live: 'https://mountzionfa.com',
        },
        {
            id: 10,
            title: 'AspireHub Canada',
            github: 'https://github.com/sosamsony',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd8566144787451.62928b609967b.png',
            live: 'https://aspirehub.org',
        },
        {
            id: 11,
            title: 'Gomba & Patience Oyor Foundation',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/KIDS.png',
            live: 'https://gopat.org/',
        },
        {
            id: 11,
            title: 'Invoice Generator',
            github: 'https://github.com/sosamsony',
            img: 'http://sosarena.com/profile/wp-content/uploads/2021/12/KIDS.png',
            live: 'https://gopat.org/',
        }

    ]
    return (
        <section id='portfolio'>
            <Title title='Portfolio' text="My Recent Work" />
            <div className='works-container'>
                {
                    works.map(work => {
                        return (
                            <div className='work-item' key={work.id}>
                                <div className='work-img'>
                                    <img src={work.img} alt={work.title} />
                                </div>
                                <div className='work-info'>
                                    <h3>{work.title}</h3>
                                    <p>
                                        <a
                                            href={work.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm '
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={work.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm btn-primary'
                                        >
                                            Live
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Works