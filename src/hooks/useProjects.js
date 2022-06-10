const useProjects = () => {
    const projects = [
        {
            id:1,
            name:'Wood Master',
            live_link:'https://wood-master-bm.web.app',
            github_client:'https://github.com/bmsani/Wood-master',
            github_surver:'https://github.com/bmsani/Wood-master-server',
            img_tumb:'https://i.ibb.co/RbSHNVh/Wood-tumb.png',
            img_1:'https://i.ibb.co/0ffy37k/Wood-1.png',
            img_2:'https://i.ibb.co/4j6GDvR/wood-2.png',
            img_3:'https://i.ibb.co/v4Wx22y/wood-3.png',
            features:`This is a carpenter tool manufacturer company
            user can log in using email password or by the social login of google
            A loged in user can add review also he/she can purchase a product
            A logged in user pay his order by strip payment methoud
            A user can see his own profile update his profile
            a admin can manage users, oders, add product, delete a product, delete or ship orders`,
            techonology:`Library we have used: create-react-app, reac-router, google-firebase, react-firebase-hooks, react-bootstrap, React cogo Toast, Sweet alart, strip as pyement method and I have used firebase hosting to host the clint site. and heroku for the server.`
        },
        {
            id:2,
            name:'Mountain Rockers',
            live_link:'https://mountain-rockers.web.app',
            github_client:'https://github.com/bmsani/Mountain-Rockers',
            github_surver:'https://github.com/bmsani/Mountain-rockers-server',
            img_tumb:'https://i.ibb.co/HPK6CN1/mountain-tumb.png',
            img_1:'https://i.ibb.co/2ZLSXXR/mountain-1.png',
            img_2:'https://i.ibb.co/SKd1xcB/mountain-2.png',
            img_3:'https://i.ibb.co/k3tCVLW/mountain-3.png',
            features:`This is a warehouse management website of hiking gears
            user can log in using email password or by the social login of google
            A loged in user can add a product also he/she can update the product quantity
            A logged in user can delete a item
            A user can see his own added items in the my items page`,
            techonology:`Library we have used: create-react-app, reac-router, google-firebase, react-firebase-hooks, react-bootstrap, React cogo Toast, Sweet alart. and I have used firebase hosting to host the clint site. and heroku for the server.`
        },
        {
            id:3,
            name:'Dyamond Fitness',
            live_link:'https://assingment-10-a59fb.web.app/',
            github_client:'https://github.com/bmsani/Dyamond-fitness',
            github_surver:'Null',
            img_tumb:'https://i.ibb.co/pXrdPM2/dyamond-tumb.png',
            img_1:'https://i.ibb.co/PxdwL77/dyamond-1.png',
            img_2:'https://i.ibb.co/C2d2TBZ/dyamond-2.png',
            img_3:'https://i.ibb.co/f15t3Fx/dyamond-3.png',
            features:`This is a personal feetness trainers website you can find your necessary help from here.
            Here i have implemented 3 different services which you can buy
            you can login here using email and password or you can use the social link of google.
            The checkout page is protected so you can not visit the page without log-in.
            In the blog page we emplemented some faq and in the about page you can get the developers details.`,
            techonology:`Library we have used: create-react-app, reac-router, google-firebase, react-firebase-hooks, react-bootstrap, react-tostify. and web have used firebase hosting to host the site.`
        },
    ]

    return projects
}

export default useProjects;