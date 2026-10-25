import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layouts/public-layout/public-layout')
                .then(m => m.PublicLayout),
        children: [
            {
                path: '',
                title: 'Home | Marriage Hall',
                loadComponent: () =>
                    import('./features/home/home').then(m => m.Home),
            },
            {
                path: 'about',
                title: 'About Us | Marriage Hall',
                loadComponent: () =>
                    import('./features/about/about').then(m => m.About),
            },
            {
                path: 'facilities',
                title: 'Facilities | Marriage Hall',
                loadComponent: () =>
                    import('./features/facilities/facilities')
                        .then(m => m.Facilities),
            },
            {
                path: 'gallery',
                title: 'Gallery | Marriage Hall',
                loadComponent: () =>
                    import('./features/gallery/gallery').then(m => m.Gallery),
            },
            {
                path: 'contact',
                title: 'Contact Us | Marriage Hall',
                loadComponent: () =>
                    import('./features/contact/contact').then(m => m.Contact),
            },
            {
                path: '**',
                title: 'Page Not Found',
                loadComponent: () =>
                    import('./features/not-found/not-found')
                        .then(m => m.NotFound),
            },
        ],
    },
];