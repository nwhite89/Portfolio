import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements AfterViewInit {
    viewInit: boolean = false;

    companies: {
        position: string,
        name: string,
        image: string,
        href: string,
        text: string,
    }[] = [
        {
            position: 'Co-founder',
            name: 'a KID called BEAST',
            image: '/assets/img/companies/akcb.png',
            href: 'https://akidcalledbeast.com',
            text: 'Overseeing all development for the NFT project as Head of development.',
        },
        // {
        //     position: 'Software Engineer',
        //     name: 'Scoota',
        //     image: '/assets/img/companies/scoota.png',
        //     href: 'https://scoota.com',
        //     text: "Working with Typescript, Angular 2, Django and Node JS to build Scoota's Rig distribuition platform allowing users to create, serve and monitor adverts programatically.",
        // },
    ];

    skills: {
        name: string,
        percent: number,
    }[] = [
        { name: 'Solidity', percent: 50 },
        { name: 'Typescript', percent: 70 },
        { name: 'Javascript', percent: 90 },
        { name: 'Node JS', percent: 70 },
        { name: 'Python', percent: 50 },
    ]

    ngAfterViewInit(): void {
        setTimeout(() => this.viewInit = true, 0)
    }
}
