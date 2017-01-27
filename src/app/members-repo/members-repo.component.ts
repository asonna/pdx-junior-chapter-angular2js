import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members-repo',
  templateUrl: './members-repo.component.html',
  styleUrls: ['./members-repo.component.css'],
  providers: [MemberService]
})
export class MembersRepoComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  // formShowing:boolean = false;

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  // showForm(){
  //   this.formShowing=true;
  // }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
