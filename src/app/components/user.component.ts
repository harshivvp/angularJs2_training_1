import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../templates/user.component.html',
    providers: [PostsService],

})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];


    constructor(private postsService: PostsService) {
        this.name = 'Harshiv';
        this.email = 'harshiv@quixom.com';
        this.address = {
            street: 'Adajan Road',
            city: 'Surat',
            state: 'Gujarat',
        }
        this.hobbies = ['Coding', 'CounterStrike', 'Marvel/DC movies'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            console.log(posts)
            this.posts = posts;
        });
    }

    toggleHobbies() {
        if (this.showHobbies == false) {
            this.showHobbies = true;
            console.log("Here's the list of hobbies!")
        }
        else {
            console.log("No list of hobbies!")
            this.showHobbies = false;
        }
    }

    addHobby(hobby: string) {
        console.log(hobby);
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);

    }
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface address {
    street: string;
    city: string;
    state: string;
}
