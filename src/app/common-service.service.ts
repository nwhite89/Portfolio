import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    socials: { href: string, class: string, title: string }[] = [
        {
            href: 'http://github.com/nwhite89',
            class: 'fa-brands fa-github',
            title: 'GitHub',
        },
        {
            href: 'http://x.com/nwhite',
            class: 'fa-brands fa-x-twitter',
            title: 'X',
        },
        {
            href: 'http://instagram.com/nwhite89',
            class: 'fa-brands fa-instagram',
            title: 'Instagram',
        },
        {
            href: 'http://t.me/nwhite89',
            class: 'fa-brands fa-telegram',
            title: 'Telegram',
        },
        {
            href: 'https://linkedin.com/in/nwhite89',
            class: 'fa-brands fa-linkedin',
            title: 'LinkedIn',
        },
    ]
}
